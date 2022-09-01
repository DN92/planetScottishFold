import React from 'react'
import { Link, useHref } from 'react-router-dom'

const SocialMediaIconWrapper = ({iconSrc, href, site}) => {

  const path = useHref(href)

  return (
    <div className='smIcon-wrapper'>
      <Link to={path}>
        <img className='smIcon-image' src={iconSrc} alt={'link to ' + site} />
      </Link>
    </div>
  )
}

export default SocialMediaIconWrapper
