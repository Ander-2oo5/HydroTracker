import React, { useState, useEffect } from 'react';
import WaterInput from './WaterInput';
import GoalSetter from './GoalSetter';
import ProgressBar from './ProgressBar';
import Weather from './Weather';
import ConsumptionHistory from './ConsumptionHistory';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';

interface WaterTrackerProps {
  onLogout: () => void;
}

interface ConsumptionEntry {
  date: string;
  amount: number;
}

const WaterTracker: React.FC<WaterTrackerProps> = ({ onLogout }) => {
  const [waterConsumed, setWaterConsumed] = useState<number>(0);
  const [dailyGoal, setDailyGoal] = useState<number>(2000); // Default goal in ml
  const [goalReached, setGoalReached] = useState<boolean>(false);
  const [consumptionHistory, setConsumptionHistory] = useState<ConsumptionEntry[]>([]);

  const handleWaterInput = (amount: number) => {
    const newTotal = waterConsumed + amount;
    setWaterConsumed(newTotal);
    setConsumptionHistory([...consumptionHistory, { date: new Date().toLocaleString(), amount }]);
    if (newTotal >= dailyGoal) {
      setGoalReached(true);
    }
  };

  const handleGoalSetting = (goal: number) => {
    setDailyGoal(goal);
    setGoalReached(false);
  };

  useEffect(() => {
    if (waterConsumed >= dailyGoal) {
      setGoalReached(true);
    }
  }, [waterConsumed, dailyGoal]);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#e0f7fa' }}>
      <h1 className="text-center mb-4" style={{ color: '#00796b' }}>HydroTracker</h1>
      <Button variant="danger" onClick={onLogout} className="mb-4">
        <FaSignOutAlt /> Cerrar Sesión
      </Button>
      {goalReached && (
        <Alert variant="success" className="w-100 text-center">
          ¡Has alcanzado tu meta diaria de hidratación!
        </Alert>
      )}
      <Row className="w-100 mb-3">
        <Col xs={12} md={8} lg={6}>
          <GoalSetter setGoal={handleGoalSetting} />
        </Col>
      </Row>
      <Row className="w-100 mb-3">
        <Col xs={12} md={8} lg={6}>
          <WaterInput addWater={handleWaterInput} />
        </Col>
      </Row>
      <Row className="w-100 mb-3">
        <Col xs={12}>
          <ConsumptionHistory history={consumptionHistory} />
        </Col>
      </Row>
      <Row className="w-100 mb-3">
        <Col xs={12} md={8} lg={6}>
          <ProgressBar consumed={waterConsumed} goal={dailyGoal} />
        </Col>
      </Row>
      <Row className="w-100">
        <Col xs={12} md={8} lg={6}>
          <Weather />
        </Col>
      </Row>
    </Container>
  );
};

export default WaterTracker;