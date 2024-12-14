import React, { useState } from 'react';
import plus from "./img/plus (2).png"
import minus from "./img/minus-sign (2).png"


const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question text-black mb-4 animated  faq-text align"  onClick={toggleAnswer}>
        {question}
        <span className="arrow-icon">{isOpen ? <img  src={minus} alt="" /> : <img  src={plus} alt="" />}</span>
      </div>
      {isOpen && <div className="faq-answer faq-text mb-4 " id="dc">{answer}</div>}
      <hr className='line-color'/>
    </div>
  );
};

export default FaqItem;
