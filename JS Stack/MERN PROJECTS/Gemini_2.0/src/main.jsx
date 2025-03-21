import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import State from './context/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <State>
    <App />
  </State>
)
