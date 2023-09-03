import { expect } from 'chai';

function addOneToEveryArrayItem(arr: number[]) {
  return arr.map(function(arrayItem) {
    return arrayItem + 1;
})
}
function removeOneToEveryArrayItem(arr: number[]) {
  return arr.map(function(arrayItem) {
    return arrayItem - 1;
})
}

function summOfTheArray(arr: number[]) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++){
summ = summ + arr[i]
  }
  return summ;
}
describe('some Unit tests', function () {
  it('[P] addOneToEveryArrayItem', function () {
    expect(addOneToEveryArrayItem([1,2])).to.deep.equal([2,3]);
  });
  it('[N] addOneToEveryArrayItem', function () {
    expect(addOneToEveryArrayItem([3,2])).to.deep.equal([2,3]);
  });
  it('[P] summOfTheArray', function () {
    expect(summOfTheArray([1,2])).to.deep.equal(3);
  });
  it('[N] summOfTheArray', function () {
    expect(summOfTheArray([2,2])).to.deep.equal(3);
  });
  it('[P] removeOneToEveryArrayItem', function () {
    expect(removeOneToEveryArrayItem([1,2])).to.deep.equal([0,1]);
  });
  it('[N] removeOneToEveryArrayItem', function () {
    expect(removeOneToEveryArrayItem([2,3])).to.deep.equal([2,3]);
  });
});
