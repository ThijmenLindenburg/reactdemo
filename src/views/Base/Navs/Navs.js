import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Col, Row, Nav, NavItem, NavLink } from 'reactstrap';

class Navs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: [false, false],
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="12">
           <Card>
             <CardBody>
               FeedBack
             </CardBody>
           </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="12">
            <Card>
              <CardBody>
               Beoordeel deze applictie.
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navs;
