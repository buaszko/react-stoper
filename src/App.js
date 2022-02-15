import Button from './Components/Button/Button';
import Container from './Components/Container/Container';
import Time from "./Components/Time/Time";
import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  
  return (
    <Container>
      <Time time={time} />
      <Button action={() => setTimerOn(true)}>START</Button>
      <Button action={() => setTimerOn(false)}>STOP</Button>
      <Button action={() => setTimerOn(setTime(0))}>RESET</Button>
    </Container>
  );
};

export default App;