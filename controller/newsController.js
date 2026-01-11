const axios = require("axios");
const newsApiKey = process.env.NEWS_API_KEY
const apiUrl = process.env.API_URL

async function newsHandler(req, res) {

  const response = await axios.get(apiUrl + newsApiKey);

  const news = response.data.articles;
  return res.status(200).json({
    news: news
  })

}

module.exports = {
  newsHandler
}







