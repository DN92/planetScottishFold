const express = require('express')
const { User } = require('../db').models
const { getAuthGrade } = require('../../myModelsConfig')

const setAuthorizations = async (req, res, next) => {

  //  confirm req is clean and untampered.
  try {
    if(req.body.authLevel ) {
      throw Error('request has been tampered with')
    }
    //  make extra sure
    delete req.body.authLevel

    const verifiedUser = await User.findByToken(req.headers.authorization)
    if(!verifiedUser.fail) {
      req.body.authLevel = getAuthGrade(verifiedUser.type)
    } else {
      req.body.authLevel = 0
    }
  } catch (err) {
    res.status(401)
    next(err)
  }

  next()
}

module.exports = setAuthorizations
