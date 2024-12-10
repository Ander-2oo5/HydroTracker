import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';

interface DashboardProps {
  onLogout: () => void;
}

interface User {
  name: string;
  waterConsumed: number;
  dailyGoal: number;
}

const usersData: User[] = [
  { name: 'Usuario1', waterConsumed: 1500, dailyGoal: 2000 },
  { name: 'Usuario2', waterConsumed: 1800, dailyGoal: 2000 },
  { name: 'Usuario3', waterConsumed: 2000, dailyGoal: 2000 },
];

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(usersData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = usersData.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#e0f7fa' }}>
      <h1 className="text-center mb-4" style={{ color: '#00796b' }}>Dashboard del Usuario</h1>
      <Button variant="danger" onClick={onLogout} className="mb-4">
        <FaSignOutAlt /> Cerrar Sesión
      </Button>
      <Row className="w-100 mb-4">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="formSearch">
              <Form.Label>Buscar por Usuario</Form.Label>
              <Form.Control
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ingrese el nombre del usuario"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="w-100">
        <Col xs={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Consumo de Agua (ml)</th>
                <th>Meta Diaria (ml)</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.waterConsumed}</td>
                  <td>{user.dailyGoal}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;