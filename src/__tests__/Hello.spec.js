import { expect, assert } from 'chai';
import React from "react";
import * as TestUtils from 'react-addons-test-utils';
import ReactDOM from "react-dom";
import {Hello} from '../Hello';

describe('test', () => {
  it('rendering', () => {
    const counterComponent: any = TestUtils.renderIntoDocument(
      <Hello content={"hello"} />
    );

    const counterDOM = ReactDOM.findDOMNode(counterComponent);
    assert.deepEqual(!!counterDOM, true);
  });
});