import React, { useState } from 'react'

import styles from './styles/NotSolved.module.less'
import Modal from '../giffgaff/Modal'

export default function NotSolved() {
  const [checkStatusModalOpen, setCheckStatusModalOpen] = useState(false)

  function OpenModal() {
    setCheckStatusModalOpen(true)
    console.log('Opening modal')
  }

  return (
    <section className={styles.infrastructureStatusBtnContainer}>
      <button className="gg-t-speak-up gg-link-button gg-link--arrow" onClick={OpenModal}>
        Still having problems?
      </button>
      {checkStatusModalOpen && (
        <Modal
          title="Need more help?"
          onClose={() => {
            setCheckStatusModalOpen(false)
          }}
        >
          <p>Sorry to hear you're still having issues. Here's some great tips to&nbsp;try.</p>
          <ol className="gg-c-list-ordered">
            <li>
              <a href="https://status.o2.co.uk" className="gg-link gg-link--arrow" target="_blank" rel="noopener noreferrer">
                Check your local masts
              </a>
            </li>
            <li>Restart your phone</li>
            <li>
              <a
                href="https://www.giffgaff.com/help/articles/how-to-perform-a-manual-roam?utm_source=giffgaffstatus_com_mrjeeves"
                className="gg-link gg-link--arrow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try a manual roam
              </a>
            </li>
          </ol>
          <p>
            If none of this works, please{' '}
            <a
              href="https://community.giffgaff.com/t/help-and-support?utm_source=giffgaffstatus_com_mrjeeves"
              className="gg-link gg-link--arrow"
              target="_blank"
              rel="noopener noreferrer"
            >
              ask the community for&nbsp;help
            </a>
          </p>
        </Modal>
      )}
    </section>
  )
}
