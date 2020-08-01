export default async function getAllServiceUpdates() {
  const exemptIds = [
    '17357121', // Found an unreported service issue?discussion.id
  ]

  let threads = null

  try {
    threads = await (
      await fetch(
        'https://cors-anywhere.herokuapp.com/https://community.giffgaff.com/api/discussions?include=user%2ClastPostedUser%2Ctags%2CfirstPost%2CrecipientUsers%2CrecipientGroups%2Cpoll&filter%5Bq%5D=%20tag%3Aservice-updates&sort=-createdAt&'
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
