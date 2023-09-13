import { expect } from 'chai';
import { provider } from '../framework';

const { browser, I } = provider.interactions;

describe('Filters suite', () => {
  it.only('[P] check that filter price work', async () => {
    const price = 808482;
    const url = 'http://localhost:4000';
    const userData = { username: 'admin', password: 'admin' };

    await browser.get(url);
    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });
    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageSetValuesToFilterSection({ price: price });
    await I.onMachinesPageClickFilterSection({ filterButton: null });
console.log('!!!!!!!!!!!!!!');

    const results = await I.onMachinesPageGetSeveralRandomFieldValuesFromMachinesList('price', 10);

    console.log(results);

    await I.onMachinesPageClickMachineRowList({
      _where: { manufacturer: 'Demi-mix' },
      _action: { manufacturer: null },
    });

    results.forEach(function (MachinePrice) {
      expect(+MachinePrice <= price).to.equal(true);
    });

    await browser.sleep(10000);
  });
});
