import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Bottom() {
  return (
    <div className='main1' id='main'>
      <h3 className='boot-head'>Ready to get started? Sign up now!</h3>
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
  )
}

export default Bottom