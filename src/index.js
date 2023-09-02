
import ReactDom from 'react-dom';
import React from "react";
import App from "./App";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Components/Contact';


ReactDom.render(

<BrowserRouter> <App /></BrowserRouter> 

,document.getElementById("root"));

