#!/usr/bin/env node - this file run by node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token);
    printSuccess('Token saved')
  } catch (error) {
    printError(error);
  }
}

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) { // enter help
    printHelp();
  }
  if (args.s) { // save city
  }
  if (args.t) { // save token
    return saveToken(args.t)
  }

  // enter weather
}

initCLI();