import React from 'react';
import { Title } from '../components/MainComponents';
import '../css/main/bebetter.css'
import { BeBetterContent } from '../components/BeBetterComponents';
export default function BeBetter() {
  return (
    <div id='main_bebetter'>
      <div className='maincontent'>
      <Title
        title="Be Better"
        desc="배라가 사회와 함께 하는 방법, 가치 있는 같이"/>
      <BeBetterContent/>
      </div>
    </div>
);
}