import React, { useEffect, useState } from 'react'

import getAllServiceUpdates from '../../utils/getServiceUpdates'

import MinorAlert from '../giffgaff/MinorAlert'
import LoadingIcon from '../giffgaff/LoadingIcon'
import StatusTable from './StatusTable'

import styles from './styles/StyleChecker.module.css'

export default function StatusChecker() {
  const [allServiceUpdates, setAllServiceUpdates] = useState(null)
  const [checksComplete, setChecksComplete] = useState({ serviceUpdates: false })

  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    function GoneOffline() {
      setIsOnline(false)
      console.log('offline')
    }

    function GoneOnline() {
      setIsOnline(true)
      console.log('online')
    }

    window.addEventListener('online', GoneOnline)
    window.addEventListener('offline', GoneOffline)

    if (!allServiceUpdates) {
      getAllServiceUpdates().then(threads => {
        setAllServiceUpdates(threads)
        setChecksComplete({ serviceUpdates: true })
      })
    }

    return () => {
      window.removeEventListener('online', GoneOnline)
      window.removeEventListener('offline', GoneOffline)
    }
  }, [allServiceUpdates, setAllServiceUpdates])

  if (!isOnline) {
    return (
      <section className={styles.statusSection}>
        <MinorAlert type="error" title="You're offline">
          <p>To use this website, you need a connection to the internet.</p>
        </MinorAlert>
      </section>
    )
  }

  return (
    <section className={styles.statusSection}>
      {Object.values(checksComplete).every(check => check) ? (
        <MinorAlert type="success" title="Checks complete" />
      ) : (
        <MinorAlert
          type="plain"
          customIcon={<LoadingIcon style={{ margin: 6, width: 36, height: 36, borderWidth: 4, marginRight: 6 + 12 }} />}
          title="Checking for issues at giffgaff..."
        />
      )}

      {allServiceUpdates && <StatusTable serviceIssueDiscussions={allServiceUpdates} />}
    </section>
  )
}
