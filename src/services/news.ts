import { NEWS_API } from "./baseService";
import { ICreateNews } from "./models/news";

function createNews(data: ICreateNews) {
  try {
    return NEWS_API({
      method: 'POST',
      data,
      url: `/noticias`
    })
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

function getNews() {
  try {
    return NEWS_API({
      method: 'GET',
      url: `/noticias`
    })
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}


export default {
  createNews,
  getNews
}
