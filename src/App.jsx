import { useContext } from 'react';
import './App.css'

import { AppTheme } from './context/Theme/AppTheme';

function App() {

    const { defaultTheme, handleAppTheme } = useContext(AppTheme);



    const handleTheme = () => {
        handleAppTheme(defaultTheme);
    }

    return (
        <>
            <div className="MovieMaster w-full h-screen text-gray-200 dark:bg-dark">
            
                <button
                    className='absolute bottom-0 left-0 p-2 rounded text-md bg-gray-600 m-3'
                    onClick={handleTheme}
                >
                    change
                </button>
            </div>        
        </>
    )
}

export default App
