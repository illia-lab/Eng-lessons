import { expect } from 'chai';

class Base {
  selector: string;
  name: string;

  constructor(selector: string, name: string) {
    this.selector = selector;
    this.name = name;
  }
  logMyInfo() {
    console.log(`it is element level implementation constructor: ${this.constructor.name}, selector:${this.selector}, name:${this.name}`);
  }
}

class Element extends Base {
  constructor(selector: string, name: string) {
    super(selector, name);
  }
}

describe('Child Class', () => {
  it('dummy coding', () => {
    //constructor: Base, selector:some selector, name:my dummy nameit is element level implementation constructor: Base, selector:some selector, name:my dummy name
    const myBase = new Base('some selector', 'my dummy name');
    myBase.logMyInfo();
    //constructor: Element, selector:Element selector, name:element name
		//it is element level implementation constructor: Element, selector:div selector, name:div dummy name
    const myElement = new Element('div selector', 'div dummy name');
    myElement.logMyInfo();
  });
});
