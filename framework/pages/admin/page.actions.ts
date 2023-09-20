import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import {
  IWaitOpts,
  CollectionActionType,
  CollectionWaitingType,
  ButtonAction,
  ButtonGetRes,
  ButtonIsDispRes,
  InputAction,
  InputGetRes,
  InputIsDispRes,
  InputSendKeys,
  CheckBoxAction,
  CheckBoxGetRes,
  CheckBoxIsDispRes,
  CheckBoxSendKeys,
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
  addNewUserFrag?: {
    addNewUserBtn?: ButtonAction;
    username?: InputAction;
    name?: InputAction;
    email?: InputAction;
    password?: InputAction;
    adminCheckBox?: CheckBoxAction;
    createNewUserButton?: ButtonAction;
  };
  usersListFrag?: {
    user?: TextAction;
    details?: ButtonAction;
  };
  adminUserForm?: {
    userFormUserName?: InputAction;
    userFormName?: InputAction;
    userFormEmail?: InputAction;
    userFormPassword?: InputAction;
    userFormCheckBox?: CheckBoxAction;
  };
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

type TonAdminPanelPageClick = {
  usersListBtn?: ButtonAction;
};
type TonAdminPanelPageClickResult = void;
async function onAdminPanelPageClickPageElements<Tentry extends TonAdminPanelPageClick>(
  data: Tentry,
): Promise<TonAdminPanelPageClickResult> {
  return await page.click(data);
}

/** ====================== click ================== */

/** ====================== get ================== */

type TadminPanelGet = {
  addNewUserFrag?: {
    addNewUserBtn?: ButtonAction;
    username?: InputAction;
    name?: InputAction;
    email?: InputAction;
    password?: InputAction;
    adminCheckBox?: CheckBoxAction;
    createNewUserButton?: ButtonAction;
  };
  usersListFrag?: {
    user?: TextAction;
    details?: ButtonAction;
  };
  adminUserForm?: {
    userFormUserName?: InputAction;
    userFormName?: InputAction;
    userFormEmail?: InputAction;
    userFormPassword?: InputAction;
    userFormCheckBox?: CheckBoxAction;
  };
};
type TadminPanelGetResult = {
  addNewUserFrag?: {
    addNewUserBtn?: ButtonGetRes;
    username?: InputGetRes;
    name?: InputGetRes;
    email?: InputGetRes;
    password?: InputGetRes;
    adminCheckBox?: CheckBoxGetRes;
    createNewUserButton?: ButtonGetRes;
  };
  usersListFrag?: {
    user?: TextGetRes;
    details?: ButtonGetRes;
  };
  adminUserForm?: {
    userFormUserName?: InputGetRes;
    userFormName?: InputGetRes;
    userFormEmail?: InputGetRes;
    userFormPassword?: InputGetRes;
    userFormCheckBox?: CheckBoxGetRes;
  };
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

type TonAdminPanelPageGet = {
  usersListBtn?: ButtonAction;
};
type TonAdminPanelPageGetResult = {
  usersListBtn?: ButtonGetRes;
};
async function onAdminPanelPageGetDataFromPageElements<Tentry extends TonAdminPanelPageGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TonAdminPanelPageGetResult>> {
  return await page.get(data);
}

/** ====================== get ================== */

/** ====================== isDisplayed ================== */

type TadminPanelIsDisplayed = {
  addNewUserFrag?: {
    addNewUserBtn?: ButtonAction;
    username?: InputAction;
    name?: InputAction;
    email?: InputAction;
    password?: InputAction;
    adminCheckBox?: CheckBoxAction;
    createNewUserButton?: ButtonAction;
  };
  usersListFrag?: {
    user?: TextAction;
    details?: ButtonAction;
  };
  adminUserForm?: {
    userFormUserName?: InputAction;
    userFormName?: InputAction;
    userFormEmail?: InputAction;
    userFormPassword?: InputAction;
    userFormCheckBox?: CheckBoxAction;
  };
};
type TadminPanelIsDisplayedResult = {
  addNewUserFrag?: {
    addNewUserBtn?: ButtonIsDispRes;
    username?: InputIsDispRes;
    name?: InputIsDispRes;
    email?: InputIsDispRes;
    password?: InputIsDispRes;
    adminCheckBox?: CheckBoxIsDispRes;
    createNewUserButton?: ButtonIsDispRes;
  };
  usersListFrag?: {
    user?: TextIsDispRes;
    details?: ButtonIsDispRes;
  };
  adminUserForm?: {
    userFormUserName?: InputIsDispRes;
    userFormName?: InputIsDispRes;
    userFormEmail?: InputIsDispRes;
    userFormPassword?: InputIsDispRes;
    userFormCheckBox?: CheckBoxIsDispRes;
  };
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

type TonAdminPanelPageIsDisplayed = {
  usersListBtn?: ButtonAction;
};
type TonAdminPanelPageIsDisplayedResult = {
  usersListBtn?: ButtonIsDispRes;
};
async function onAdminPanelPageGetVisibilityOfPageElements<Tentry extends TonAdminPanelPageIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TonAdminPanelPageIsDisplayedResult>> {
  return await page.isDisplayed(data);
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

type TadminPanelSendKeys = {
  addNewUserFrag?: {
    username?: InputSendKeys;
    name?: InputSendKeys;
    email?: InputSendKeys;
    password?: InputSendKeys;
    adminCheckBox?: CheckBoxSendKeys;
  };
  adminUserForm?: {
    userFormUserName?: InputSendKeys;
    userFormName?: InputSendKeys;
    userFormEmail?: InputSendKeys;
    userFormPassword?: InputSendKeys;
    userFormCheckBox?: CheckBoxSendKeys;
  };
};
type TadminPanelSendKeysResult = void;
async function onAdminPanelPageSetValuesToAdminPanelSection<Tentry extends TadminPanelSendKeys>(
  data: Tentry,
): Promise<TadminPanelSendKeysResult> {
  return await page.sendKeys({ adminPanel: data });
}

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
  onAdminPanelPageClickPageElements,
  onAdminPanelPageGetDataFromAdminPanelSection,
  onAdminPanelPageGetDataFromUserList,
  onAdminPanelPageGetDataFromPageElements,
  onAdminPanelPageGetVisibilityOfAdminPanelSection,
  onAdminPanelPageGetVisibilityOfUserList,
  onAdminPanelPageGetVisibilityOfPageElements,
  onAdminPanelPageSetValuesToAdminPanelSection,
  onAdminPanelPageGetCollectionFromUserList,
};
