import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Gallery from './ImportAndExport/Gallery';
// import Parent from './PaasingProps/ParentComponent';
// import Profile from './PaasingProps/Profile';
// import PassingJSX from './PaasingProps/PassingJSX';
// import PeopleList from './RenderingLists/PeopleList';
// import {EventHandlers, Toolbar, PassingEventhandlersAsProps, EventPropagation} from './AddingInteractivity/EventHandlers';
import SculptureGallery from './AddingInteractivity/ComponentWithState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Gallery /> */}

    {/* <Parent /> */}
    {/* <Profile /> */}
    {/* <PassingJSX /> */}
    {/* <PeopleList /> */}
    {/* <EventHandlers /> */}
    {/* <Toolbar /> */}
    {/* <PassingEventhandlersAsProps /> */}
    <SculptureGallery />
    <SculptureGallery />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
