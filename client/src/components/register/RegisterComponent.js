import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Grid, Segment, Button, Header, Image, Form, Message } from 'semantic-ui-react';


class RegisterComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const params = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    }

    let urlQueryParams = encodeURI(Object.keys(params).reduce((url, key) => {
      return url + `${key}=${params[key]}&`
    }, ''))

    this.props.fetchRegister(urlQueryParams)
  }

  handleChange(e, { name, value }) {
    this.setState({[name]: value})
  }

  render() {
    const loginStyle = {maxWidth: '35rem', margin: 'auto', marginTop: '5rem'}
    const { firstName, lastName, email, password, passwordConfirmation } = this.state
    const { authError, authErrorMessage, apiKey, loading } = this.props

    if (apiKey && !authError) {
      return <Redirect to='/account/todos' />
    }

    return (
      <Grid centered verticalAlign="middle" style={loginStyle}>
        <Grid.Column textAlign="center">
          <Header as='h2' color='teal'>
            <Image src='http://semantic-ui.com/examples/assets/images/logo.png' />
            Sign up for an account
          </Header>
          <Form size="large"
            loading={loading}
            error={authError}
            onSubmit={this.handleSubmit}
          >
            <Segment stacked>
              <Message
                error
                content={authErrorMessage}
              />
              <Form.Group widths='equal'>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  required
                  name='firstName'
                  value={firstName}
                  placeholder='First Name'
                  onChange={this.handleChange}
                />
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  required
                  placeholder='Last Name'
                  name='lastName'
                  value={lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Input

                icon='envelope'
                iconPosition='left'
                name='email'
                type='email'
                value={email}
                placeholder='E-mail address'
                onChange={this.handleChange}
              />
              <Form.Input required
                icon='lock' iconPosition='left'
                placeholder='Password'
                type="password"
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              <Form.Input required
                icon='lock' iconPosition='left'
                placeholder='Confirm Password'
                type="password"
                name='passwordConfirmation'
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
              <Button fluid color="teal" size="large">REGISTER</Button>
            </Segment>
            <Message>
              Already have an account? <Link to='/login'>Log-in</Link>
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RegisterComponent;
