const path =require("path");

const getAPI = (req,res)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b9da8a8928ade30c5680978edd9a4330&query=${req.params.value}`)
    .then((result)=> result.json())
    .then((result)=> res.send(result))
    .catch((error) => {
      console.error(error);
      throw new Error("There was an error *index* fetching data from the API.");
    });
  };
module.exports = {getAPI}