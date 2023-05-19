import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { WebTheme } from './context/Theme/AppTheme.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <WebTheme>
                <App />
            </WebTheme>
        </BrowserRouter>
    </React.StrictMode>,
)
