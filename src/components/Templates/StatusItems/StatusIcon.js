import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import styles from './styles/StatusIcon.module.less'

export default function StatusIcon({ outageSeverity }) {
  const { green, amber, red } = styles
  return (
    <div
      className={clsx(styles.statusIcon, {
        green: outageSeverity === 'none',
        amber: outageSeverity === 'minor',
        red: outageSeverity === 'severe',
      })}
    ></div>
  )
}

StatusIcon.propTypes = {
  outageSeverity: PropTypes.oneOf(['none', 'minor', 'severe']).isRequired,
}
