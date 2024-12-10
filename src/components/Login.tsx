import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';

interface LoginProps {
  onLogin: (status: boolean, isAdmin: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    if (username === 'Admin' && password === 'admin') {
      onLogin(true, true);
    } else if (username === 'Usuario' && password === '1234') {
      onLogin(true, false);
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#e0f7fa' }}>
      <Row className="w-100">
        <Col xs={12} md={6} lg={4}>
          <h1 className="text-center mb-4" style={{ color: '#00796b' }}>Iniciar Sesión</h1>
          <p className="text-center mb-4">Bienvenido a HydroTracker, por favor ingrese sus credenciales</p>
          <Form onSubmit={handleSubmit} className="my-3">
            <Form.Group controlId="formUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingrese su usuario"
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 w-100" style={{ backgroundColor: '#00796b', borderColor: '#00796b' }}>
              <FaSignInAlt /> Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;