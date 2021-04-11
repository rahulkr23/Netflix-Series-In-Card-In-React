import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';  
import './index.css';                                                                                                                 


ReactDOM.render(
  <>
  <h1 className= "heading_style">TOP NETFLIX WEB SERIES 2021 </h1>
    <Card

      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Original Series"
      sname='DARK'
      link="https://www.netflix.com/in/title/80990668?sources=35"
    />

    <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Original Series"
      sname='extra curricular'
      link="https://www.netflix.com/in/title/80990668?sources=35"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      sname='Stranger Things'
      title="A Netflix Original Series"

      link="https://www.netflix.com/in/title/80990668?source=35"
    />
  </>,
  document.getElementById('root')


);
