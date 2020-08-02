/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onServiceWorkerUpdateReady = () => {
  // Set window.___swUpdated to prevent update on page navigation.
  // Overrides https://github.com/gatsbyjs/gatsby/blob/8938c953003e2fb488c2ae72f2eb966d0db16833/packages/gatsby/cache-dir/navigation.js#L68
  window.___swUpdated = false
}
