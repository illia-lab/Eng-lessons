import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system'
import {
    IWaitOpts, CollectionActionType,CollectionWaitingType,
   TextAction, TextGetRes, TextIsDispRes,
   ButtonAction, ButtonGetRes, ButtonIsDispRes,
   InputAction, InputGetRes, InputIsDispRes, InputSendKeys,
  } from '../../../../lib';

import { MachinesPage } from './page';

const page = new MachinesPage();




  type TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields =  'manufacturer' | 'workVolume' | 'length' | 'width' | 'weight' | 'power' | 'price'
  type TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntry = Omit<CollectionActionType<{
 manufacturer?: TextGetRes
 workVolume?: TextGetRes
 length?: TextGetRes
 width?: TextGetRes
 weight?: TextGetRes
 power?: TextGetRes
 price?: TextGetRes
},{
 manufacturer?: TextIsDispRes
 workVolume?: TextIsDispRes
 length?: TextIsDispRes
 width?: TextIsDispRes
 weight?: TextIsDispRes
 power?: TextIsDispRes
 price?: TextIsDispRes
}>, '_action'>

  const onMachinesPageGetRandomFieldValueFromMachinesList = async function(_field: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields,  descriptions: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {}): Promise<string> {

    const result = await page.get({machinesList: {...descriptions, _action: { [_field]: null }}});

    const flatResult = result.machinesList

    return getRandomArrayItem(
      flatResult
        .map(item => item[_field]),
    );
  }

  const onMachinesPageGetSeveralRandomFieldValuesFromMachinesList = async function(_field: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields = 'manufacturer', quantity: number = 2, descriptions: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {}): Promise<string[]> {

    const result = await page.get({machinesList: {...descriptions, _action: { [_field]: null }}});

    const flatResult = result.machinesList

    return getRandomArrayItem(
      flatResult
        .map(item => item[_field]),
      quantity,
    );
  }

    const onMachinesPageGetRandomDataFromMachinesList = async function<T extends ReadonlyArray<TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields>>(_fields: T, descriptions: TonMachinesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {}): Promise<TobjectFromStringArray<T>> {

      const result = await page.get({machinesList: {...descriptions, _action: _fields.reduce((act, k) => {
      act[k] = null;

      return act
    }, {})}});

      const flatResult = result.machinesList
  return getRandomArrayItem(
    flatResult
      .map(item => _fields.reduce((requredData, k ) => {
        requredData[k] = item[k]

        return requredData
      }, {} as TobjectFromStringArray<T>))
  );
};



/** ====================== click ================== */




type TheaderClick = {
 greeting?: TextAction
 analytics?: ButtonAction
 combines?: ButtonAction
 adminPanel?: ButtonAction
 logout?: ButtonAction
}
type TheaderClickResult = void
const onMachinesPageClickHeaderSection = async function<Tentry extends TheaderClick>(data: Tentry): Promise<TheaderClickResult> {
    return await page.click({ header: data });
  };


type TfilterClick = {
 manufacturer?: InputAction | null
 workVolume?: InputAction | null
 price?: InputAction | null
 filterButton?: ButtonAction | null
}
type TfilterClickResult = void
const onMachinesPageClickFilterSection = async function<Tentry extends TfilterClick>(data: Tentry): Promise<TfilterClickResult> {
    return await page.click({ filter: data });
  };


type TmachinesListClick = CollectionActionType<{
 manufacturer?: TextGetRes | string
 workVolume?: TextGetRes | string
 length?: TextGetRes | string
 width?: TextGetRes | string
 weight?: TextGetRes | string
 power?: TextGetRes | string
 price?: TextGetRes | string
},{
 manufacturer?: TextIsDispRes
 workVolume?: TextIsDispRes
 length?: TextIsDispRes
 width?: TextIsDispRes
 weight?: TextIsDispRes
 power?: TextIsDispRes
 price?: TextIsDispRes
},{
 manufacturer?: TextAction | null
 workVolume?: TextAction
 length?: TextAction
 width?: TextAction
 weight?: TextAction
 power?: TextAction
 price?: TextAction
}>
type TmachinesListClickResult = void
const onMachinesPageClickMachineRowList = async function<Tentry extends TmachinesListClick>(data: Tentry): Promise<TmachinesListClickResult> {
    return await page.click({ machinesList: data });
  };


/** ====================== click ================== */


/** ====================== get ================== */




type TheaderGet = {
 greeting?: TextAction
 analytics?: ButtonAction
 combines?: ButtonAction
 adminPanel?: ButtonAction
 logout?: ButtonAction
}
type TheaderGetResult = {
 greeting?: TextGetRes
 analytics?: ButtonGetRes
 combines?: ButtonGetRes
 adminPanel?: ButtonGetRes
 logout?: ButtonGetRes
}
const onMachinesPageGetDataFromHeaderSection = async function<Tentry extends TheaderGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
    const { header } = await page.get({ header: data });
	return header;
  };


type TfilterGet = {
 manufacturer?: InputAction
 workVolume?: InputAction
 price?: InputAction
 filterButton?: ButtonAction
}
type TfilterGetResult = {
 manufacturer?: InputGetRes
 workVolume?: InputGetRes
 price?: InputGetRes
 filterButton?: ButtonGetRes
}
const onMachinesPageGetDataFromFilterSection = async function<Tentry extends TfilterGet>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TfilterGetResult>> {
    const { filter } = await page.get({ filter: data });
	return filter;
  };


type TmachinesListGet = CollectionActionType<{
 manufacturer?: TextGetRes
 workVolume?: TextGetRes
 length?: TextGetRes
 width?: TextGetRes
 weight?: TextGetRes
 power?: TextGetRes
 price?: TextGetRes
},{
 manufacturer?: TextIsDispRes
 workVolume?: TextIsDispRes
 length?: TextIsDispRes
 width?: TextIsDispRes
 weight?: TextIsDispRes
 power?: TextIsDispRes
 price?: TextIsDispRes
},{
 manufacturer?: TextAction
 workVolume?: TextAction
 length?: TextAction
 width?: TextAction
 weight?: TextAction
 power?: TextAction
 price?: TextAction
}>
type TmachinesListGetResult = {
 manufacturer?: TextGetRes
 workVolume?: TextGetRes
 length?: TextGetRes
 width?: TextGetRes
 weight?: TextGetRes
 power?: TextGetRes
 price?: TextGetRes
}[]
const onMachinesPageGetDataFromMachineRowList = async function<Tentry extends TmachinesListGet>(data: Tentry): Promise<TmachinesListGetResult> {
    const { machinesList } = await page.get({ machinesList: data });
	return machinesList;
  };


/** ====================== get ================== */


/** ====================== isDisplayed ================== */




type TheaderIsDisplayed = {
 greeting?: TextAction
 analytics?: ButtonAction
 combines?: ButtonAction
 adminPanel?: ButtonAction
 logout?: ButtonAction
}
type TheaderIsDisplayedResult = {
 greeting?: TextIsDispRes
 analytics?: ButtonIsDispRes
 combines?: ButtonIsDispRes
 adminPanel?: ButtonIsDispRes
 logout?: ButtonIsDispRes
}
const onMachinesPageGetVisibilityOfHeaderSection = async function<Tentry extends TheaderIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
    const { header } = await page.isDisplayed({ header: data });
	return header;
  };


type TfilterIsDisplayed = {
 manufacturer?: InputAction
 workVolume?: InputAction
 price?: InputAction
 filterButton?: ButtonAction
}
type TfilterIsDisplayedResult = {
 manufacturer?: InputIsDispRes
 workVolume?: InputIsDispRes
 price?: InputIsDispRes
 filterButton?: ButtonIsDispRes
}
const onMachinesPageGetVisibilityOfFilterSection = async function<Tentry extends TfilterIsDisplayed>(data: Tentry): Promise<TresultBasedOnArgument<Tentry, TfilterIsDisplayedResult>> {
    const { filter } = await page.isDisplayed({ filter: data });
	return filter;
  };


type TmachinesListIsDisplayed = CollectionActionType<{
 manufacturer?: TextGetRes
 workVolume?: TextGetRes
 length?: TextGetRes
 width?: TextGetRes
 weight?: TextGetRes
 power?: TextGetRes
 price?: TextGetRes
},{
 manufacturer?: TextIsDispRes
 workVolume?: TextIsDispRes
 length?: TextIsDispRes
 width?: TextIsDispRes
 weight?: TextIsDispRes
 power?: TextIsDispRes
 price?: TextIsDispRes
},{
 manufacturer?: TextAction
 workVolume?: TextAction
 length?: TextAction
 width?: TextAction
 weight?: TextAction
 power?: TextAction
 price?: TextAction
}>
type TmachinesListIsDisplayedResult = {
 manufacturer?: TextIsDispRes
 workVolume?: TextIsDispRes
 length?: TextIsDispRes
 width?: TextIsDispRes
 weight?: TextIsDispRes
 power?: TextIsDispRes
 price?: TextIsDispRes
}[]
const onMachinesPageGetVisibilityOfMachineRowList = async function<Tentry extends TmachinesListIsDisplayed>(data: Tentry): Promise<TmachinesListIsDisplayedResult> {
    const { machinesList } = await page.isDisplayed({ machinesList: data });
	return machinesList;
  };


/** ====================== isDisplayed ================== */


/** ====================== sendKeys ================== */




type TfilterSendKeys = {
 manufacturer?: InputSendKeys | string
 workVolume?: InputSendKeys | string
 price?: InputSendKeys | number
}
type TfilterSendKeysResult = void
const onMachinesPageSetValuesToFilterSection = async function<Tentry extends TfilterSendKeys>(data: Tentry): Promise<TfilterSendKeysResult> {
    return await page.sendKeys({ filter: data });
  };


/** ====================== sendKeys ================== */



  type TonMachinesPageGetCollectionFromMachinesListEntry = Omit<CollectionActionType<{
 manufacturer?: TextGetRes
 workVolume?: TextGetRes
 length?: TextGetRes
 width?: TextGetRes
 weight?: TextGetRes
 power?: TextGetRes
 price?: TextGetRes
},{
 manufacturer?: TextIsDispRes
 workVolume?: TextIsDispRes
 length?: TextIsDispRes
 width?: TextIsDispRes
 weight?: TextIsDispRes
 power?: TextIsDispRes
 price?: TextIsDispRes
}>, '_action'>
  type TonMachinesPageGetCollectionFromMachinesList = {
 manufacturer?: TextGetRes
 workVolume?: TextGetRes
 length?: TextGetRes
 width?: TextGetRes
 weight?: TextGetRes
 power?: TextGetRes
 price?: TextGetRes
}
  const onMachinesPageGetCollectionFromMachinesList = async function({...descriptions}: TonMachinesPageGetCollectionFromMachinesListEntry = {}): Promise<TonMachinesPageGetCollectionFromMachinesList[]> {
    const result = await page.get({machinesList: {...descriptions, _action: null}});

    return result.machinesList
  }




export {
    onMachinesPageGetRandomFieldValueFromMachinesList,
  onMachinesPageGetSeveralRandomFieldValuesFromMachinesList,
  onMachinesPageGetRandomDataFromMachinesList,
  onMachinesPageClickHeaderSection,
  onMachinesPageClickFilterSection,
  onMachinesPageClickMachineRowList,
  onMachinesPageGetDataFromHeaderSection,
  onMachinesPageGetDataFromFilterSection,
  onMachinesPageGetDataFromMachineRowList,
  onMachinesPageGetVisibilityOfHeaderSection,
  onMachinesPageGetVisibilityOfFilterSection,
  onMachinesPageGetVisibilityOfMachineRowList,
  onMachinesPageSetValuesToFilterSection,
  onMachinesPageGetCollectionFromMachinesList,
  }
