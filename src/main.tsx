import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import todos from './State.json'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App todo={todos}/>
  </React.StrictMode>,
)
