import chalk from 'chalk';

const year = chalk.bold.whiteBright(new Date().getFullYear());
const greeting = chalk.bold.whiteBright('Merry Christmas & Happy Holidays!')
const treeArtArr = [
  " ╔═════════════════════════════════════╗ ",
  ` ║                                     ║ `,
  ` ║                               ${year}  ║ `,
  " ║                  /\\                 ║ ",
  " ║                 /░▓\\                ║ ",
  " ║                /@▓▓▓\\               ║ ",
  " ║               /░▓@@@▓\\              ║ ",
  " ║              /░░O▓▓▓@@\\             ║ ",
  " ║             /@░░░░▓O▓▓▓\\            ║ ",
  " ║            /░░@@@░░▓▓▓O▓\\           ║ ",
  " ║           /░░O░░░@@@▓▓▓▓▓\\          ║ ",
  " ║          /@░░░░░O░░░@@@▓▓▓\\         ║ ",
  " ║         /░░@@@░░░░░O░░▓@@@▓\\        ║ ",
  " ║        /░░O░░░@@@░░░░░O▓▓▓@@\\       ║ ",
  " ║       /@░░░░░O░░░░@@@░░░▓O▓▓▓\\      ║ ",
  " ║       ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯      ║ ",
  " ║                 ▒|▒▒                ║ ",
  " ║                 ▒|▒▒                ║ ",
  " ║                 ----                ║ ",
  " ║                                     ║ ",
  ` ║  ${greeting}  ║ `,
  " ║                                     ║ ",
  " ╚═════════════════════════════════════╝ ",
  "                                           ",
  " From: Alan                                ",
  "                                           ",
];

export function generateCard() {
  return treeArtArr.map(line => (
    line
      .replace(/╔/g, chalk.bold.blueBright('╔'))
      .replace(/╗/g, chalk.bold.blueBright('╗'))
      .replace(/║/g, chalk.bold.blueBright('║'))
      .replace(/╚/g, chalk.bold.blueBright('╚'))
      .replace(/╝/g, chalk.bold.blueBright('╝'))
      .replace(/═/g, chalk.bold.blueBright('═'))
      .replace(/░/g, chalk.green('░'))
      .replace(/\//g, chalk.green('\/'))
      .replace(/▓/g, chalk.greenBright('▓'))
      .replace(/\\/g, chalk.greenBright('\\'))
      .replace(/¯/g, chalk.greenBright('¯'))
      .replace(/O/g, chalk.bold.yellowBright('O'))
      .replace(/@/g, chalk.bold.redBright('@'))
      .replace('▒|▒▒', chalk.bold.hex('#CD853F')('║|▒║'))
      .replace(/-/g, chalk.bold.hex('#CD853F')('-'))
  ));
}
