import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const value = "Привет из JS хахах";
const name = "Василий";
const surname = "Кузнецов";
let now = new Date();
let date = now.getFullYear() + 25;
const root = ReactDOM.createRoot(document.getElementById('root'));
const value1 = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4", "Элемент 5", "Элемент 6"];
root.render(
  <div>
    <h1>{value}</h1>
    <h1>{name} {surname}</h1>
    <ul>
      {
        value1.map(val => (<li>{val}</li>))
        //Array.from({ length: 5 }, (value, index) => <li>{`Элемент ${index}`}</li>)
      }
    </ul>
    <p>&copy; Авторские права мои {date}</p>
  </div>

);
