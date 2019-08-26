import React from "react";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Paginations extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="Page navigation example">
          <Pagination
            className="pagination justify-content-center mt-4 "
            listClassName="justify-content-center"
          >
            <PaginationItem className="disabled">
              <PaginationLink
                href="#pablo"
                onClick={e => e.preventDefault()}
                tabIndex="-1"
              >
                <i className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                1
              </PaginationLink>
            </PaginationItem>
           
            <PaginationItem>
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                <i className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </nav>
      </>
    );
  }
}

export default Paginations;