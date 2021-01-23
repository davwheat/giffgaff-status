import React from 'react'

import styles from './styles/footer.module.less'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <main className={styles.content}>
        <section className={styles.about}>
          <p className="gg-t-speak-up">&copy; {new Date().getFullYear()} David Wheatley</p>
          <p className="gg-t-whisper">
            <a href="https://github.com/davwheat/giffgaff-status" rel="noopener noreferrer">
              View this site on GitHub
            </a>
          </p>
          <p className="gg-t-whisper">
            This page is run by a member of the giffgaff community and does not represent the views or opinions of giffgaff Limited, nor its staff. giffgaff is
            the registered trademark of giffgaff Limited.
          </p>
        </section>
        <nav className={styles.nav}>
          <a href="https://giffgaff.com?utm_source=giffgaffstatus_com_mrjeeves" rel="noopener noreferrer">
            giffgaff home
          </a>
          <a href="https://giffgaff.com/dashboard?utm_source=giffgaffstatus_com_mrjeeves" rel="noopener noreferrer">
            My giffgaff
          </a>
          <a href="https://community.giffgaff.com/?utm_source=giffgaffstatus_com_mrjeeves" rel="noopener noreferrer">
            giffgaff community
          </a>
          <a href="https://giffgaff.davwheat.dev/?utm_source=giffgaffstatus_com_mrjeeves" rel="noopener noreferrer">
            giffgaff unofficial help
          </a>
        </nav>
      </main>
    </footer>
  )
}
