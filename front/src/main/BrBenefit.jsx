import React from 'react';
import '../css/main/brbenefit.css'
import { Title } from '../components/MainComponents';
import { BenefitCarousel } from '../components/BrBenefitComponents';

export default function BrBenefit() {
  return (
    <div id='main_brbenefit'>
      <div className='maincontent'>
      <Title
        title="BR Benefit"
        desc="배라와 함께 다양한 혜택을 즐기세요"/>
        <div className='benefitcarousel'>
          <BenefitCarousel/>
        </div>
      </div>
    </div>
);
}