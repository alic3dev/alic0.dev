'use client'

import react from 'react'

import styles from '@components/header/header_item.module.scss'

interface HeaderItemHref extends react.PropsWithChildren {
  href: string
  location?: undefined
  currentLocation?: undefined
  navigateToLocation?: undefined
}

interface HeaderItemLocation extends react.PropsWithChildren {
  href?: string
  location: Pages.ValidLocation
  currentLocation: Pages.ValidLocation
  navigateToLocation?: (location: Pages.ValidLocation) => void
}

type HeaderItemParameters = HeaderItemHref | HeaderItemLocation

export function HeaderItem({
  children,
  href,
  location,
  currentLocation,
  navigateToLocation
}: HeaderItemParameters): react.ReactElement {
  const isActive = react.useMemo<boolean>(
    (): boolean =>
      location === currentLocation && currentLocation !== undefined,
    [location, currentLocation]
  )

  const onClick = react.useCallback<react.MouseEventHandler>(
    (event): void => {
      if (navigateToLocation) {
        event.preventDefault()
        navigateToLocation(location)
      }
    },
    [navigateToLocation, location]
  )

  return (
    <span
      className={`${styles.header_item_wrapper} ${isActive && styles.active}`}>
      <a
        className={styles.header_item}
        onClick={onClick}
        href={href || `#${location}`}>
        {children || location}
      </a>
    </span>
  )
}
