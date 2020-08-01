import React from 'react'
import PropTypes from 'prop-types'

import getDiscussionSeverity from '../../utils/getDiscussionSeverity'

export default function StatusTable({ serviceIssueDiscussions }) {
  return (
    <section>
      <ul>
        {serviceIssueDiscussions.map(issue => (
          <li key={issue.id}>
            <p>{issue.attributes.title}</p>
            <p>Thread ID: {issue.id}</p>
            <p>Severity: {getDiscussionSeverity(issue)}</p>
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
