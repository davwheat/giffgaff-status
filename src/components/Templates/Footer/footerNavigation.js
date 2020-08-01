import React from 'react'
import NavigationData from '../../../data/navigation.json'

export default function FooterNavigation() {
  return (
    <nav>
      {NavigationData.footer.map(navItem => {
        return <NavLink href={navItem.link}>{navItem.text}</NavLink>
      })}
    </nav>
  )
}
