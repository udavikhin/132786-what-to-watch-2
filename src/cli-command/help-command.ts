import {CliCommandInterface} from './cli-command.interface.js';
import chalk from 'chalk';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public execute(): void {
    console.log(`
    ${chalk.green('Программа для подготовки данных для REST API сервера.')}

    ${chalk.green('Пример:')}
        ${chalk.italic.yellow('main.js --<command> [--arguments]')}

    ${chalk.green('Команды:')}
        ${chalk.italic.yellow('--version')}                          # выводит информацию о версии приложения
        ${chalk.italic.yellow('--help')}                             # выводит список и описание всех поддерживаемых команд
        ${chalk.italic.yellow('--generate <n> <filepath> <url>')}    # создаёт файл в формате ${chalk.bold.bgWhite(' tsv ')} с тестовыми данными
        ${chalk.italic.yellow('--import <filepath>')}                # импортирует в базу данных информацию из ${chalk.bold.bgWhite(' tsv ')}-файла
    `);
  }
}
