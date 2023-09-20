import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import {
  IWaitOpts,
  ButtonAction,
  ButtonGetRes,
  ButtonIsDispRes,
  InputAction,
  InputGetRes,
  InputIsDispRes,
  InputSendKeys,
} from '../../../lib';

import { MainPage } from './page';

const page = new MainPage();

/** ====================== click ================== */

type TheaderClick = {
  login?: ButtonAction;
  register?: ButtonAction;
};
type TheaderClickResult = void;
async function onMainPageClickMainPageHeader<Tentry extends TheaderClick>(data: Tentry): Promise<TheaderClickResult> {
  return await page.click({ header: data });
}

type TloginClick = {
  username?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TloginClickResult = void;
async function onMainPageClickLoginForm<Tentry extends TloginClick>(data: Tentry): Promise<TloginClickResult> {
  return await page.click({ login: data });
}

type TregisterClick = {
  username?: InputAction;
  name?: InputAction;
  email?: InputAction;
  password?: InputAction;
  registerButton?: ButtonAction;
};
type TregisterClickResult = void;
async function onMainPageClickRegisterForm<Tentry extends TregisterClick>(data: Tentry): Promise<TregisterClickResult> {
  return await page.click({ register: data });
}

/** ====================== click ================== */

/** ====================== get ================== */

type TheaderGet = {
  login?: ButtonAction;
  register?: ButtonAction;
};
type TheaderGetResult = {
  login?: ButtonGetRes;
  register?: ButtonGetRes;
};
async function onMainPageGetDataFromMainPageHeader<Tentry extends TheaderGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
  const { header } = await page.get({ header: data });
  return header;
}

type TloginGet = {
  username?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TloginGetResult = {
  username?: InputGetRes;
  password?: InputGetRes;
  login?: ButtonGetRes;
};
async function onMainPageGetDataFromLoginForm<Tentry extends TloginGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TloginGetResult>> {
  const { login } = await page.get({ login: data });
  return login;
}

type TregisterGet = {
  username?: InputAction;
  name?: InputAction;
  email?: InputAction;
  password?: InputAction;
  registerButton?: ButtonAction;
};
type TregisterGetResult = {
  username?: InputGetRes;
  name?: InputGetRes;
  email?: InputGetRes;
  password?: InputGetRes;
  registerButton?: ButtonGetRes;
};
async function onMainPageGetDataFromRegisterForm<Tentry extends TregisterGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TregisterGetResult>> {
  const { register } = await page.get({ register: data });
  return register;
}

/** ====================== get ================== */

/** ====================== isDisplayed ================== */

type TheaderIsDisplayed = {
  login?: ButtonAction;
  register?: ButtonAction;
};
type TheaderIsDisplayedResult = {
  login?: ButtonIsDispRes;
  register?: ButtonIsDispRes;
};
async function onMainPageGetVisibilityOfMainPageHeader<Tentry extends TheaderIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
  const { header } = await page.isDisplayed({ header: data });
  return header;
}

type TloginIsDisplayed = {
  username?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TloginIsDisplayedResult = {
  username?: InputIsDispRes;
  password?: InputIsDispRes;
  login?: ButtonIsDispRes;
};
async function onMainPageGetVisibilityOfLoginForm<Tentry extends TloginIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TloginIsDisplayedResult>> {
  const { login } = await page.isDisplayed({ login: data });
  return login;
}

type TregisterIsDisplayed = {
  username?: InputAction;
  name?: InputAction;
  email?: InputAction;
  password?: InputAction;
  registerButton?: ButtonAction;
};
type TregisterIsDisplayedResult = {
  username?: InputIsDispRes;
  name?: InputIsDispRes;
  email?: InputIsDispRes;
  password?: InputIsDispRes;
  registerButton?: ButtonIsDispRes;
};
async function onMainPageGetVisibilityOfRegisterForm<Tentry extends TregisterIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TregisterIsDisplayedResult>> {
  const { register } = await page.isDisplayed({ register: data });
  return register;
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

type TloginSendKeys = {
  username?: InputSendKeys;
  password?: InputSendKeys;
};
type TloginSendKeysResult = void;
async function onMainPageSetValuesToLoginForm<Tentry extends TloginSendKeys>(
  data: Tentry,
): Promise<TloginSendKeysResult> {
  return await page.sendKeys({ login: data });
}

type TregisterSendKeys = {
  username?: InputSendKeys;
  name?: InputSendKeys;
  email?: InputSendKeys;
  password?: InputSendKeys;
};
type TregisterSendKeysResult = void;
async function onMainPageSetValuesToRegisterForm<Tentry extends TregisterSendKeys>(
  data: Tentry,
): Promise<TregisterSendKeysResult> {
  return await page.sendKeys({ register: data });
}

/** ====================== sendKeys ================== */

export {
  onMainPageClickMainPageHeader,
  onMainPageClickLoginForm,
  onMainPageClickRegisterForm,
  onMainPageGetDataFromMainPageHeader,
  onMainPageGetDataFromLoginForm,
  onMainPageGetDataFromRegisterForm,
  onMainPageGetVisibilityOfMainPageHeader,
  onMainPageGetVisibilityOfLoginForm,
  onMainPageGetVisibilityOfRegisterForm,
  onMainPageSetValuesToLoginForm,
  onMainPageSetValuesToRegisterForm,
};
