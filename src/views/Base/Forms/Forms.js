import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
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
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Algemene gegevens</strong>
                <br />
                Vul uw gegevens in. Deze gegevens gebruikt de gemeente uitsluitend voor de meting van de belevingskwaliteit.
                Uw gegevens worden niet aan derden verstrekt.
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="email" id="email-input" name="email-input" placeholder="iets@gmail.com" autoComplete="email" />
                    <FormText className="help-block">voeg hierboven je email in ^</FormText>
                  </Col>
                </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Geslacht</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please Select</option>
                        <option value="1">---</option>
                        <option value="2">Man</option>
                        <option value="3">Vrouw</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Leeftijd</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">---</option>
                        <option value="2">0 t/m 12</option>
                        <option value="3">12 t/m 18</option>
                        <option value="4">18 t/m 30</option>
                        <option value="5">30 t/m 40</option>
                        <option value="6">40 t/m 50</option>
                        <option value="7">50 t/m 65</option>
                        <option value="8">65+</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Postcode</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Postcode" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Straat</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Straatnaam" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Opslaan</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Verwijderen</Button>
              </CardFooter>
            </Card>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
