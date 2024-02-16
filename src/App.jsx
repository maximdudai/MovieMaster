import { Landing } from "./Pages/Landing/Landing"
import { Navigation } from './Components/Navigation/Navigation';

import './App.css'

export const App = () => {
  return (
    <>
    <Navigation />

    <main className="flex flex-col items-center">
      <Landing />
    </main>
    </>

  )
}