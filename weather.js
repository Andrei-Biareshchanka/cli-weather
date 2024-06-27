#!/usr/bin/env node - this file run by node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printWeather, printError } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getIcon } from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Token is empty');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token saved');
  } catch (error) {
    printError(error);
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('Citi is empty');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('City saved');
  } catch (error) {
    printError(error);
  }
}

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    if (error?.response?.status == 404) {
      printError('City is incorrect');
    } else if (error?.response?.status == 401) {
      printError('Token is incorrect');
    } else {
      printError(error.message);
    }
  }

}

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t)
  }

  return getForcast();
}

initCLI();