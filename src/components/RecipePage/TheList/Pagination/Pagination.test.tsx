import * as React from "react";
import { 
  shallow, 
} from "enzyme";

import Pagination, {PaginationProps} from "./Pagination";

const props: PaginationProps ={ 
    currentPage: 1,
  totalPages: 5,
  handleCurrenPage: () => {
      return null
  }
}

describe('Pagination', () => {
  it('should match a snapshot', () => {
    expect(shallow(<Pagination {...props}/>)).toMatchSnapshot();
  })
})
