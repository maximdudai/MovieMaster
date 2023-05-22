import './App.css'

import { HomePage } from './pages/Home/HomePage';

function App() {

    return (
        <>
            <main className="MovieMaster w-full h-screen flex flex-col items-center text-gray-200">
                <div className="bg-image"></div>

                <HomePage />
            </main>        
        </>
    )
}

export default App
