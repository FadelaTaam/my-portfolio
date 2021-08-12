import { Component, useCallback, useContext, useState } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


export default function Login() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const [, dispatch] = useContext(AppContext)


  const login= useCallback(async (e) => {
    e.preventDefault()
    const res = await fetch("/api/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    const result = res.JSON()
  if (result.message) {
    setErrorMessage(result.message)
  }
  if (result.token) {
dispatch({ type: 'setToken', payload: result.token})
dispatch({ type: 'setUser', payload: username})
history.push('/')
  }
}, [username, password, dispatch, history, setErrorMessage])

return (
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onChange={login} variant="outline-light" type="submit">
    Submit
  </Button>
</Form>
)
}