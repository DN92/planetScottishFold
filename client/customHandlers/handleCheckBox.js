const checkBoxHandler  = (event, setterFunc) => {
  console.log(event)

  // check status of checkbox and update nested obj State.
  // name is the nested Obj, msg, is the message id

    setterFunc(prev => (
      {...prev, [event.target.name]: {
        ...prev[event.target.name],
        [event.target.msg]: event.target.checked
      }}
    ))


  // event.target.checked ?
  //   setterFunc(prev => ({...prev, [event.target.name]: true })) :
  //   setterFunc(prev => ({...prev, [event.target.name]: false }))
}

export default checkBoxHandler
