import React, { useState, useEffect } from 'react'


const SingleKitten = ({kitten}) => {

  const {name, serialNumber, gender, ears, furColor, eyeColor, mainImageSrcValue} = kitten

  const imgInLine= {
    width: "100%",
    maxWidth: "300px",
    maxHeight: "200px"
  }

  return (
    <div>
      <img src={mainImageSrcValue} alt="/catPictures/grumpyCatCartoon" style={imgInLine} />
      <p>Name: {name}</p>
      <p>Serial: {serialNumber}</p>
      <p>{gender}</p>
      <p>{ears}</p>
      <p>Eyes: {eyeColor}</p>
      <p>Fur: {furColor}</p>
      <hr />
    </div>
  )
}

export default SingleKitten
