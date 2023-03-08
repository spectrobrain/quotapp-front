export const getDataService  = async() => {
    try {
      //const res =await fetch('https://my-json-server.typicode.com/luisforerop/type-of-positions/db')
      const res =await fetch('./Data.json');
      const data = await res.json(res)
      console.log(data)
      return data;
    } catch (error) {
      
    }
  }
