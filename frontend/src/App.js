import React, { Component } from 'react'
import { APIListSection } from './components/APIListSection'
import { APIDetailSection } from './components/APIDetailSection'
import { APIResponseSection } from './components/APIResponseSection'
import './App.css'

function App() {
  return (
    <div id="app">
      <div className="api-list-section"><APIListSection /></div>
      <div className="api-detail-section"><APIDetailSection /></div>
      <div className="api-response-section"><APIResponseSection /></div>
    </div>
  )
}

export default App
