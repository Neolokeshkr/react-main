// Adding a Router
// First thing to do is create a Browser Router and configure our first route. This will enable client side routing for our web app.

  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  // Creating Browser Route
  const router = createBrowserRouter([
    {
      path:'/',
      element:<div>Hello World</div>
    }
  ])

// Wrapping the App component in Router Provider

// Vite 
    //  npm create vite@latest my-vue-app -- --template vue
    //  npm create vite@latest my-react-app -- --template react