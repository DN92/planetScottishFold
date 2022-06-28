const axios = require('axios')

console.log('test start')

const waitForData = async () => {
  const { data } = await axios.get('https://geolocation-db.com/json/')

  console.log('data : ? : ' , data)
  return data
}

waitForData()

