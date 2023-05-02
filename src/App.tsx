import { Suspense } from 'react';
import './App.css';
import Page from './core/Page';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <>
    <ErrorBoundary fallback={<div>There is Some Error Happen</div>}>
      <Suspense fallback={<div>Loading</div>}>
          <Page />
      </Suspense>
     </ErrorBoundary>
    </>
  )
}

export default App
