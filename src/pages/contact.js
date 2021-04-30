import * as React from "react"
import Layout from "../components/layout"
import {Form,Container,Row,Col,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
const contact=()=>(
  <Layout >
  <div style={{background:"#FFFFFF"}}>
  <Container>
  <Form>
  <Row>
  <Col md={6}>
  <Form.Group controlId="formBasicFirstname">
  <Form.Label>First Name </Form.Label>
  <Form.Control required type="text"/>
  </Form.Group>
  </Col>
  <Col md={6}>
  <Form.Group controlId="formBasicLastname" >
  <Form.Label>Last Name </Form.Label>
  <Form.Control required type="text"/>
  </Form.Group>
  </Col>
  </Row>
  <Form.Group controlId="formBasicEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control required type="email"/>
  </Form.Group>
  <Form.Group controlId="formBasicPhone">
  <Form.Label>Phone(optional)</Form.Label>
  <Form.Control type="text"/>
  </Form.Group>
  <Form.Group controlId="formBasicHelp">
  <Form.Label>How can we help you?</Form.Label>
  <Form.Control required as="textarea"
  rows={3}
  placeholder="How can we help?"/>
  </Form.Group>
  <Button type="submit">Submit</Button>
  </Form>
  </Container>
  </div>
  </Layout>
)
export default contact
