import got from 'got';
import TSVFileWriter from '../common/file-writer/tsv-file-writer.js';
import FilmGenerator from '../common/film-generator/film-generator.js';
import {MockData} from '../types/mock-data.type.js';
import {CliCommandInterface} from './cli-command.interface.js';

export default class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';
  private initialData!: MockData;

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const filmsCount = Number(count);

    try {
      this.initialData = await got.get(url).json();
    } catch(err) {
      return console.log(`Can't fetch data from ${url}.`);
    }

    const filmLineGenerator = new FilmGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filepath);

    for (let i = 0; i < filmsCount; i++) {
      await tsvFileWriter.write(filmLineGenerator.generate());
    }

    console.log(`File ${filepath} was created!`);
  }
}
