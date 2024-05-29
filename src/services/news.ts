import { NEWS_API } from "./baseService";
import { ICreateNews, INews } from "./models/news";

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

function updateNews(data: INews) {
  try {
    return NEWS_API({
      method: 'PUT',
      data,
      url: `/noticias/${data.id}`
    })
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}


export default {
  createNews,
  getNews,
  updateNews
}
