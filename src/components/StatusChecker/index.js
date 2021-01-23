import React, { useEffect, useState } from 'react'

import getAllServiceUpdates from '../../utils/getServiceUpdates'

import MinorAlert from '../giffgaff/MinorAlert'
import LoadingIcon from '../giffgaff/LoadingIcon'
import StatusTable from './StatusTable'

import styles from './styles/StatusChecker.module.css'
import getDiscussionSeverity from '../../utils/getDiscussionSeverity'
import NotSolved from './NotSolved'

export default function StatusChecker() {
  const [allServiceUpdates, setAllServiceUpdates] = useState(null)
  const [checksComplete, setChecksComplete] = useState({ serviceUpdates: false })

  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    if (isOnline && !navigator.onLine) {
      setIsOnline(false)
    }

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
  }, [isOnline, allServiceUpdates, setAllServiceUpdates])

  if (!isOnline) {
    return (
      <section className={styles.statusSection}>
        <MinorAlert type="error" title="You're offline">
          <p>To use this website, you need a connection to the internet.</p>
        </MinorAlert>
      </section>
    )
  }

  let issueList =
    allServiceUpdates &&
    allServiceUpdates.reduce((arr, issue) => {
      return [...arr, { id: issue.id, title: issue.attributes.title, severity: getDiscussionSeverity(issue) }]
    }, [])

  const highestSeverity = issueList && Math.max(...issueList.map(i => i.severity))

  let completeMsg = ''
  let completedAlertType = 'success'

  if (highestSeverity === -1) {
    completeMsg = "Everything's running smoothly."
  } else if (highestSeverity === 0) {
    completeMsg = "There's one or more small, localised issues. Most people aren't affected."
  } else if (highestSeverity === 1) {
    completedAlertType = 'info'
    completeMsg = "There's one or more minor issues or outages."
  } else if (highestSeverity === 2) {
    completedAlertType = 'warning'
    completeMsg = "There's one or more widespread issues at giffgaff."
  } else if (highestSeverity === 3) {
    completedAlertType = 'error'
    completeMsg = "There's one or more critical issues at giffgaff."
  } else {
    completedAlertType = 'unknown'
    completeMsg = "Couldn't check status. Please contact @davwheat_ on Twitter."
  }

  return (
    <section className={styles.statusSection}>
      {Object.values(checksComplete).every(check => check) ? (
        <MinorAlert type={completedAlertType} title="Checks complete">
          {completeMsg}
        </MinorAlert>
      ) : (
        <MinorAlert
          type="plain"
          customIcon={<LoadingIcon style={{ margin: 6, width: 36, height: 36, borderWidth: 4, marginRight: 6 + 12 }} />}
          title="Checking for issues at giffgaff."
        >
          Sit tight. This can take up to a minute.
        </MinorAlert>
      )}

      {allServiceUpdates && <NotSolved />}

      {allServiceUpdates && <StatusTable issueList={issueList} />}
    </section>
  )
}
