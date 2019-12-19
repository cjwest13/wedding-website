import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated as a } from 'react-spring'
import Home from './components/Home/Home';

function App() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set(state => !state)}>
      <a.div className="c back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
      
      </a.div>
      <a.div className="c front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        <Home />
      </a.div>
    </div>
  )
}

export default App;
