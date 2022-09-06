import React from 'react'

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
