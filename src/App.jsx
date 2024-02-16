import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Cols from './Cols';
import Banner from './Banner';
import Footban from './Footban';
import Bottom from './Bottom';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='con'>
          <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
          <Button variant="primary">Sign up</Button>{' '}
        </Container>
      </Navbar>
      <div className='main'>
        <h3 className='ban'>Generate more leads with a <br></br>professional landing page!</h3>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email Address"
          aria-label="Email Address"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          Submit
        </Button>
      </InputGroup>
      </div>
      <div className='col'>{Cols()}</div>
      <div className='banner'>{Banner()}</div>
      <div className='Footban'>{Footban()}</div>
      <div className='Bottom'>{Bottom()}</div>
      <div className='Footer'>{Footer()}</div>
      </div>
  );
}

export default App;