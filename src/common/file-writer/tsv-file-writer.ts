import {createWriteStream, WriteStream} from 'fs';
import {FileWriterInterface} from './file-writer.interface';

export default class TSVFileWriter implements FileWriterInterface {
  private stream: WriteStream;

  constructor(public readonly filename: string) {
    this.stream = createWriteStream(this.filename, {
      autoClose: true,
      flags: 'w',
      highWaterMark: 2 ** 16,
      encoding: 'utf-8'
    });
  }

  public async write(row: string): Promise<void> {
    if (!this.stream.write(`${row}\n`)) {
      return new Promise((resolve) => {
        this.stream.once('drain', () => resolve());
      });
    }

    return Promise.resolve();
  }
}
