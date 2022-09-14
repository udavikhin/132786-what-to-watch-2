import VersionCommand from './cli-command/version-command.js';
import HelpCommand from './cli-command/help-command.js';
import CLIApplication from './app/cli-application.js';

const manager = new CLIApplication();
manager.registerCommands([
  new HelpCommand,
  new VersionCommand
]);
manager.processCommand(process.argv);
