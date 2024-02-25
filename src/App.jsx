import { Landing } from "./Pages/Landing/Landing"
import { Navigation } from './Components/Navigation/Navigation';

import { Toaster } from 'sonner';

import './App.css'

export const App = () => {
  return (
    <>
    <Navigation />

    <main className="flex flex-col items-center">
      <Landing />
      <Toaster />
    </main>
    </>

  )
}