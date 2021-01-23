import React from 'react'
import { PortalWithState } from 'react-portal'

import styles from './styles/Modal.module.less'
import clsx from 'clsx'

export default function Modal({ children, title, onClose }) {
  return (
    <PortalWithState onClose={onClose} closeOnEsc closeOnOutsideClick defaultOpen>
      {({ openPortal, closePortal, isOpen, portal }) => {
        console.log('render modal')
        console.log(isOpen)
        // openPortal()

        return (
          <>
            {isOpen && <div className={styles.backdrop} />}
            {portal(
              <>
                <dialog role="alert" className={styles.dialog}>
                  <header className={clsx(styles.dialogHeader, 'gg-t-louder')}>
                    <h1 className={styles.dialogTitle}>{title}</h1>
                    <button
                      onClick={closePortal}
                      aria-label="Close modal"
                      className={clsx(styles.dialogCloseButton, 'no-button-styles')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20 16.18l.36.41 1 1.1-.05.47-.39.38-1.55 1.69-.8.76h-.52l-5.71-5.38-.26.08-.3.34-1.36 1.28-3.07 3.22-.56.47h-.68l-2.76-2.64v-.83l5.41-5.43.08-.32-.36-.38-3.94-3.53L4 7.31l-.56-.7v-.83l2.61-2.41h.75l5.61 5.36L18.1 3h.9l2.35 1.85.14.28v.74l-5 5.29-.77.9.31.24.27.23.16.14z"></path>
                      </svg>
                    </button>
                  </header>
                  <main>{children}</main>
                </dialog>
              </>
            )}
          </>
        )
      }}
    </PortalWithState>
  )
}
