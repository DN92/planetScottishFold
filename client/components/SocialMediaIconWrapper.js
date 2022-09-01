import React from 'react'
// import { Link, useHref } from 'react-router-dom'

const SocialMediaIconWrapper = ({iconSrc, href, site}) => {

  return (
    <div className='smIcon-wrapper'>
      <a href={href} target='_blank'>
        <img className='smIcon-image' src={iconSrc} alt={'link to ' + site} />
      </a>
    </div>
  )
}

export default SocialMediaIconWrapper
