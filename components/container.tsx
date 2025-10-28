import type react from 'react'

import styles from '@components/container.module.scss'

interface properties_container extends react.PropsWithChildren {
  fixed_center?: boolean
}

export function Container({
  children,
  fixed_center = false
}: properties_container): react.ReactElement {
  return (
    <div
      className={`${styles.container} ${fixed_center ? styles.fixed_center : ''}`}>
      {children}
    </div>
  )
}
