import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import bg from "../assets/images/bg.webp";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });

    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="d-flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg min-w-[300px] max-w-[350px] w-full p-3">
        <Row className="mb-6">
          <Col>
            <h2 className="text-2xl text-center text-gray-800">Login</h2>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="text-sm font-medium text-gray-600">Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-sm font-medium text-gray-600">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
              required
            />
          </Form.Group>

          <Form.Group className="mb-6 d-flex items-center">
            <Form.Check
              type="checkbox"
              id="rememberMe"
              label="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="text-sm text-gray-600"
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-full py-2 mb-4">Login</Button>

          <div className="mt-6 text-center">
            <a href="/forgot-password" className="block text-sm text-blue-500 hover:underline mb-2">Forgot Password?</a>
            <a href="/register" className="block text-sm text-blue-500 hover:underline">Don't have an account? Register</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
