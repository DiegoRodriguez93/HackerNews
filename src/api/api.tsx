import { News } from '../types/types';
import { fetcher } from '../utils/utils';

export const getListOfNews = (pagination: number): Promise<Array<News>> => {
  return new Promise((resolve, reject) => {
    fetcher('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((res) => {
        const batchNews: Array<Promise<News>> = res
          .splice(0, pagination)
          .map((newId: number) =>
            fetcher(`https://hacker-news.firebaseio.com/v0/item/${newId}.json`),
          );

        return Promise.all(batchNews);
      })

      .then((parsedList) => resolve(parsedList))
      .catch((err) => reject(err));
  });
};
