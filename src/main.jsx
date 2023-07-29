import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ResolutionProvider } from './context/resolution';
import App from './App';

import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <ResolutionProvider>
            <App />
        </ResolutionProvider>
    </StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <ResolutionContext.Provider>
//       <App />
//     </ResolutionContext.Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
