import {CliCommandInterface} from './cli-command.interface.js';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public execute(): void {
    console.log(`
    Программа для подготовки данных для REST API сервера.

    Пример:
        main.js --<command> [--arguments]

    Команды:
        --version                          # выводит информацию о версии приложения
        --help                             # выводит список и описание всех поддерживаемых команд
        --generate <n> <filepath> <url>    # создаёт файл в формате tsv с тестовыми данными
        --import <filepath>                # импортирует в базу данных информацию из tsv-файла
    `);
  }
}
