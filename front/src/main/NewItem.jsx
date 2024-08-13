import React from 'react';
import "../css/main/newitems.css"
import { Title } from '../components/MainComponents';
import { NewItemsList} from '../components/NewItmesComponents';

export default function NewItem() {
  return (
    <div id='main_newitems'>
      <div className='maincontent'>
        <Title
          title="New Item"
          desc="새로 나온 배라의 신제품을 소개합니다"/>
          <div className='newitem_carousel'>
            <NewItemsList/>
          </div>
      </div>
    </div>
);
}