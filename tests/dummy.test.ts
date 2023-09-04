import { browser, $, $$ } from '../lib';
import { waitForCondition } from 'sat-utils';

describe('dummy web ui test suit', () => {
	it('dummy web ui test', async () => {
		const username = $('[placeholder="User name"]');
		const password = $('[placeholder="Password"]');
		const login = $('.modal button')
		const url = 'http://localhost:4000';
		await browser.get(url);
		await waitForCondition(async () => {
			return (await username.isDisplayed()) && (await password.isDisplayed())
		})
		await username.sendKeys('admin')
		await password.sendKeys('admin')
		await login.click()

    await browser.sleep(25_000);
  });
});
