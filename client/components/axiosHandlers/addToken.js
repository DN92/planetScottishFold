import axios from 'axios'

const tokenizedRequest = async (type, path, body, setError) => {
  const token = window.localStorage.getItem("psfToken");
  const header = {
    headers: {
      authorization: token,
    },
  }

  if(!token) {
    throw new Error('No Token To attach to request')
  }
  try {
    if (request === "get") {
      const { data } = await axios.get(url, header);
      return data;
    }
    if (request === "post") {
      const { data } = await axios.post(url, body, header);
      return data;
    }
    if (request === "delete") {
      const res = await axios.delete(url, header);
      return res;
    }
    if (request === "put") {
      const { data } = await axios.put(url, body, header);
      return data;
    }
  } catch (err) {
    console.error(error);
    if(setError) {
      setError(error)
    }
    return null
  }
}
