// import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline} from "mdbreact";

// class MinimalisticIntro extends Component {
//   state = {
//     collapsed: false
//   };

//   handleTogglerClick = () => {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   };

//   render() {
//     const navStyle = { marginTop: "4rem" };
//     const overlay = (
//       <div
//         id="sidenav-overlay"
//         style={{ backgroundColor: "transparent" }}
//         onClick={this.handleTogglerClick}
//       />
//     );
//     return (
//       <>
//         <Router>
//           <div>
//             <MDBNavbar
//               color="secondary-color"
//               style={navStyle}
//               dark
//               expand="md"
//               fixed="top"
//               scrolling
//               transparent
//             >
//               <MDBContainer>
//                 <MDBNavbarBrand>
//                   <strong className="white-text">MDB</strong>
//                 </MDBNavbarBrand>
//                 <MDBNavbarToggler onClick={this.handleTogglerClick} />
//                 <MDBCollapse isOpen={this.state.collapsed} navbar>
//                   <MDBNavbarNav left>
//                     <MDBNavItem active>
//                       <MDBNavLink to="#!">Home</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">Link</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#!">Profile</MDBNavLink>
//                     </MDBNavItem>
//                   </MDBNavbarNav>
//                   <MDBNavbarNav right>
//                     <MDBNavItem>
//                       <MDBFormInline waves>
//                         <div className="md-form my-0">
//                           <input
//                             className="form-control mr-sm-2"
//                             type="text"
//                             placeholder="Search"
//                             aria-label="Search"
//                           />
//                         </div>
//                       </MDBFormInline>
//                     </MDBNavItem>
//                   </MDBNavbarNav>
//                 </MDBCollapse>
//               </MDBContainer>
//             </MDBNavbar>
//             {this.state.collapsed && overlay}
//           </div>
//         </Router>
//         <MDBView src={`https://mdbootstrap.com/img/Photos/Others/gradient2.png`} >
//           <MDBMask className="rgba-purple-slight d-flex justify-content-center align-items-center">
//             <MDBContainer>
//               <MDBRow>
//                 <MDBCol md="12" className="mb-4 text-center">
//                   <h1 className="display-4 font-weight-bold mb-0 pt-md-5 pt-5" >Our New Course is Ready</h1>
//                   <h5 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5">It comes
//                      with a lot of new features, easy to follow videos and images. Check it out now!</h5>
//                   <MDBBtn rounded className="btn-purple"> Sign up!</MDBBtn>
//                   <MDBBtn outline color="purple" rounded > Learn more</MDBBtn>
//                 </MDBCol>
//               </MDBRow>
//             </MDBContainer>
//           </MDBMask>
//         </MDBView>
//       </>
//     );
//   }
// }

// export default MinimalisticIntro;

/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Badge, CardBody, InputGroup, Input, FormGroup, InputGroupAddon, InputGroupText } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import Pagination from "components/custom/Pagination.js";
import ProjectsTable from "components/custom/ProjectsTable.js";
import Contact from "components/custom/Contact.js";
import classnames from 'classnames';

class MinimalisticIntro extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
           
            <div className="shape shape-primary shape-style-1  alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
     
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/profilePic.png")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Projects</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Reviews</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Romaniuc Dragos{" "}
                      <span className="font-weight-light">, 21</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Iasi, Romania
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Development Engineer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science "Alexandru Ioan Cuza", Iasi
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                         About me text
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section pb-100">
            <Container>
              {/* <Row className="row-grid align-items-center">
              <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 ">My Projects</h4>
                      
                    </div>
                  </div>
                  
                </Col>
              </Row> */}
              
              {/* <Row>
                <Col>
                <Card className="card-lift--hover shadow mt-5">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                           Bla bla bla
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                  
                </Col>

                <Col>
                <Card className="card-lift--hover shadow mt-5">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Messenger
                          </h6>
                          <p className="description mt-3">
                           Bla bla bla
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>


                      <Col>
                <Card className="card-lift--hover shadow mt-5">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                           Bla bla bla
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>
              </Row> */}
             <Row>
                {/* <Pagination/> */}

                <ProjectsTable/>
             </Row>


             
            </Container>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div> */}
           
          </section>
            
          <section className="section section-lg section-shaped ">
          <div className="shape shape-primary shape-style-1  alpha-4">
              <span />
            
            </div>
            <Container className="pt-lg pb-100">
              
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          
          <Contact />

        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  }
}

export default MinimalisticIntro;
