import React from 'react'

import styles from './styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <main className={styles.content}>
        <section className={styles.about}>
          <p>Made with ❤ by David Wheatley</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </section>
      </main>
    </footer>
  )
}
