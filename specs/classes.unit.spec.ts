import { expect } from 'chai';

class NumberOperation {
  myNumbers: number[];
  constructor(arr: number[]) {
    this.myNumbers = arr;
  }
  addOneToEveryMyNumbers() {
    return this.myNumbers.map((arrayItem) => {
      return arrayItem + 1;
    });
  }
  findLowestNumberInMyNUmbers() {
    let lowestNumber;
    for (let i = 0; i < this.myNumbers.length; i++) {
      if (typeof lowestNumber !== 'number') {
        lowestNumber = this.myNumbers[i];
			} else if (lowestNumber > this.myNumbers[i]) {
				lowestNumber = this.myNumbers[i];
			}
		}
		return lowestNumber
  }
}

describe('Classes', () => {
  it('my first unit class', () => {
    const myNumberOperation = new NumberOperation([1, 2, 3, 4]);
    expect(myNumberOperation.addOneToEveryMyNumbers()).to.deep.equal([2, 3, 4, 5]);
  });
});
