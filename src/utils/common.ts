import {mockUsers} from '../../mocks/mock-users.js';
import {Film} from '../types/film.type.js';
import {Genres} from '../types/genre.enum.js';

export const createFilm = (row: string) => {
  const properties = row.replace('\n', '').split('\t');
  const [title, description, addedDate, genre, releaseYear, rating, previewVideoSrc, videoSrc, starring, director, runtime, commentsAmount, user, posterSrc, backgroundSrc, bgColor] = properties;

  return {
    title,
    description,
    addedDate: new Date(addedDate),
    genre: genre as Genres,
    releaseYear: Number(releaseYear),
    rating: Number(rating),
    previewVideoSrc,
    videoSrc,
    starring,
    director,
    runtime: Number(runtime),
    commentsAmount: Number(commentsAmount),
    user: mockUsers.find((entry) => entry.username === user) ?? null,
    posterSrc,
    backgroundSrc,
    bgColor
  } as Film;
};

export const getErrorMessage = (error: unknown): string => error instanceof Error ? error.message : '';

