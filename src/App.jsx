import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import routes from './routes/index';
function App() {

  return (
   
<Suspense fallback={<div>Loading...</div>}>

<RouterProvider router={routes} />

</Suspense>

  )
}

export default App
