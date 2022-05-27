#!/usr/bin/env node


// /*
// /OOOOOOOOO     BBBBBBBBBBBBBBBBB   IIIIIIIIII     OOOOOOOOO        SSSSSSSSSSSSSSS 
// /OO:::::::::OO   B::::::::::::::::B  I::::::::I   OO:::::::::OO    SS:::::::::::::::S
// /OO:::::::::::::OO B::::::BBBBBB:::::B I::::::::I OO:::::::::::::OO S:::::SSSSSS::::::S
// /O:::::::OOO:::::::OBB:::::B     B:::::BII::::::IIO:::::::OOO:::::::OS:::::S     SSSSSSS
// /O::::::O   O::::::O  B::::B     B:::::B  I::::I  O::::::O   O::::::OS:::::S            
// /O:::::O     O:::::O  B::::B     B:::::B  I::::I  O:::::O     O:::::OS:::::S            
// /O:::::O     O:::::O  B::::BBBBBB:::::B   I::::I  O:::::O     O:::::O S::::SSSS         
// /O:::::O     O:::::O  B:::::::::::::BB    I::::I  O:::::O     O:::::O  SS::::::SSSSS    
// /O:::::O     O:::::O  B::::BBBBBB:::::B   I::::I  O:::::O     O:::::O    SSS::::::::SS  
// /O:::::O     O:::::O  B::::B     B:::::B  I::::I  O:::::O     O:::::O       SSSSSS::::S 
// /O:::::O     O:::::O  B::::B     B:::::B  I::::I  O:::::O     O:::::O            S:::::S
// /O::::::O   O::::::O  B::::B     B:::::B  I::::I  O::::::O   O::::::O            S:::::S
// /O:::::::OOO:::::::OBB:::::BBBBBB::::::BII::::::IIO:::::::OOO:::::::OSSSSSSS     S:::::S
// /OO:::::::::::::OO B:::::::::::::::::B I::::::::I OO:::::::::::::OO S::::::SSSSSS:::::S
// /OO:::::::::OO   B::::::::::::::::B  I::::::::I   OO:::::::::OO   S:::::::::::::::SS 
// / OOOOOOOOO     BBBBBBBBBBBBBBBBB   IIIIIIIIII     OOOOOOOOO      SSSSSSSSSSSSSSS





import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const glitchTitle = chalkAnimation.glitch(
    'THE OBIOS TERMINAL? \n'
  );

  await sleep();
  glitchTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    Hi I am OBIOS. Questions will be asked today of VOXELS.
    If you get any question wrong I will ${chalk.bgRed('SHUTDOWN')}
    So make all of them count!!!!  
  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `BOBIOS Terminal qustions were asked successfully`
      )
    );
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Voxels aka (CryptoVoxels) was created on \n',
    choices: [
      'January 5th, 1999',
      'Dec 9th, 2020',
      'May 2nd, 2022',
      'April 1st, 2018',
    ],
  });

  return handleAnswer(answers.question_1 === 'April 1st, 2018');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'Who is Ben Nolan \n',
    choices: [
        'Founder of Bitcoin', 'Founder of Voxels', 'CEO of Lego', 'A superhero from Marvel'],
  });
  return handleAnswer(answers.question_2 === 'Founder of Voxels');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `What is a parcel\n`,
    choices: ['Something to eat', 'Digital beer on tap', 'Land which can be purchased on Voxels', 'Decentralized Drugs'],
  });

  return handleAnswer(answers.question_3 === 'Land which can be purchased on Voxels');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'What programming language does Voxels use for scripting?\n',
    choices: [
      'Java',
      'Python',
      'JavaScript',
      'Rust', 
    ],
  });
  return handleAnswer(answers.question_4 === 'JavaScript');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message:
      'What is a wearable?\n',
    choices: ['A sticker pack', 'Tshirts in a box', 'digital item for avatar customization', 'Type of pizza'],
  });

  return handleAnswer(answers.question_5 === 'digital item for avatar customization');
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();