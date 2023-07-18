import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Root, { loader as rootLoader,  action as rootAction} from './routes/root';
import ErrorPage from './error-page';
import Contact, { loader as contactLoader, } from './routes/contact';
import EditContact, { action as editAction,} from './routes/edit';

// importing from react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

// First thing to do is create a Browser Router and configure our first route. This will enable client side routing for our web app.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='/'
      element={<Root />}
      errorElement={<ErrorPage/>}
      loader={rootLoader}
      action={rootAction}
    >
      <Route 
        path='contacts/:contactId'
        element={<Contact/>}        
        loader={contactLoader}
      />
      <Route 
        path='contacts/:contactId/edit'
        element={<EditContact />}
        loader={contactLoader}
        action={editAction}
      />
    </Route>));

// router function without using <Routes />
/*     const router = createBrowserRouter([
      {
        path:'/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children:[
          {
            path:'contacts/:contactId',
            element:<Contact />,
            loader: contactLoader,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
        ]
      }
    ])
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
