import React from 'react'
import axios from 'axios'
import {putTokenOnHeader} from './addToken'

const validRequestMethods = ['get', 'post', 'put', 'delete']

// setterFunc Array should include either just the state setter or the
//  state setter followed by the error setter.
//  method is the RESTFUL method
//  path is the url, body is request body

export const fetchEffect = async (setterFuncArray, method, path, body,) => {
  //  check for valid method type
  if(!validRequestMethods.includes(method)) {
    throw new Error('invalid request method. Request not sent')
  }
  //  if a token exits, put it on the headers.authorization
  try {
    const {data} = !['post', 'put'].includes(method)
    //  gets and deletes
      ? await axios[method](path, putTokenOnHeader())
    //  posts and puts
      : await axios[method](path, body, putTokenOnHeader())
    // set state upon promise resolving
      if (setterFuncArray.length && method != 'delete') {
        setterFuncArray[0](data)
    //  clear error if errorSetter was provided
      }
      if(setterFuncArray.length > 1) {
        setterFuncArray[1]('')
      }
  } catch(err) {
    console.log(err)
    if(setterFuncArray.length > 1) {
      setterFuncArray[1](err.message)
    }
  }
}
