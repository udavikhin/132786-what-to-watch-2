import EventEmitter from 'events';
import {createReadStream} from 'fs';
import {FileReaderInterface} from './file-reader.interface.js';

export default class TSVFileReader extends EventEmitter implements FileReaderInterface {

  constructor(public filename: string) {
    super();
  }

  public async read(): Promise<void> {
    const stream = createReadStream(this.filename, {
      encoding: 'utf-8'
    });

    let lineRead = '';
    let endLinePos = -1;
    let importedRowsCount = 0;

    for await (const chunk of stream) {
      lineRead += chunk.toString();

      while ((endLinePos = lineRead.indexOf('\n')) >= 0) {
        const completeRow = lineRead.slice(0, endLinePos + 1);
        lineRead = lineRead.slice(++endLinePos);
        importedRowsCount++;

        this.emit('lineread', completeRow);
      }
    }

    this.emit('fileread', importedRowsCount);
  }
}
