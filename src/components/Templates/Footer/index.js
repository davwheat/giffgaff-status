import React from 'react'

import styles from './styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <main className={styles.content}>
        <section className={styles.about}>
          <p>
            Made with ❤ by{' '}
            <a href="https://github.com/davwheat/giffgaff-status" target="_blank" rel="noopener noreferrer">
              David Wheatley
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()}</p>
        </section>
      </main>
    </footer>
  )
}
