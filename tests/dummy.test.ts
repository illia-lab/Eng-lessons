import { expect } from 'chai';
import { browser, $$ } from '../lib';
import { MainPage } from '../framework';
import { Input, Button, Text, Collection } from '../lib';
import { MachinesPage } from '../framework';

describe('Filters suite', () => {
  it.only('[P] check that filter price work', async () => {
    const prices = 1430200.44;
    const url = 'http://localhost:4000';
    const userData = { username: 'admin', password: 'admin' };

    const machinesPrices = $$('.active.price');

    const mainPage = new MainPage();
    const machinesPage = new MachinesPage();

    await browser.get(url);

    await mainPage.sendKeys({ login: { username: userData.username, password: userData.password } });
    await mainPage.click({ login: { login: null } });

    machinesPage.sendKeys({ filter: { price: prices } });
    machinesPage.click({ filter: { filter: null } });

    const result = await machinesPage.get({machinesList: {price: null}});

    console.log(result, 'RESULT');

    result.machinesList.forEach(function(machineRow) {
      expect(+machineRow.price <= prices).to.equal(true)
    });
  });
});
