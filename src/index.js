import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Classroom from './components/Classroom';
import LineLeader from './components/LineLeader';
import LineMonitor from './components/LineMonitor';
import ErrandRunner from './components/ErrandRunner';
import WorkMonitor from './components/WorkMonitor';
import TicketHelper from './components/TicketHelper';
import PaperPasser from './components/PaperPasser';
import Greeter from './components/Greeter';
import Lights from './components/Lights';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Classroom />,
  },
  {
    path: "/lineleader",
    element: <LineLeader />
  },
  {
    path: "/linemonitor",
    element: <LineMonitor />
  },
  {
    path: "/errandrunner",
    element: <ErrandRunner />
  },
  {
    path: "/workmonitor",
    element: <WorkMonitor />
  },
  {
    path: "/tickethelper",
    element: <TicketHelper />
  },
  {
    path: "/paperpasser",
    element: <PaperPasser />
  },
  {
    path: "/greeter",
    element: <Greeter />
  },
  {
    path: "/lights",
    element: <Lights />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
