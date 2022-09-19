import TSVFileReader from '../common/file-reader/tsv-file-reader.js';
import {CliCommandInterface} from './cli-command.interface.js';
import chalk from 'chalk';
import {createFilm, getErrorMessage} from '../utils/common.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';

  private onLineRead(line: string) {
    const film = createFilm(line);
    console.log(film);
  }

  private onFileRead(count: number) {
    console.log(`${chalk.green(count)} rows imported.`);
  }

  public async execute(filename: string): Promise<void> {
    const fileReader = new TSVFileReader(filename.trim());
    fileReader.on('lineread', this.onLineRead);
    fileReader.on('fileread', this.onFileRead);

    try {
      await fileReader.read();
    } catch (err) {
      console.log(`${chalk.red('Unable to import data from file:')} ${getErrorMessage(err)}`);
    }
  }
}
