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
    return `${this.constructor.name} ${this.selector} ${this.name}`;
  }
  click() {
    return `${this.constructor.name} ${this.selector} ${this.name}`;
  }
}

class Page extends Base {
  fieldName: Element;
  fieldPassword: Element;
  fieldEmail: Element;
  constructor(selector: string, name: string) {
    super(selector, name);
    this.fieldEmail = new Element('#email', 'User email');
    this.fieldPassword = new Element('#password', 'User password');
    this.fieldName = new Element('#name', 'User name');
  }
  get(requiredFieldsData: { fieldEmail?: null; fieldPassword?: null; fieldName?: null }): {
    fieldName?: string;
    fieldPassword?: string;
    fieldEmail?: string;
  } {
    const keys = Object.keys(requiredFieldsData);

    const data = {};

    for (const key of keys) {
      data[key] = this[key].get();
    }
    return data;
  }
}

describe('Class propertions interactions', () => {
  it('get class properties info based on required fields', () => {
    const pageFirst = new Page('#main_page', 'Main page');
    const result = pageFirst.get({ fieldName: null });
    expect(result).to.deep.equal({ fieldName: "Element #name User name" });
    console.log(result);
  });

  it('assign obj props via variables', () => {
    const obj: { [key: string]: any } = {};
    const var1 = 'myField';
    obj[var1] = 1;
    obj.fn = 12;
    console.log(obj);
  });

  it('getting obj prop names and log them one by one', () => {
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
      third: {
        logMe: () => {
          console.log('!!!!!!!!!!!!!!');
        },
      },
    };
    const propName1 = 'first';
    const propName2 = 'second';
    const propName3 = 'third';
    // console.log(obj[propName1]);
    // console.log(obj[propName2]);
    obj[propName3].logMe();
  });
});
