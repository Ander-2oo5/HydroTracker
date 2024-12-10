import React from 'react';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

interface ProgressBarProps {
  consumed: number;
  goal: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ consumed, goal }) => {
  const progress = (consumed / goal) * 100;

  return (
    <div className="my-3">
      <h2>Progreso</h2>
      <BootstrapProgressBar now={progress} label={`${progress.toFixed(2)}%`} />
      <p>{consumed} ml / {goal} ml</p>
    </div>
  );
};

export default ProgressBar;