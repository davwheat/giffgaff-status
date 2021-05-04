export default async function getAllServiceUpdates() {
  const exemptIds = [
    '17357121', // Found an unreported service issue?
  ]

  let threads = null

  try {
    threads = await (
      await fetch(
        'https://cors-anywhere.davwheat.workers.dev/?https://community.giffgaff.com/api/discussions?include=firstPost&filter%5Bq%5D=%20tag%3Aservice-updates&sort=-createdAt',
      )
    ).json()
  } catch (e) {
    console.log(e)
    return null
  }

  const discussions = threads.data

  const validDiscussions = discussions.filter(discussion => !discussion.attributes.isLocked && !exemptIds.includes(discussion.id))

  return validDiscussions
}
