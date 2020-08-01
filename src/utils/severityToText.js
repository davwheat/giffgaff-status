export default function severityToText(severity) {
  switch (severity) {
    case -1:
      return 'Not a problem'
    case 0:
      return 'For your information'
    case 1:
      return 'Keep an eye on this'
    case 2:
      return "This isn't very good"
    case 3:
      return 'Alarm bells should be ringing'
    default:
      return `I'm not sure how to categorise this (${severity})`
  }
}
