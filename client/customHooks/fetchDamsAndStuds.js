import React, {useEffect} from 'react'


//  this hook requires the parent component to have 2 state hooks
//  1 - const [dams, setDams] = useState([])
//  2 - const [studs, setStuds] = useState([])

// REact did not let me use this without setting setDam and setStud.
// Look in to this later for refactoring
const useFetchParents = () => {
  useEffect(() => {
    const fetchDamsAndStuds = async () => {
      try {
        const mothers = await axios.get('/api/mothers')
        const fathers = await axios.get('/api/studs')
        dams = (mothers.data).map(mother => (mother.name))
        studs = (fathers.data).map(father => (father.name))
        return [dams, studs]

      } catch (err) {
        console.log(err)
        setError(err)
      }
    }

    const {dams, studs} = fetchDamsAndStuds
    setDams(dams)
    setStuds(studs)
  }, [])
}

export default useFetchParents

