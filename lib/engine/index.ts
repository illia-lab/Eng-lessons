import { seleniumWD, playwrightWD } from 'promod';

const { ENGINE = 'pw' } = process.env;

const engine = ENGINE === 'pw' ? playwrightWD : seleniumWD;

const { $, $$, browser, getDriver } = engine;

export { $, $$, browser, getDriver };
