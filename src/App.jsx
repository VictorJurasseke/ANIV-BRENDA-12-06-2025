import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/HomeMain'
import Quiz_component from './pages/QuizPage';

function App() {


  return (
     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Quiz_component/>}/>

    </Routes>
  )
}

export default App
