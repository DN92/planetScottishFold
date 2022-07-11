import axios from 'axios'

export const tokenizedRequest = async (type, path, body, setError) => {
  const token = window.localStorage.getItem("psfToken");
  const header = {
      authorization: token,
  }

  if(!token) {
    throw new Error('No Token To attach to request')
  }
  try {
    if (type === "get") {
      const { data } = await axios.get(path, header);
      return data;
    }
    if (type === "post") {
      const { data } = await axios.post(path, body, header);
      return data;
    }
    if (type === "delete") {
      const res = await axios.delete(path, header);
      return res;
    }
    if (type === "put") {
      const { data } = await axios.put(path, body, header);
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

export const putTokenOnHeader = () => {
  const token = window.localStorage.getItem("psfToken");
  if(token) {
    return {
      headers: {
        authorization: token,
      },
    }
  } else {
    return {}
  }
}

