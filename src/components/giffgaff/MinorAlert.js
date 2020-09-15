import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import styles from './styles/MinorAlert.module.css'

export default function MinorAlert(props) {
  const { type, title, children, noIcon, customIcon } = props

  return (
    <div
      role="alert"
      className={clsx(
        styles.alert,
        [type === 'info' && styles.info],
        [type === 'warning' && styles.warning],
        [type === 'success' && styles.success],
        [type === 'unknown' && styles.bland],
        [type === 'plain' && styles.bland]
      )}
    >
      {!noIcon && (customIcon ? customIcon : <div className={styles.icon} />)}
      <div>
        <p className={styles.title}>{title}</p>
        {children}
      </div>
    </div>
  )
}

MinorAlert.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error', 'plain']).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  noIcon: PropTypes.bool,
  customIcon: PropTypes.node,
}
