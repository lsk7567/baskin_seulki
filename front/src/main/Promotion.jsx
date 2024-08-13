import React from 'react';
import '../css/style.css'
import '../css/main/main_commons.css'
import '../css/main/promotion.css'
import { Title } from '../components/MainComponents';
import { PromotionList } from '../components/Promotion_Components';

export default function Promotion() {
  return (
    <div id='main_promotion'>
      <div className='maincontent'>
      <Title
        title="Promotion"
        desc="배라의 다양한 혜택과 이벤트를 만나보세요"
        />
        <PromotionList/>
        </div>
    </div>
);
}