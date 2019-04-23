var axios = require('axios')
var cxdAxios = axios.create({
    baseURL: 'https://www.yuque.com/api/v2/',
    timeout: 30000,
    headers: {
        'X-Auth-Token' : 'uQ2Fi6q5PAfpivhDqRU63GbqvX0FBgAGAc5BYedj',
    }
});
var getConsole3 = async function() {
    const res = await cxdAxios.get('/repos/261691')
    return res
}
var getDocs = async function(url) {
    const res = await cxdAxios.get(url)
    return res
}

module.exports = {
    getArticle : getDocs('/repos/277236/docs'),
    getProjects : getDocs('/repos/277389/docs'),
}