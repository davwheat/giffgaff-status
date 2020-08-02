import React, { useEffect, useState } from 'react'

import getAllServiceUpdates from '../../utils/getServiceUpdates'

import MinorAlert from '../giffgaff/MinorAlert'
import LoadingIcon from '../giffgaff/LoadingIcon'
import StatusTable from './StatusTable'

import styles from './styles/StatusChecker.module.css'
import getDiscussionSeverity from '../../utils/getDiscussionSeverity'
import NotSolved from './NotSOlved'

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

  let issueList =
    allServiceUpdates &&
    allServiceUpdates.reduce((arr, issue) => {
      return [...arr, { id: issue.id, title: issue.attributes.title, severity: getDiscussionSeverity(issue) }]
    }, [])

  const highestSeverity = issueList && Math.max(...issueList.map(i => i.severity))

  let completeMsg = ''
  let completedAlertType = 'success'

  if (highestSeverity === -1) {
    completeMsg = "There's nothing of interest at the moment."
  } else if (highestSeverity === 0) {
    completeMsg = "There's a few thing you might want to be aware of, but nothing that affects most members."
  } else if (highestSeverity === 1) {
    completedAlertType = 'info'
    completeMsg = "There's an issue you should keep your eye on."
  } else if (highestSeverity === 2) {
    completedAlertType = 'warning'
    completeMsg = "There's something going on at giffgaff."
  } else if (highestSeverity === 3) {
    completedAlertType = 'error'
    completeMsg = "There's a major issue at giffgaff."
  } else {
    completeMsg = "I'm not sure what's going on..."
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
          title="Checking for issues at giffgaff..."
        />
      )}

      {allServiceUpdates && <NotSolved />}

      {allServiceUpdates && <StatusTable issueList={issueList} />}
    </section>
  )
}
