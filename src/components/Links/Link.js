import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import styles from './styles/link.module.less'

export default function Link({ href, children, ...props }) {
  return (
    <GatsbyLink to={href} className={styles.link}>
      {children}
    </GatsbyLink>
  )
}
