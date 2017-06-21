import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class Register extends Component {

  render() {
    return (
      <Segment >
        <Form >
          <Form.Input label='Name' type='text' />
          <Form.Input label='Email' type='email' />
          <Form.Input label='Password' type='password' />
          <Form.Input label='Password Confirmation' type='password' />
          <Button type='submit'>Register</Button>
        </Form>
      </Segment>
    );
  }
}

export default Register;
