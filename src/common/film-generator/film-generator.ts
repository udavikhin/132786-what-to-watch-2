import dayjs from 'dayjs';
import {Genres} from '../../types/genre.enum.js';
import {MockData} from '../../types/mock-data.type.js';
import {getRandomArrayItem, getRandomArraySlice, getRandomObjValue, getRandomValue} from '../../utils/random.js';
import {FilmGeneratorInterface} from './film-generator.interface.js';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;
const RELEASE_YEAR_MIN = 1960;
const RELEASE_YEAR_MAX = 2022;
const RATING_MIN = 1;
const RATING_MAX = 10;
const RATING_NUMS_AFTER_DECIMAL = 1;
const RUNTIME_MIN = 60;
const RUNTIME_MAX = 180;
const COMMENTS_MIN = 100;
const COMMENTS_MAX = 1000;


export default class FilmGenerator implements FilmGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomArrayItem<string>(this.mockData.titles);
    const description = getRandomArrayItem<string>(this.mockData.descriptions);
    const addedDate = dayjs().subtract(getRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const genre = getRandomObjValue<string>(Genres);
    const releaseYear = getRandomValue(RELEASE_YEAR_MIN, RELEASE_YEAR_MAX).toString();
    const rating = getRandomValue(RATING_MIN, RATING_MAX, RATING_NUMS_AFTER_DECIMAL).toString();
    const previewVideoSrc = getRandomArrayItem<string>(this.mockData.previewVideoSrcs);
    const videoSrc = getRandomArrayItem<string>(this.mockData.videoSrcs);
    const starring = getRandomArraySlice<string>(this.mockData.actors).join(';');
    const director = getRandomArrayItem<string>(this.mockData.directors);
    const runtime = getRandomValue(RUNTIME_MIN, RUNTIME_MAX).toString();
    const commentsAmount = getRandomValue(COMMENTS_MIN, COMMENTS_MAX).toString();
    const user = getRandomArrayItem<string>(this.mockData.users);
    const posterSrc = getRandomArrayItem<string>(this.mockData.posterSrcs);
    const backgroundSrc = getRandomArrayItem<string>(this.mockData.backgroundSrcs);
    const bgColor = getRandomArrayItem<string>(this.mockData.bgColors);

    return [
      title, description, addedDate, genre, releaseYear, rating, previewVideoSrc, videoSrc, starring, director, runtime, commentsAmount, user, posterSrc, backgroundSrc, bgColor
    ].join('\t');
  }
}
