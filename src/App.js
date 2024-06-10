import React, { useState } from 'react';
import './App.css';

function App() {
  const [circleRadius, setCircleRadius] = useState('');
  const [squareSide, setSquareSide] = useState('');
  const [triangleBase, setTriangleBase] = useState('');
  const [triangleHeight, setTriangleHeight] = useState('');

  const calculateCircleArea = () => {
    const radius = parseFloat(circleRadius);
    return Math.PI * radius * radius;
  };

  const calculateSquareArea = () => {
    const side = parseFloat(squareSide);
    return side * side;
  };

  const calculateTriangleArea = () => {
    const base = parseFloat(triangleBase);
    const height = parseFloat(triangleHeight);
    return 0.5 * base * height;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PENGHITUNG LUAS BANGUN DATAR</h1>
      </header>
      <section className="App-form">
        <h2>LINGKARAN</h2>
        <label>
          JARI - JARI:
          <input 
            type="number" 
            value={circleRadius} 
            onChange={(e) => setCircleRadius(e.target.value)} 
          />
        </label>
        <p>LUAS: {circleRadius ? calculateCircleArea() : '-'}</p>
      </section>
      <section className="App-form">
        <h2>PERSEGI</h2>
        <label>
          PANJANG SISI:
          <input 
            type="number" 
            value={squareSide} 
            onChange={(e) => setSquareSide(e.target.value)} 
          />
        </label>
        <p>LUAS: {squareSide ? calculateSquareArea() : '-'}</p>
      </section>
      <section className="App-form">
        <h2>SEGITIGA</h2>
        <label>
          ALAS:
          <input 
            type="number" 
            value={triangleBase} 
            onChange={(e) => setTriangleBase(e.target.value)} 
          />
        </label>
        <label>
          TINGGI:
          <input 
            type="number" 
            value={triangleHeight} 
            onChange={(e) => setTriangleHeight(e.target.value)} 
          />
        </label>
        <p>LUAS: {triangleBase && triangleHeight ? calculateTriangleArea() : '-'}</p>
      </section>
    </div>
  );
}

export default App;
