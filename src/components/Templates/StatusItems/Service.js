import React from 'react'

import PropTypes from 'prop-types'

export default function Service({ outageSeverity, serviceName }) {
  return <div></div>
}

Service.propTypes = {
  outageSeverity: PropTypes.oneOf(['none', 'minor', 'severe']).isRequired,
  serviceName: PropTypes.string.isRequired,
}
