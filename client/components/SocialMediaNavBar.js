import React from 'react'
import SocialMediaIconWrapper from './SocialMediaIconWrapper'
import socialMediaInfo from '../socialMediaInfo'

const SocialMediaNavBar = () => {

  return (
    <nav className='sm-navbar'>
      {socialMediaInfo.map(platform  => (
        <SocialMediaIconWrapper key={platform.site} iconSrc={platform.iconSrc} href={platform.href} site={platform.site} />
      ))}
    </nav>
  )
}

export default SocialMediaNavBar
