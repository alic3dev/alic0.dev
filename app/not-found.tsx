import type react from 'react'

import { Container } from '@components/container'
import { Footer } from '@components/footer'
import { Header } from '@components/header/header'

import styles from '@app/not_found.module.scss'

export default function NotFound(): react.ReactElement {
  return (
    <main className={styles.page}>
      <Container fixed_center>
        <div className={styles.content}>
          <h1>
            404: not_found
          </h1>

          <p>could not find requested resource</p>
        </div>
      </Container>

      <Header />
      <Footer />
    </main>
  )
}
