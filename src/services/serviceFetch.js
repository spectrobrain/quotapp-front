export const getDataService  = async() => {
    try {
      const res =await fetch('https://my-json-server.typicode.com/luisforerop/type-of-positions/db')
      const data = await res.json(res)
      
      return data;
    } catch (error) {
      
    }
  }
