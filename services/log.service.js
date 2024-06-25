import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
  console.log(chalk.bgRed(' ERROR: ') + ' ' + error);
}

export const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS: ') + ' ' + message);
}

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP: ')}
    Without args - enter weather
    -s [CITY] - for save city
    -h - for enter help
    -t - for save token
    `


  )
}