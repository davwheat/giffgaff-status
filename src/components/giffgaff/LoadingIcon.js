import React from 'react'

import clsx from 'clsx'

import * as styles from './styles/LoadingIcon.module.less'

export default function LoadingIcon({ className, ...props }) {
  return <span className={clsx(styles.spinner, className)} {...props} />
}
