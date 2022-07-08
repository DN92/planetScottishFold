import React from 'react'
import axios from 'axios'
import {putTokenOnHeader} from '../components/axiosHandlers/addToken'

const validRequestMethods = ['get', 'post', 'put', 'delete']

// setterFunc Array should include either just the state setter or the
//  state setter followed by the error setter.
//  method is the RESTFUL method
//  path is the url, body is request body

export const useFetch = async (setterFuncArray, method, path, body,) => {
  if(!validRequestMethods.includes(method)) {
    throw new Error('invalid request method. Request not sent')
  }
  try {
    const {data} = !['post', 'put'].includes(method)
      ? await axios[method](path, putTokenOnHeader())
      : await axios[method](path, body, putTokenOnHeader())
      if (setterFuncArray.length) {
        setterFuncArray[0](data)
      }
  } catch(err) {
    console.log(err)
    if(setterFuncArray.length > 1) {
      setterFuncArray[1](err.message)
    }
  }
}
