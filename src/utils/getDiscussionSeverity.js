export default function getDiscussionSeverity(discussion) {
  const title = discussion.attributes.title
  const createdAt = new Date(discussion.attributes.createdAt)
  //   const hasBA = discussion.attributes.hasBestAnswer

  let severity = 0

  if (title.match(/(resolved)/gi)) {
    // thread likely resolved
    severity -= 12
  }

  if (title.match(/(planned)/gi)) {
    // planned maintenance
    severity -= 2
  }

  if (getAgeInDays(createdAt) >= 7) {
    // thread over 7 days old
    severity -= 2
  }

  if (getAgeInDays(createdAt) <= 2) {
    // thread less than 2 days old
    severity += 2
  }

  if (title.match(/(4G|3G|2G|data)/gi)) {
    // possible data outage
    severity += 3
  }

  if (title.match(/(calls|texts).*(calls|texts)/gi)) {
    // possible calls & texts outage
    severity += 2
  }

  if (title.match(/(nationwide)/gi)) {
    // possible nationwide outage
    severity += 3
  } else if (title.match(/(region|area)/gi)) {
    // limited to one area/region
    severity -= 2
  }

  if (severity < -4) {
    return -1
  } else if (severity < 0) {
    return 0
  } else if (severity < 2) {
    return 1
  } else if (severity < 4) {
    return 2
  } else {
    return 3
  }
}

function getAgeInDays(date) {
  return (new Date() - date) / (1000 * 60 * 60 * 24)
}
