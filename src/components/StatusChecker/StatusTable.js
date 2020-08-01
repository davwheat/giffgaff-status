import React from 'react'
import PropTypes from 'prop-types'

import getDiscussionSeverity from '../../utils/getDiscussionSeverity'
import severityToText from '../../utils/severityToText'

import styles from './styles/StatusTable.module.css'

export default function StatusTable({ serviceIssueDiscussions }) {
  let issueList = serviceIssueDiscussions.reduce((arr, issue) => {
    return [...arr, { id: issue.id, title: issue.attributes.title, severity: getDiscussionSeverity(issue) }]
  }, [])

  issueList.sort((a, b) => b.severity - a.severity)

  return (
    <section className={styles.container}>
      <ul>
        {issueList.map(issue => (
          <li data-severity={issue.severity} className={styles.listItem} key={issue.id}>
            <a
              className={styles.item}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://community.giffgaff.com/d/${issue.id}?utm_source=giffgaffstatus_com_mrjeeves`}
            >
              <h1 className="gg-t-speak-up">{issue.title}</h1>
              {/* <p>Thread ID: {issue.id}</p> */}
              <p>{severityToText(issue.severity)}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

StatusTable.propTypes = {
  serviceIssueDiscussions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['discussions']),
      attributes: PropTypes.shape({
        canDelete: PropTypes.bool.isRequired,
        canEditGroupRecipients: PropTypes.bool.isRequired,
        canEditRecipients: PropTypes.bool.isRequired,
        canEditUserRecipients: PropTypes.bool.isRequired,
        canHide: PropTypes.bool.isRequired,
        canLock: PropTypes.bool.isRequired,
        canMerge: PropTypes.bool.isRequired,
        canRename: PropTypes.bool.isRequired,
        canReply: PropTypes.bool.isRequired,
        canSeeReactions: PropTypes.bool.isRequired,
        canSelectBestAnswer: PropTypes.bool.isRequired,
        canSplit: PropTypes.bool.isRequired,
        canSticky: PropTypes.bool.isRequired,
        canTag: PropTypes.bool.isRequired,
        commentCount: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        firstPostId: PropTypes.number.isRequired,
        hasBestAnswer: PropTypes.bool.isRequired,
        isLocked: PropTypes.bool.isRequired,
        isSticky: PropTypes.bool.isRequired,
        lastPostNumber: PropTypes.number.isRequired,
        lastPostedAt: PropTypes.string.isRequired,
        participantCount: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        startUserId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
      }),
    })
  ),
}
