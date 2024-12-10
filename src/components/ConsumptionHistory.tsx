import React from 'react';
import { Table } from 'react-bootstrap';

interface ConsumptionEntry {
  date: string;
  amount: number;
}

interface ConsumptionHistoryProps {
  history: ConsumptionEntry[];
}

const ConsumptionHistory: React.FC<ConsumptionHistoryProps> = ({ history }) => {
  return (
    <div className="my-3">
      <h2>Historial de Consumo</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cantidad (ml)</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ConsumptionHistory;