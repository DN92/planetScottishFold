import { useState, useCallback} from 'react'

const { uniqueNamesGenerator, adjectives, names } = require('unique-names-generator');

const useNameGenerator = () => {


  const [randomName, setRandomName] = useState(null)

  const getNewRandomName = useCallback(
    () => {
      setRandomName(
        uniqueNamesGenerator({
          dictionaries:[adjectives, names],
          length: 2,
          separator: ' ',
          style: 'capital'
        }
      ))
    },
    [adjectives, names, uniqueNamesGenerator],
  )

  return [randomName, getNewRandomName]
}

export default useNameGenerator
