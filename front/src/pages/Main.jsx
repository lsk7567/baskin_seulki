import React from 'react';
import '../css/style.css'
import '../css/main/main_commons.css'
import Home from '../main/Home.jsx'
import NewItem from '../main/NewItem.jsx'
import Promotion from '../main/Promotion.jsx'
import BeBetter from '../main/BeBetter.jsx'
import BrBenefit from '../main/BrBenefit.jsx'

export default function main() {
  return (
    <div id='main'>
      <Home/>
      <Promotion/>
      <NewItem/>
      <BeBetter/>
      <BrBenefit/>
    </div>
);
}