import * as React from "react";
import "./Pagination.style.scss";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleCurrenPage: (param: number) => void;
}

export function renderArray(totalPages: number) {
  const temp = [];
  let theIndex = 1;
  while (theIndex <= totalPages) {
    temp.push(theIndex);
    theIndex++;
  }
  return temp;
}

export function handleClick(
  handleCurrenPage: (param: number) => void,
  item: number
) {
  return () => {
    handleCurrenPage(item);
  };
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  handleCurrenPage,
  currentPage
}) => {
  const pagination = renderArray(totalPages);

  return (
    <ul className="pagination">
      {pagination.map((item, index) => (
        <li className={`item ${(index+1 === currentPage ? 'current' : '')}`} key={index} onClick={handleClick(handleCurrenPage, item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
