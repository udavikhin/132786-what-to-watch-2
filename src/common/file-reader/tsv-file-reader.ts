import {readFileSync} from 'fs';
import {Film} from '../../types/film.type.js';
import {Genres} from '../../types/genre.enum.js';
import {FileReaderInterface} from './file-reader.interface.js';
import {mockUsers} from '../../../mocks/mock-users.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, 'utf-8');
  }

  public toArray(): Film[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((row) => row.split('\t'))
      .map(([title, description, addedDate, genre, releaseYear, rating, previewVideoSrc, videoSrc, starring, director, runtime, commentsAmount, user, posterSrc, backgroundSrc, bgColor]) => ({
        title,
        description,
        addedDate: new Date(Number(addedDate)),
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
      }));
  }
}
