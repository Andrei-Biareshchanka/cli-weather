#!/usr/bin/env node - this file run by node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Token is empty');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
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

  getWeather('warsaw');
  // enter weather
}

initCLI();