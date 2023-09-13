export * from './pages/main/page';
export * from './pages/machines/fragments/page';

import { I } from './actor';
import { browser } from '../lib';

const provider = {
  interactions: {
    I,
    browser,
  },
};

export {provider}