export * from './pages/main/page';
export * from './pages/machines/page';

import { I } from './actor';
import { browser } from '../lib';

const provider = {
  interactions: {
    I,
    browser,
  },
};

export {provider}