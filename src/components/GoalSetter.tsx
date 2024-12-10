import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaBullseye } from 'react-icons/fa';

interface GoalSetterProps {
  setGoal: (goal: number) => void;
}

const GoalSetter: React.FC<GoalSetterProps> = ({ setGoal }) => {
  const [goal, setGoalInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGoal(Number(goal));
    setGoalInput('');
  };

  return (
    <Form onSubmit={handleSubmit} className="my-3">
      <Form.Group controlId="formGoal">
        <Form.Label>Establecer meta diaria (ml)</Form.Label>
        <Form.Control
          type="number"
          value={goal}
          onChange={(e) => setGoalInput(e.target.value)}
          placeholder="Establecer meta diaria (ml)"
        />
      </Form.Group>
      <Button variant="success" type="submit" className="mt-2">
        <FaBullseye /> Establecer Meta
      </Button>
    </Form>
  );
};

export default GoalSetter;