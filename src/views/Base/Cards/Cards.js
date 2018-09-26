import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="12">
            <Card>
              <CardHeader>
                Belevingskwaliteit
              </CardHeader>
            </Card>
           </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6">
            <Card>
              <CardBody>
                Hoe veilig en hoe prettig voelt u zich in de buitenruimte? Kunt u zich eenvoudig verplaatsen naar uw bestemming en zijn er
                voldoende voorzieningen aanwezig? Vindt u de openbare ruimte attractief genoeg? Tezamen geven de antwoorden op dit soort
                vragen een beeld van hoe u de buitenruimte beleeft en waardeert.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6">
            <Card>
              <CardBody>
                Met deze applicatie meet uw gemeente aan de hand van een aantal vragen aan de dagelijkse gebruikers van die buitenruimte
                hoe de buitenruimte door u en uw mede-inwoners beleefd wordt. Met andere woorden, hoe wordt de ‘Belevingskwaliteit’ van
                de buitenruimte gewaardeerd?
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
