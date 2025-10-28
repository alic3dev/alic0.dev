'use client'

import type react from 'react'

let motd_message: string = ''

export function MOTD({ message }: { message: string }): react.ReactElement {
  if (motd_message !== message) {
    motd_message = message

    console.log(`\n${message}\n`)
  }

  return <></>
}
