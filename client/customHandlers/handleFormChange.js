const handleControlledValueFieldToState = (event, setter) => {
  setter(prevClientInfo => {
    return {...prevClientInfo, [event.target.name] : event.target.value}
  })
}

export default handleControlledValueFieldToState
