import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import FullName from './Component/Profile/FullName';
import Add from './Component/Profile/Address';
import Pht from './Component/Profile/ProfilePhoto';

function App() {
  return (
  <div className="App">
    <Container>
        <Row>
          <Col sm={6}> <FullName/> <Add /> </Col>
          <Col sm={6}> <Pht /> </Col>
       </Row>
    </Container>
  </div>
  );
}

export default App;
