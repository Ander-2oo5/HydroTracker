import React, { useState } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { FaTint } from 'react-icons/fa';

interface WaterInputProps {
  addWater: (amount: number) => void;
}

const WaterInput: React.FC<WaterInputProps> = ({ addWater }) => {
  const [amount, setAmount] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWater(Number(amount));
    setAmount('');
  };

  return (
    <div className="my-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formWaterAmount">
          <Form.Label>Ingrese la cantidad de agua (ml)</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ingrese la cantidad de agua (ml)"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          <FaTint /> Agregar Agua
        </Button>
      </Form>
      <ButtonGroup className="mt-3">
        <Button variant="info" onClick={() => addWater(250)}>
          <FaTint /> 250 ml
        </Button>
        <Button variant="info" onClick={() => addWater(500)}>
          <FaTint /> 500 ml
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default WaterInput;