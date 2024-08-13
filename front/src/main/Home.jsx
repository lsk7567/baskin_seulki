import React from 'react';
import '../css/main/home.css'
import '../css/style.css'
import { HomeImages } from '../components/HomeComponents';

export default function Home() {
  return (
    <div id='main_home'>
      <div className='maincontent'>
        <HomeImages/>
      </div>
    </div>
);
}