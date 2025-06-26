import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import routes from './routes/index';
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {

  return (
   
<Suspense fallback={<PropagateLoader id="spinner" color="#319795" size={30} />}>

<RouterProvider router={routes} />

</Suspense>

  )
}

export default App
