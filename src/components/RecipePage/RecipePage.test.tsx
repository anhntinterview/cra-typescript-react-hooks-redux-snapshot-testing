import * as React from "react";
import { 
  shallow, 
} from "enzyme";

import RecipePage from "./RecipePage";

describe('RecipePage', () => {
  it('should match a snapshot', () => {
    expect(shallow(<RecipePage />)).toMatchSnapshot();
  })
})
