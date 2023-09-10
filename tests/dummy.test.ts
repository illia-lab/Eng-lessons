import { expect } from 'chai';
import { browser, $$ } from '../lib';
import { MainPage } from '../framework';
import { Input, Button, Text, Collection } from '../lib';
import { FilterFragment } from '../framework';

describe('Filters suite', () => {
  it.only('[P] check that filter price work', async () => {
    //TODO refactor fragments usage
    const prices = 808482;
    const url = 'http://localhost:4000';
    const userData = { username: 'admin', password: 'admin' };
    const pricesList = new Collection('.active.price', 'Machine price', Text);

    const machinesPrices = $$('.active.price');

    const mainPage = new MainPage()
    const filters = new FilterFragment();

    await browser.get(url);
    await mainPage.sendKeys({login: {username: userData.username, password: userData.password}});
    await mainPage.click({login: {login: null}})

    await filters.sendKeys({ price: prices });
    await filters.click({ filterButton: null });

    const result = await pricesList.get();
    console.log(result);
    result.forEach(function (priceTextValue) {
      expect(+priceTextValue <= prices).to.equal(true);
    });

    await browser.sleep(5000);
  });
});
