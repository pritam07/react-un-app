import { Suspense, use } from 'react';
import './App.css';
import { router } from './Routes';
import { RouterProvider } from 'react-router-dom';
import Page from './core/Page';
import { PopulationContext } from './contexts/PopulationContext';

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading</div>}>
        <Page />
     </Suspense>
    </>
  )
}

export default App
