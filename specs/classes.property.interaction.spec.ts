import { expect } from 'chai';

class Base {
  selector: string;
  name: string;

  constructor(selector: string, name: string) {
    this.selector = selector;
    this.name = name;
  }
  logMyInfo() {
    console.log(
      `it is element level implementation constructor: ${this.constructor.name}, selector:${this.selector}, name:${this.name}`,
    );
  }
}

class Element extends Base {
  constructor(selector: string, name: string) {
    super(selector, name);
  }
  logMyInfo() {
    console.log(`${this.constructor.name} ${this.selector} ${this.name}`);
  }
  get() {
return `${this.constructor.name} ${this.selector} ${this.name}`
  }
}

class Page extends Base {
  fieldName: Element;
  fieldPassword: Element;
  fieldEmail: Element;
  constructor(selector: string, name: string) {
    super(selector, name);
    this.fieldEmail = new Element('#email','User email' )
    this.fieldPassword = new Element('#password','User password' )
    this.fieldName = new Element('#name','User name' )
  }
}

describe('Class propertions interactions', () => {
  it.only('obj properties get prop value', () => {
    const obj = {
      first: 1,
      second: 'some str',
      third: [1, 2, 3],
    };
    const objPropNames = Object.keys(obj); //[ 'first', 'second', 'third' ]
    for (const key of objPropNames) {
      console.log(key);
    }
    console.log(objPropNames);
  });

  it('obj properties get prop value', () => {
    const obj = {
      first: 1,
      second: 'some str',
    };
    const propName1 = 'first';
    const propName2 = 'second';
    console.log(obj[propName1]);
    console.log(obj[propName2]);
  });
});
