var axios = require('axios')
var cxdAxios = axios.create({
    baseURL: 'https://www.yuque.com/api/v2/',
    timeout: 30000,
    headers: {
        'X-Auth-Token' : 'uQ2Fi6q5PAfpivhDqRU63GbqvX0FBgAGAc5BYedj',
    }
});
var get = async function() {
    const res = await cxdAxios.get('/repos/261691')
    return res
}
 
  
 var func2 = function() {
    console.log("func2");
 };
  
module.exports = {
    getArticle : get()
}