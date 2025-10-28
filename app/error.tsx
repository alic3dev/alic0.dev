'use client'

import react from 'react'

import { Footer } from '@components/footer'
import { Header } from '@components/header/header'

import styles from '@app/error.module.scss'

export default function Error({
  error
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [showStack, setShowStack] = react.useState<boolean>(false)

  const toggleShowStack = react.useCallback<() => void>(
    (): void =>
      setShowStack((prevShowStack: boolean): boolean => !prevShowStack),
    []
  )

  react.useEffect((): void => {
    console.error(error)
  }, [error])

  return (
    <>
      <Header />
        <main className={styles.page}>
          <div className={styles.container}>
            <h1>something went wrong</h1>

            <p className={styles.content}>
              {error.digest ? `${error.digest}: ` : ''}
              {error.name ? `${error.name}: ` : ''}
              {error.message}
            </p>

            {error.stack ? (
              <>
                <button onClick={toggleShowStack} className={styles.stack_toggle}>
                  {showStack ? 'hide stack' : 'show stack'}
                </button>
                <pre
                  className={`${styles.stack} ${showStack ? styles.visible : ''}`}>
                  {error.stack}
                </pre>
              </>
            ) : (
              <></>
            )}
          </div>
        </main>
      <Footer />
    </>
  )
}
