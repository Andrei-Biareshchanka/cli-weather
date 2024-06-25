#!/usr/bin/env node - this file run by node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) { // enter help
    printHelp();
  }
  if (args.s) { // save city
    printSuccess();
  }
  if (args.t) { // save token
    saveKeyValue('token', args.t)
  }

  // enter weather
}

initCLI();