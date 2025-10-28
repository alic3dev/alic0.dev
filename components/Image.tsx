'use client'

import react from 'react'
import NextImage from 'next/image'

import styles from '@components/Image.module.scss'

export function Image(properties_image: Parameters<typeof NextImage>[0]) {
  const [loaded, loaded_set] = react.useState(false)

  const load_on = react.useCallback(
    function load_on_function(
      ...parameters_load_on: Parameters<
        NonNullable<Parameters<typeof NextImage>[0]['onLoad']>
      >
    ) {
      loaded_set(true)

      if (properties_image.onLoad) {
        properties_image.onLoad.apply(this, parameters_load_on)
      }
    },
    [properties_image.onLoad]
  )

  const name_class = react.useMemo(
    () =>
      `${properties_image.className ?? ''} ${styles.image} ${loaded ? styles.loaded : ''}`,
    [properties_image.className, loaded]
  )

  return (
    <NextImage {...properties_image} className={name_class} onLoad={load_on} />
  )
}
