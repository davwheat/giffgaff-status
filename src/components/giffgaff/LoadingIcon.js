import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import styles from './styles/LoadingIcon.module.css'

export default function LoadingIcon({ className, ...props }) {
  return <span className={clsx(styles.spinner, className)} {...props} />
}
