import * as React from "react";
import { 
  shallow, 
} from "enzyme";

import TheList from "./TheList";

describe('TheList', () => {
  it('should match a snapshot', () => {
    expect(shallow(<TheList />)).toMatchSnapshot();
  })
})
