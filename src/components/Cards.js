import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img_src_value1 from './images/fire-solid.svg';
import img_src_value2 from './images/fan-solid.svg';
import img_src_value3 from './images/snowflake-solid.svg';

function Cards() {
  var card1_title = 'Fast and Friendly Service!'
  var card2_title = '24 Hour Emergency Service'
  var card3_title = 'Areas of Service'

  var card1_text = `We have a 24×7 support option just for you and our HVAC technicians are experienced and ready to go. On top of making your heating and cooling work to a high standard, they are highly knowledgeable in all things HVAC repair in the area and would love to share their knowledge with you. Our HVAC contractors are more than happy to answer any questions you have. If you’re ready to get started with our HVAC service contact us today!`
  var card2_text = `It seems emergencies happen when you least expect it. This rings true for heating and cooling, too. It can be dangerous to be left without heat on cold nights or no air conditioning in the dead of summer. That’s why we offer 24-hour emergency service to those who need the help now, not later. Emergency HVAC repair service is what we do in such cases. We love heating and air conditioning and we make it a point for you to come first.`
  var card3_text = `Baylor District \n The Cedars \n Civic Center District \n Dallas Arts District \n Dallas Farmers Market \n Deep Ellum \n Design District \n Main Street District \n Reunion District \n Riverfront District \n South Side \n Thanksgiving Commercial Center \n Uptown \n Victory Park \n West End Historic District`

  var card_path = '/'

  return (
    <div className='cards'>
      <h1>Check out our awesome services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img_src_value1}
              title={card1_title}
              text={card1_text}
              path={card_path}
            />
            <CardItem
              src={img_src_value2}
              title={card2_title}
              text={card2_text}
              path={card_path}
            />
            <CardItem
              src={img_src_value3}
              title={card3_title}
              text={card3_text}
              path={card_path}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;