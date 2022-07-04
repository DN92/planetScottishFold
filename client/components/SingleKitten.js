import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import KittenDetailedView from './KittenDetailedView'

const SingleKitten = ({kitten}) => {

  const {name, gender, ears, mainImageSrcValue} = kitten

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  return (
    <div>
      <Link to='/kittenDetailed' state={{kitten: kitten}}>
        <img src={mainImageSrcValue} alt="/catPictures/grumpyCatCartoon" style={imgInLine} />
      </Link>
      <p>Name: {name}</p>
      <p>{gender}</p>
      <p>{ears}</p>
      <hr />
    </div>
  )
}

export default SingleKitten
