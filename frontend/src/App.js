import React, { Component } from 'react'
import { APIListSection } from './components/APIListSection'
import { APIDetailSection } from './components/APIDetailSection'
import { APIResponseSection } from './components/APIResponseSection'
import './App.css'

function App() {
  return (
    <div id="app">
      <APIListSection />
      <div className="content">
        <div className="content-top">
          <APIDetailSection />
        </div>
        <div className="content-bottom">
          <APIResponseSection />
        </div>
      </div>
    </div>
  )
}

export default App
