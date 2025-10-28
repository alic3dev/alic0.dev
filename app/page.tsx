import type react from 'react'

import { Footer } from '@components/footer'
import { Header } from '@components/header/header'
import { Projects } from '@components/projects'
import { Background } from '@components/background'

export default function RootPage(): react.ReactElement {
  return (
    <main id="root">
      <Header />
      <Background />
      <Projects />
      <Footer />
    </main>
  )
}
