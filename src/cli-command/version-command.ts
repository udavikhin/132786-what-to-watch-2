import {readFileSync} from 'fs';
import {CliCommandInterface} from './cli-command.interface.js';
import chalk from 'chalk';

export default class VersionCommand implements CliCommandInterface {
  public readonly name = '--version';

  private readVersion(): string {
    const contentJSON = readFileSync('./package.json', 'utf-8');
    const content = JSON.parse(contentJSON);
    return content.version;
  }

  public execute(): void {
    const version = this.readVersion();
    console.log(chalk.magenta(version));
  }
}
