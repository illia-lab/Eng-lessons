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
  login?: ButtonAction | null;
  register?: ButtonAction | null;
};
type TheaderClickResult = void;
const onMainPageClickMainPageHeader = async function <Tentry extends TheaderClick>(
  data: Tentry,
): Promise<TheaderClickResult> {
  return await page.click({ header: data });
};

type TloginClick = {
  username?: InputAction | null;
  password?: InputAction | null;
  login?: ButtonAction | null
};
type TloginClickResult = void;
const onMainPageClickLoginForm = async function <Tentry extends TloginClick>(data: Tentry): Promise<TloginClickResult> {
  return await page.click({ login: data });
};

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
const onMainPageGetDataFromMainPageHeader = async function <Tentry extends TheaderGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
  const { header } = await page.get({ header: data });
  return header;
};

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
const onMainPageGetDataFromLoginForm = async function <Tentry extends TloginGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TloginGetResult>> {
  const { login } = await page.get({ login: data });
  return login;
};

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
const onMainPageGetVisibilityOfMainPageHeader = async function <Tentry extends TheaderIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
  const { header } = await page.isDisplayed({ header: data });
  return header;
};

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
const onMainPageGetVisibilityOfLoginForm = async function <Tentry extends TloginIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TloginIsDisplayedResult>> {
  const { login } = await page.isDisplayed({ login: data });
  return login;
};

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

type TloginSendKeys = {
  username?: InputSendKeys | string;
  password?: InputSendKeys | string;
};
type TloginSendKeysResult = void;
const onMainPageSetValuesToLoginForm = async function <Tentry extends TloginSendKeys>(
  data: Tentry,
): Promise<TloginSendKeysResult> {
  return await page.sendKeys({ login: data });
};

/** ====================== sendKeys ================== */

export {
  onMainPageClickMainPageHeader,
  onMainPageClickLoginForm,
  onMainPageGetDataFromMainPageHeader,
  onMainPageGetDataFromLoginForm,
  onMainPageGetVisibilityOfMainPageHeader,
  onMainPageGetVisibilityOfLoginForm,
  onMainPageSetValuesToLoginForm,
};
