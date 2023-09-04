import { browser,getDriver } from "../lib";

before(async () => {
	await getDriver(browser)

})
after(async () => {
	await browser.quitAll()
})