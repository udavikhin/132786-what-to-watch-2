import {Genres} from './genre.enum.js';
import {User} from './user.type.js';

export type Film = {
  title: string,
  description: string,
  addedDate: Date,
  genre: Genres,
  releaseYear: number,
  rating: number,
  previewVideoSrc: string,
  videoSrc: string,
  starring: string,
  director: string,
  runtime: number,
  commentsAmount: number,
  user: User | null,
  posterSrc: string,
  backgroundSrc: string,
  bgColor: string
}
