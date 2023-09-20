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
  InputAction,
  InputGetRes,
  InputIsDispRes,
  InputSendKeys,
} from '../../../lib';

import { MachinesPage } from './page';

const page = new MachinesPage();

type TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields =
  | 'manufacturer'
  | 'workVolume'
  | 'length'
  | 'width'
  | 'weight'
  | 'power'
  | 'price';
type TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntry = Omit<
  CollectionActionType<
    {
      manufacturer?: TextGetRes;
      workVolume?: TextGetRes;
      length?: TextGetRes;
      width?: TextGetRes;
      weight?: TextGetRes;
      power?: TextGetRes;
      price?: TextGetRes;
    },
    {
      manufacturer?: TextIsDispRes;
      workVolume?: TextIsDispRes;
      length?: TextIsDispRes;
      width?: TextIsDispRes;
      weight?: TextIsDispRes;
      power?: TextIsDispRes;
      price?: TextIsDispRes;
    }
  >,
  '_action'
>;

async function onMachinesPageGetRandomFieldValueFromMachinesList(
  _field: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields,
  descriptions: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {},
): Promise<string> {
  const result = await page.get({ machinesList: { ...descriptions, _action: { [_field]: null } } });

  const flatResult = result.machinesList;

  return getRandomArrayItem(flatResult.map((item) => item[_field]));
}

async function onMachinesPageGetSeveralRandomFieldValuesFromMachinesList(
  _field: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields = 'manufacturer',
  quantity: number = 2,
  descriptions: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {},
): Promise<string[]> {
  const result = await page.get({ machinesList: { ...descriptions, _action: { [_field]: null } } });

  const flatResult = result.machinesList;

  return getRandomArrayItem(
    flatResult.map((item) => item[_field]),
    quantity,
  );
}

async function onMachinesPageGetRandomDataFromMachinesList<
  T extends ReadonlyArray<TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields>,
>(
  _fields: T,
  descriptions: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {},
): Promise<TobjectFromStringArray<T>> {
  const result = await page.get({
    machinesList: {
      ...descriptions,
      _action: _fields.reduce((act, k) => {
        act[k] = null;

        return act;
      }, {}),
    },
  });

  const flatResult = result.machinesList;
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
async function onMachinesPageClickAdminPanelSection<Tentry extends TadminPanelClick>(
  data: Tentry,
): Promise<TadminPanelClickResult> {
  return await page.click({ adminPanel: data });
}

type TheaderClick = {
  greeting?: TextAction;
  analytics?: ButtonAction;
  combines?: ButtonAction;
  adminPanel?: ButtonAction;
  logout?: ButtonAction;
};
type TheaderClickResult = void;
async function onMachinesPageClickHeaderSection<Tentry extends TheaderClick>(
  data: Tentry,
): Promise<TheaderClickResult> {
  return await page.click({ header: data });
}

type TfilterClick = {
  manufacturer?: InputAction;
  workVolume?: InputAction;
  price?: InputAction;
  filterButton?: ButtonAction;
};
type TfilterClickResult = void;
async function onMachinesPageClickFilterSection<Tentry extends TfilterClick>(
  data: Tentry,
): Promise<TfilterClickResult> {
  return await page.click({ filter: data });
}

type TmachinesListClick = CollectionActionType<
  {
    manufacturer?: TextGetRes;
    workVolume?: TextGetRes;
    length?: TextGetRes;
    width?: TextGetRes;
    weight?: TextGetRes;
    power?: TextGetRes;
    price?: TextGetRes;
  },
  {
    manufacturer?: TextIsDispRes;
    workVolume?: TextIsDispRes;
    length?: TextIsDispRes;
    width?: TextIsDispRes;
    weight?: TextIsDispRes;
    power?: TextIsDispRes;
    price?: TextIsDispRes;
  },
  {
    manufacturer?: TextAction;
    workVolume?: TextAction;
    length?: TextAction;
    width?: TextAction;
    weight?: TextAction;
    power?: TextAction;
    price?: TextAction;
  }
>;
type TmachinesListClickResult = void;
async function onMachinesPageClickMachineRowList<Tentry extends TmachinesListClick>(
  data: Tentry,
): Promise<TmachinesListClickResult> {
  return await page.click({ machinesList: data });
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
async function onMachinesPageGetDataFromAdminPanelSection<Tentry extends TadminPanelGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TadminPanelGetResult>> {
  const { adminPanel } = await page.get({ adminPanel: data });
  return adminPanel;
}

type TheaderGet = {
  greeting?: TextAction;
  analytics?: ButtonAction;
  combines?: ButtonAction;
  adminPanel?: ButtonAction;
  logout?: ButtonAction;
};
type TheaderGetResult = {
  greeting?: TextGetRes;
  analytics?: ButtonGetRes;
  combines?: ButtonGetRes;
  adminPanel?: ButtonGetRes;
  logout?: ButtonGetRes;
};
async function onMachinesPageGetDataFromHeaderSection<Tentry extends TheaderGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
  const { header } = await page.get({ header: data });
  return header;
}

type TfilterGet = {
  manufacturer?: InputAction;
  workVolume?: InputAction;
  price?: InputAction;
  filterButton?: ButtonAction;
};
type TfilterGetResult = {
  manufacturer?: InputGetRes;
  workVolume?: InputGetRes;
  price?: InputGetRes;
  filterButton?: ButtonGetRes;
};
async function onMachinesPageGetDataFromFilterSection<Tentry extends TfilterGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TfilterGetResult>> {
  const { filter } = await page.get({ filter: data });
  return filter;
}

type TmachinesListGet = CollectionActionType<
  {
    manufacturer?: TextGetRes;
    workVolume?: TextGetRes;
    length?: TextGetRes;
    width?: TextGetRes;
    weight?: TextGetRes;
    power?: TextGetRes;
    price?: TextGetRes;
  },
  {
    manufacturer?: TextIsDispRes;
    workVolume?: TextIsDispRes;
    length?: TextIsDispRes;
    width?: TextIsDispRes;
    weight?: TextIsDispRes;
    power?: TextIsDispRes;
    price?: TextIsDispRes;
  },
  {
    manufacturer?: TextAction;
    workVolume?: TextAction;
    length?: TextAction;
    width?: TextAction;
    weight?: TextAction;
    power?: TextAction;
    price?: TextAction;
  }
>;
type TmachinesListGetResult = {
  manufacturer?: TextGetRes;
  workVolume?: TextGetRes;
  length?: TextGetRes;
  width?: TextGetRes;
  weight?: TextGetRes;
  power?: TextGetRes;
  price?: TextGetRes;
}[];
async function onMachinesPageGetDataFromMachineRowList<Tentry extends TmachinesListGet>(
  data: Tentry,
): Promise<TmachinesListGetResult> {
  const { machinesList } = await page.get({ machinesList: data });
  return machinesList;
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
async function onMachinesPageGetVisibilityOfAdminPanelSection<Tentry extends TadminPanelIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TadminPanelIsDisplayedResult>> {
  const { adminPanel } = await page.isDisplayed({ adminPanel: data });
  return adminPanel;
}

type TheaderIsDisplayed = {
  greeting?: TextAction;
  analytics?: ButtonAction;
  combines?: ButtonAction;
  adminPanel?: ButtonAction;
  logout?: ButtonAction;
};
type TheaderIsDisplayedResult = {
  greeting?: TextIsDispRes;
  analytics?: ButtonIsDispRes;
  combines?: ButtonIsDispRes;
  adminPanel?: ButtonIsDispRes;
  logout?: ButtonIsDispRes;
};
async function onMachinesPageGetVisibilityOfHeaderSection<Tentry extends TheaderIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
  const { header } = await page.isDisplayed({ header: data });
  return header;
}

type TfilterIsDisplayed = {
  manufacturer?: InputAction;
  workVolume?: InputAction;
  price?: InputAction;
  filterButton?: ButtonAction;
};
type TfilterIsDisplayedResult = {
  manufacturer?: InputIsDispRes;
  workVolume?: InputIsDispRes;
  price?: InputIsDispRes;
  filterButton?: ButtonIsDispRes;
};
async function onMachinesPageGetVisibilityOfFilterSection<Tentry extends TfilterIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TfilterIsDisplayedResult>> {
  const { filter } = await page.isDisplayed({ filter: data });
  return filter;
}

type TmachinesListIsDisplayed = CollectionActionType<
  {
    manufacturer?: TextGetRes;
    workVolume?: TextGetRes;
    length?: TextGetRes;
    width?: TextGetRes;
    weight?: TextGetRes;
    power?: TextGetRes;
    price?: TextGetRes;
  },
  {
    manufacturer?: TextIsDispRes;
    workVolume?: TextIsDispRes;
    length?: TextIsDispRes;
    width?: TextIsDispRes;
    weight?: TextIsDispRes;
    power?: TextIsDispRes;
    price?: TextIsDispRes;
  },
  {
    manufacturer?: TextAction;
    workVolume?: TextAction;
    length?: TextAction;
    width?: TextAction;
    weight?: TextAction;
    power?: TextAction;
    price?: TextAction;
  }
>;
type TmachinesListIsDisplayedResult = {
  manufacturer?: TextIsDispRes;
  workVolume?: TextIsDispRes;
  length?: TextIsDispRes;
  width?: TextIsDispRes;
  weight?: TextIsDispRes;
  power?: TextIsDispRes;
  price?: TextIsDispRes;
}[];
async function onMachinesPageGetVisibilityOfMachineRowList<Tentry extends TmachinesListIsDisplayed>(
  data: Tentry,
): Promise<TmachinesListIsDisplayedResult> {
  const { machinesList } = await page.isDisplayed({ machinesList: data });
  return machinesList;
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

type TfilterSendKeys = {
  manufacturer?: InputSendKeys;
  workVolume?: InputSendKeys;
  price?: InputSendKeys;
};
type TfilterSendKeysResult = void;
async function onMachinesPageSetValuesToFilterSection<Tentry extends TfilterSendKeys>(
  data: Tentry,
): Promise<TfilterSendKeysResult> {
  return await page.sendKeys({ filter: data });
}

/** ====================== sendKeys ================== */

type TonMachinesPageGetCollectionFromMachinesListEntry = Omit<
  CollectionActionType<
    {
      manufacturer?: TextGetRes;
      workVolume?: TextGetRes;
      length?: TextGetRes;
      width?: TextGetRes;
      weight?: TextGetRes;
      power?: TextGetRes;
      price?: TextGetRes;
    },
    {
      manufacturer?: TextIsDispRes;
      workVolume?: TextIsDispRes;
      length?: TextIsDispRes;
      width?: TextIsDispRes;
      weight?: TextIsDispRes;
      power?: TextIsDispRes;
      price?: TextIsDispRes;
    }
  >,
  '_action'
>;
type TonMachinesPageGetCollectionFromMachinesList = {
  manufacturer?: TextGetRes;
  workVolume?: TextGetRes;
  length?: TextGetRes;
  width?: TextGetRes;
  weight?: TextGetRes;
  power?: TextGetRes;
  price?: TextGetRes;
};
async function onMachinesPageGetCollectionFromMachinesList({
  ...descriptions
}: TonMachinesPageGetCollectionFromMachinesListEntry = {}): Promise<TonMachinesPageGetCollectionFromMachinesList[]> {
  const result = await page.get({ machinesList: { ...descriptions, _action: null } });

  return result.machinesList;
}

export {
  onMachinesPageGetRandomFieldValueFromMachinesList,
  onMachinesPageGetSeveralRandomFieldValuesFromMachinesList,
  onMachinesPageGetRandomDataFromMachinesList,
  onMachinesPageClickAdminPanelSection,
  onMachinesPageClickHeaderSection,
  onMachinesPageClickFilterSection,
  onMachinesPageClickMachineRowList,
  onMachinesPageGetDataFromAdminPanelSection,
  onMachinesPageGetDataFromHeaderSection,
  onMachinesPageGetDataFromFilterSection,
  onMachinesPageGetDataFromMachineRowList,
  onMachinesPageGetVisibilityOfAdminPanelSection,
  onMachinesPageGetVisibilityOfHeaderSection,
  onMachinesPageGetVisibilityOfFilterSection,
  onMachinesPageGetVisibilityOfMachineRowList,
  onMachinesPageSetValuesToFilterSection,
  onMachinesPageGetCollectionFromMachinesList,
};
