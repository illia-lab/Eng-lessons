import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import {
  IWaitOpts,
  CollectionActionType,
  CollectionWaitingType,
  ButtonAction,
  ButtonGetRes,
  ButtonIsDispRes,
  TextAction,
  TextGetRes,
  TextIsDispRes,
} from '../../../lib';

import { AdminPanelPage } from './page';

const page = new AdminPanelPage();

type TonAdminPanelPageGetRandomDataAndFieldValuesFromUserListEntryFields = 'user' | 'details';
type TonAdminPanelPageGetRandomDataAndFieldValuesFromUserListEntry = Omit<
  CollectionActionType<
    {
      user?: TextGetRes;
      details?: ButtonGetRes;
    },
    {
      user?: TextIsDispRes;
      details?: ButtonIsDispRes;
    }
  >,
  '_action'
>;

async function onAdminPanelPageGetRandomFieldValueFromUserList(
  _field: TonAdminPanelPageGetRandomDataAndFieldValuesFromUserListEntryFields,
  descriptions: TonAdminPanelPageGetRandomDataAndFieldValuesFromUserListEntry = {},
): Promise<string> {
  const result = await page.get({ userList: { ...descriptions, _action: { [_field]: null } } });

  const flatResult = result.userList;

  return getRandomArrayItem(flatResult.map((item) => item[_field]));
}

async function onAdminPanelPageGetSeveralRandomFieldValuesFromUserList(
  _field: TonAdminPanelPageGetRandomDataAndFieldValuesFromUserListEntryFields = 'user',
  quantity: number = 2,
  descriptions: TonAdminPanelPageGetRandomDataAndFieldValuesFromUserListEntry = {},
): Promise<string[]> {
  const result = await page.get({ userList: { ...descriptions, _action: { [_field]: null } } });

  const flatResult = result.userList;

  return getRandomArrayItem(
    flatResult.map((item) => item[_field]),
    quantity,
  );
}

async function onAdminPanelPageGetRandomDataFromUserList<
  T extends ReadonlyArray<TonAdminPanelPageGetRandomDataAndFieldValuesFromUserListEntryFields>,
>(
  _fields: T,
  descriptions: TonAdminPanelPageGetRandomDataAndFieldValuesFromUserListEntry = {},
): Promise<TobjectFromStringArray<T>> {
  const result = await page.get({
    userList: {
      ...descriptions,
      _action: _fields.reduce((act, k) => {
        act[k] = null;

        return act;
      }, {}),
    },
  });

  const flatResult = result.userList;
  return getRandomArrayItem(
    flatResult.map((item) =>
      _fields.reduce((requredData, k) => {
        requredData[k] = item[k];

        return requredData;
      }, {} as TobjectFromStringArray<T>),
    ),
  );
}

/** ====================== click ================== */

type TadminPanelClick = {
  addNewUser?: ButtonAction;
  usersList?: ButtonAction;
};
type TadminPanelClickResult = void;
async function onAdminPanelPageClickAdminPanelSection<Tentry extends TadminPanelClick>(
  data: Tentry,
): Promise<TadminPanelClickResult> {
  return await page.click({ adminPanel: data });
}

type TuserListClick = CollectionActionType<
  {
    user?: TextGetRes;
    details?: ButtonGetRes;
  },
  {
    user?: TextIsDispRes;
    details?: ButtonIsDispRes;
  },
  {
    user?: TextAction;
    details?: ButtonAction;
  }
>;
type TuserListClickResult = void;
async function onAdminPanelPageClickUserList<Tentry extends TuserListClick>(
  data: Tentry,
): Promise<TuserListClickResult> {
  return await page.click({ userList: data });
}

/** ====================== click ================== */

/** ====================== get ================== */

type TadminPanelGet = {
  addNewUser?: ButtonAction;
  usersList?: ButtonAction;
};
type TadminPanelGetResult = {
  addNewUser?: ButtonGetRes;
  usersList?: ButtonGetRes;
};
async function onAdminPanelPageGetDataFromAdminPanelSection<Tentry extends TadminPanelGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TadminPanelGetResult>> {
  const { adminPanel } = await page.get({ adminPanel: data });
  return adminPanel;
}

type TuserListGet = CollectionActionType<
  {
    user?: TextGetRes;
    details?: ButtonGetRes;
  },
  {
    user?: TextIsDispRes;
    details?: ButtonIsDispRes;
  },
  {
    user?: TextAction;
    details?: ButtonAction;
  }
>;
type TuserListGetResult = {
  user?: TextGetRes;
  details?: ButtonGetRes;
}[];
async function onAdminPanelPageGetDataFromUserList<Tentry extends TuserListGet>(
  data: Tentry,
): Promise<TuserListGetResult> {
  const { userList } = await page.get({ userList: data });
  return userList;
}

/** ====================== get ================== */

/** ====================== isDisplayed ================== */

type TadminPanelIsDisplayed = {
  addNewUser?: ButtonAction;
  usersList?: ButtonAction;
};
type TadminPanelIsDisplayedResult = {
  addNewUser?: ButtonIsDispRes;
  usersList?: ButtonIsDispRes;
};
async function onAdminPanelPageGetVisibilityOfAdminPanelSection<Tentry extends TadminPanelIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TadminPanelIsDisplayedResult>> {
  const { adminPanel } = await page.isDisplayed({ adminPanel: data });
  return adminPanel;
}

type TuserListIsDisplayed = CollectionActionType<
  {
    user?: TextGetRes;
    details?: ButtonGetRes;
  },
  {
    user?: TextIsDispRes;
    details?: ButtonIsDispRes;
  },
  {
    user?: TextAction;
    details?: ButtonAction;
  }
>;
type TuserListIsDisplayedResult = {
  user?: TextIsDispRes;
  details?: ButtonIsDispRes;
}[];
async function onAdminPanelPageGetVisibilityOfUserList<Tentry extends TuserListIsDisplayed>(
  data: Tentry,
): Promise<TuserListIsDisplayedResult> {
  const { userList } = await page.isDisplayed({ userList: data });
  return userList;
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

/** ====================== sendKeys ================== */

type TonAdminPanelPageGetCollectionFromUserListEntry = Omit<
  CollectionActionType<
    {
      user?: TextGetRes;
      details?: ButtonGetRes;
    },
    {
      user?: TextIsDispRes;
      details?: ButtonIsDispRes;
    }
  >,
  '_action'
>;
type TonAdminPanelPageGetCollectionFromUserList = {
  user?: TextGetRes;
  details?: ButtonGetRes;
};
async function onAdminPanelPageGetCollectionFromUserList({
  ...descriptions
}: TonAdminPanelPageGetCollectionFromUserListEntry = {}): Promise<TonAdminPanelPageGetCollectionFromUserList[]> {
  const result = await page.get({ userList: { ...descriptions, _action: null } });

  return result.userList;
}

export {
  onAdminPanelPageGetRandomFieldValueFromUserList,
  onAdminPanelPageGetSeveralRandomFieldValuesFromUserList,
  onAdminPanelPageGetRandomDataFromUserList,
  onAdminPanelPageClickAdminPanelSection,
  onAdminPanelPageClickUserList,
  onAdminPanelPageGetDataFromAdminPanelSection,
  onAdminPanelPageGetDataFromUserList,
  onAdminPanelPageGetVisibilityOfAdminPanelSection,
  onAdminPanelPageGetVisibilityOfUserList,
  onAdminPanelPageGetCollectionFromUserList,
};
