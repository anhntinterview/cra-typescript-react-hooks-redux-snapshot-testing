import * as React from "react";
import { 
  shallow, 
} from "enzyme";

import Filter from "./Filter";

describe('Filter', () => {
  it('should match a snapshot', () => {
    expect(shallow(<Filter />)).toMatchSnapshot();
  })
})
