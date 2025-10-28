'use client'

import React from 'react'

import * as three from 'three'

import styles from '@components/background.module.scss'
import { pseudo_random_get } from '@functions/pseudo_random';

const seed_of_the_seed = Date.now() % 3;

const seed_pseudo_random = [
  86420.13579,
  86420.13579,
  2468.97531
];

const multiplier_pseudo_random = [
  2468.97531,
  123,
  86420.13579
];

const pseudo_random = pseudo_random_get(
  seed_pseudo_random[
    seed_of_the_seed
  ],
  multiplier_pseudo_random[
    seed_of_the_seed
  ]
);

for (let a = 0; a < 29; a++) {
  pseudo_random();
}

let vertices = Float32Array.from({ length: 666 }).map(() => pseudo_random() * 6)
let vertices_head = vertices.map(v => v + (pseudo_random() - 0.5) / 10)

let position_light = new three.Vector3(0, 3, 0)
let position_light_head = new three.Vector3(
  pseudo_random(),
  pseudo_random() - 0.5 + 3,
  pseudo_random()
)

let upc: number = 3;
let frame: number = 0
let frame_light: number = 0

function BackgroundSegment({barcode}: {barcode: number}): React.ReactElement {
  const webGLSupported = React.useRef<{ value: boolean }>({ value: true })

  const renderer = React.useRef<three.WebGLRenderer | null>(null)
  const rendererContainer = React.useRef<HTMLDivElement | null>(null)
  const rendererProperties = React.useRef<{
    scene: three.Scene
    camera: three.PerspectiveCamera
    group_something: three.Group
    light: three.PointLight
    lines_something: three.LineSegments
    mesh_something: three.Mesh
  } | null>(null)

  React.useEffect((): (() => void) | void => {
    try {
      const canvas = document.createElement('canvas')
      webGLSupported.current.value = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      )
    } catch {
      webGLSupported.current.value = false
    }

    if (!webGLSupported.current.value || !rendererContainer.current) return

    if (!renderer.current) {
      renderer.current = new three.WebGLRenderer({ antialias: true })
      renderer.current.setSize(
        rendererContainer.current.clientWidth,
        rendererContainer.current.clientHeight
      )
      renderer.current.setPixelRatio(window.devicePixelRatio)

      renderer.current.shadowMap.enabled = true
      renderer.current.shadowMap.type = three.PCFSoftShadowMap

      renderer.current.toneMapping = three.ACESFilmicToneMapping
      renderer.current.toneMappingExposure = 0.8

      renderer.current.setClearColor('#ffffff')

      rendererContainer.current.prepend(renderer.current.domElement)
    }

    if (!rendererProperties.current) {
      const scene: three.Scene = new three.Scene()
      const camera: three.PerspectiveCamera = new three.PerspectiveCamera(
        90,
        rendererContainer.current.clientWidth /
          rendererContainer.current.clientHeight,
        0.1,
        1000
      )
      camera.position.set(6, 3, 6)
      camera.lookAt(0, 3, 0)

      const geometry_something = new three.BufferGeometry()

      geometry_something.setAttribute(
        'position',
        new three.BufferAttribute(vertices, 3)
      )

      const material_something = new three.MeshPhongMaterial({
        color: 0x808080,
        flatShading: true,
        opacity: 0.8,
        shininess: 1000,
        side: three.DoubleSide,
        specular: 0x050505,
        transparent: true
      })

      const mesh_something = new three.Mesh(geometry_something, material_something)

      const group_something = new three.Group()

      const edges_something = new three.EdgesGeometry(geometry_something)
      const material_lines_something = new three.LineBasicMaterial({
        color: '#000000'
      })
      const lines_something = new three.LineSegments(
        edges_something,
        material_lines_something
      )

      lines_something.scale.set(2, 2, 2)

      group_something.add(mesh_something)

      mesh_something.castShadow = true
      mesh_something.receiveShadow = true

      scene.add(group_something)

      const light = new three.PointLight(0xccbbff, 6, 0, 0.06)
      light.position.set(0, 3, 0)

      light.castShadow = true

      scene.add(light)

      const light_secondary = new three.PointLight(0xccbbff, 3, 0, 3)
      light_secondary.position.set(6, 3, 6)

      light_secondary.castShadow = true

      scene.add(light_secondary)

      rendererProperties.current = {
        camera,
        group_something,
        light,
        lines_something,
        mesh_something,
        scene
      }
    }

    const onResize: (ev: UIEvent) => void = (): void => {
      rendererProperties.current!.camera.aspect =
        rendererContainer.current!.clientWidth /
        rendererContainer.current!.clientHeight
      rendererProperties.current!.camera.updateProjectionMatrix()

      renderer.current?.setSize(
        rendererContainer.current!.clientWidth,
        rendererContainer.current!.clientHeight
      )
    }
    window.addEventListener('resize', onResize)

    const animate: XRFrameRequestCallback = (): void => {
      if (
        upc !== barcode || 
        !rendererProperties.current ||
        !rendererContainer.current ||
        !renderer.current
      ) {
        return
      }

      upc = barcode === 3 ? 2 : 3;

      const ratio = frame / 120
      const ratio_light = frame / 1200

      const inbetween = vertices.map((vertex, index) => (
        vertex + (
          (vertices_head[index] - vertex) * ratio)
        )
      );

      rendererProperties.current.mesh_something.geometry.setAttribute(
        'position',
        new three.BufferAttribute(
          inbetween,
          3
        )
      );

      rendererProperties.current.light.position.set(
        position_light.x -
          (position_light.x - position_light_head.x) * ratio_light,
        position_light.y -
          (position_light.y - position_light_head.y) * ratio_light,
        position_light.z -
          (position_light.z - position_light_head.z) * ratio_light
      )

      frame = frame + 1;
      frame_light = frame_light + 1;

      if (ratio === 1) {
        frame = 0;

        vertices = new Float32Array([...vertices_head]);
        vertices_head = vertices.map(v => v + (pseudo_random() - 0.5) * 0.1);
      }

      if (frame_light > 1200) {
        frame_light = 0

        position_light = new three.Vector3(
          position_light_head.x,
          position_light_head.y,
          position_light_head.z
        )

        position_light_head = new three.Vector3(
          (pseudo_random() - 0.5) * 2,
          (pseudo_random() - 0.5) * 3 + 3,
          pseudo_random() * 3
        )
      }

      rendererProperties.current.lines_something.rotateX(0.0001)
      rendererProperties.current.lines_something.rotateY(0.0001)
      rendererProperties.current.lines_something.rotateZ(0.0001)

      rendererProperties.current.group_something.rotateX(0.00001)
      rendererProperties.current.group_something.rotateY(0.00001)
      rendererProperties.current.group_something.rotateZ(0.00001)

      renderer.current.render(
        rendererProperties.current.scene,
        rendererProperties.current.camera
      )
    }
    renderer.current.setAnimationLoop(animate)

    return (): void => {
      renderer.current?.setAnimationLoop(null)

      window.removeEventListener('resize', onResize)
    }
  }, [barcode])

  return (
    <div ref={rendererContainer} className={styles.container_render} />
  )
}

export function Background() {
  return (
    <div className={styles.container}>
      <BackgroundSegment barcode={3} />
      <BackgroundSegment barcode={2} />
    </div>
  );
}
