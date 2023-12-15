export function displaySearchedContent({commit}, query){
  axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=03436138bcba4214a89cb998aebe798a`,
    {
      method: "GET",
    }
  )
  .then(({data}) => {
    
    commit('setDisplaySearchedContent', data)
  })
}