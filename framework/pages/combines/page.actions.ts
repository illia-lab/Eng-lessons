import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import {
  IWaitOpts,
  CollectionActionType,
  CollectionWaitingType,
  TextAction,
  TextGetRes,
  TextIsDispRes,
} from '../../../lib';

import { CombinesPage } from './page';

const page = new CombinesPage();

type TonCombinesPageGetRandomDataAndFieldValuesFromCombinesRowEntryFields =
  | 'producerAndBrand'
  | 'combineMass'
  | 'combineHeight'
  | 'combineClass'
  | 'combinePrice';
type TonCombinesPageGetRandomDataAndFieldValuesFromCombinesRowEntry = Omit<
  CollectionActionType<
    {
      producerAndBrand?: TextGetRes;
      combineMass?: TextGetRes;
      combineHeight?: TextGetRes;
      combineClass?: TextGetRes;
      combinePrice?: TextGetRes;
    },
    {
      producerAndBrand?: TextIsDispRes;
      combineMass?: TextIsDispRes;
      combineHeight?: TextIsDispRes;
      combineClass?: TextIsDispRes;
      combinePrice?: TextIsDispRes;
    }
  >,
  '_action'
>;

async function onCombinesPageGetRandomFieldValueFromCombinesRow(
  _field: TonCombinesPageGetRandomDataAndFieldValuesFromCombinesRowEntryFields,
  descriptions: TonCombinesPageGetRandomDataAndFieldValuesFromCombinesRowEntry = {},
): Promise<string> {
  const result = await page.get({ combinesRow: { ...descriptions, _action: { [_field]: null } } });

  const flatResult = result.combinesRow;

  return getRandomArrayItem(flatResult.map((item) => item[_field]));
}

async function onCombinesPageGetSeveralRandomFieldValuesFromCombinesRow(
  _field: TonCombinesPageGetRandomDataAndFieldValuesFromCombinesRowEntryFields = 'producerAndBrand',
  quantity: number = 2,
  descriptions: TonCombinesPageGetRandomDataAndFieldValuesFromCombinesRowEntry = {},
): Promise<string[]> {
  const result = await page.get({ combinesRow: { ...descriptions, _action: { [_field]: null } } });

  const flatResult = result.combinesRow;

  return getRandomArrayItem(
    flatResult.map((item) => item[_field]),
    quantity,
  );
}

async function onCombinesPageGetRandomDataFromCombinesRow<
  T extends ReadonlyArray<TonCombinesPageGetRandomDataAndFieldValuesFromCombinesRowEntryFields>,
>(
  _fields: T,
  descriptions: TonCombinesPageGetRandomDataAndFieldValuesFromCombinesRowEntry = {},
): Promise<TobjectFromStringArray<T>> {
  const result = await page.get({
    combinesRow: {
      ...descriptions,
      _action: _fields.reduce((act, k) => {
        act[k] = null;

        return act;
      }, {}),
    },
  });

  const flatResult = result.combinesRow;
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

type TcombinesRowClick = CollectionActionType<
  {
    producerAndBrand?: TextGetRes;
    combineMass?: TextGetRes;
    combineHeight?: TextGetRes;
    combineClass?: TextGetRes;
    combinePrice?: TextGetRes;
  },
  {
    producerAndBrand?: TextIsDispRes;
    combineMass?: TextIsDispRes;
    combineHeight?: TextIsDispRes;
    combineClass?: TextIsDispRes;
    combinePrice?: TextIsDispRes;
  },
  {
    producerAndBrand?: TextAction;
    combineMass?: TextAction;
    combineHeight?: TextAction;
    combineClass?: TextAction;
    combinePrice?: TextAction;
  }
>;
type TcombinesRowClickResult = void;
async function onCombinesPageClickCombinesRow<Tentry extends TcombinesRowClick>(
  data: Tentry,
): Promise<TcombinesRowClickResult> {
  return await page.click({ combinesRow: data });
}

/** ====================== click ================== */

/** ====================== get ================== */

type TcombinesRowGet = CollectionActionType<
  {
    producerAndBrand?: TextGetRes;
    combineMass?: TextGetRes;
    combineHeight?: TextGetRes;
    combineClass?: TextGetRes;
    combinePrice?: TextGetRes;
  },
  {
    producerAndBrand?: TextIsDispRes;
    combineMass?: TextIsDispRes;
    combineHeight?: TextIsDispRes;
    combineClass?: TextIsDispRes;
    combinePrice?: TextIsDispRes;
  },
  {
    producerAndBrand?: TextAction;
    combineMass?: TextAction;
    combineHeight?: TextAction;
    combineClass?: TextAction;
    combinePrice?: TextAction;
  }
>;
type TcombinesRowGetResult = {
  producerAndBrand?: TextGetRes;
  combineMass?: TextGetRes;
  combineHeight?: TextGetRes;
  combineClass?: TextGetRes;
  combinePrice?: TextGetRes;
}[];
async function onCombinesPageGetDataFromCombinesRow<Tentry extends TcombinesRowGet>(
  data: Tentry,
): Promise<TcombinesRowGetResult> {
  const { combinesRow } = await page.get({ combinesRow: data });
  return combinesRow;
}

/** ====================== get ================== */

/** ====================== isDisplayed ================== */

type TcombinesRowIsDisplayed = CollectionActionType<
  {
    producerAndBrand?: TextGetRes;
    combineMass?: TextGetRes;
    combineHeight?: TextGetRes;
    combineClass?: TextGetRes;
    combinePrice?: TextGetRes;
  },
  {
    producerAndBrand?: TextIsDispRes;
    combineMass?: TextIsDispRes;
    combineHeight?: TextIsDispRes;
    combineClass?: TextIsDispRes;
    combinePrice?: TextIsDispRes;
  },
  {
    producerAndBrand?: TextAction;
    combineMass?: TextAction;
    combineHeight?: TextAction;
    combineClass?: TextAction;
    combinePrice?: TextAction;
  }
>;
type TcombinesRowIsDisplayedResult = {
  producerAndBrand?: TextIsDispRes;
  combineMass?: TextIsDispRes;
  combineHeight?: TextIsDispRes;
  combineClass?: TextIsDispRes;
  combinePrice?: TextIsDispRes;
}[];
async function onCombinesPageGetVisibilityOfCombinesRow<Tentry extends TcombinesRowIsDisplayed>(
  data: Tentry,
): Promise<TcombinesRowIsDisplayedResult> {
  const { combinesRow } = await page.isDisplayed({ combinesRow: data });
  return combinesRow;
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

/** ====================== sendKeys ================== */

type TonCombinesPageGetCollectionFromCombinesRowEntry = Omit<
  CollectionActionType<
    {
      producerAndBrand?: TextGetRes;
      combineMass?: TextGetRes;
      combineHeight?: TextGetRes;
      combineClass?: TextGetRes;
      combinePrice?: TextGetRes;
    },
    {
      producerAndBrand?: TextIsDispRes;
      combineMass?: TextIsDispRes;
      combineHeight?: TextIsDispRes;
      combineClass?: TextIsDispRes;
      combinePrice?: TextIsDispRes;
    }
  >,
  '_action'
>;
type TonCombinesPageGetCollectionFromCombinesRow = {
  producerAndBrand?: TextGetRes;
  combineMass?: TextGetRes;
  combineHeight?: TextGetRes;
  combineClass?: TextGetRes;
  combinePrice?: TextGetRes;
};
async function onCombinesPageGetCollectionFromCombinesRow({
  ...descriptions
}: TonCombinesPageGetCollectionFromCombinesRowEntry = {}): Promise<TonCombinesPageGetCollectionFromCombinesRow[]> {
  const result = await page.get({ combinesRow: { ...descriptions, _action: null } });

  return result.combinesRow;
}

export {
  onCombinesPageGetRandomFieldValueFromCombinesRow,
  onCombinesPageGetSeveralRandomFieldValuesFromCombinesRow,
  onCombinesPageGetRandomDataFromCombinesRow,
  onCombinesPageClickCombinesRow,
  onCombinesPageGetDataFromCombinesRow,
  onCombinesPageGetVisibilityOfCombinesRow,
  onCombinesPageGetCollectionFromCombinesRow,
};
