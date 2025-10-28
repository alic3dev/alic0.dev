'use client'

import react from 'react'

import styles from '@components/page_selector.module.scss'

export function PageSelector({
  defaultValue,
  maxValue,
  baseURL
}: {
  defaultValue: number
  maxValue: number
  baseURL?: string
}): react.ReactElement {
  const [selectedValue, setSelectedValue] = react.useState<number>(defaultValue)

  return (
    <div className={styles.page_selector}>
      <input
        className={styles.selected_input}
        type="number"
        min={1}
        max={maxValue}
        value={selectedValue}
        onChange={(event: react.ChangeEvent<HTMLInputElement>): void => {
          if (
            isNaN(event.currentTarget.valueAsNumber) ||
            event.currentTarget.valueAsNumber <= 0
          ) {
            setSelectedValue(1)
          } else if (event.currentTarget.valueAsNumber > maxValue) {
            setSelectedValue(maxValue)
          } else {
            setSelectedValue(event.target.valueAsNumber)
          }
        }}
      />
      &nbsp;/ {maxValue}
      {baseURL ? (
        <>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href={`/${baseURL}/${selectedValue}`}>Go</a>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
