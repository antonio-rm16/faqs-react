
import {FaChevronCircleUp} from 'react-icons/fa';
import {FaChevronCircleRight} from 'react-icons/fa';
import {useState} from 'react';

export default function Faq({id, state, faqActive,faqs}) { 
        
        return (<div className={state?'faqBoxSelected':'faqBox'} >
        <div className='headerFaq' onClick={() =>faqActive(id)}>
      <h3 className={state?'questionSelected':'question'} >
        {faqs[id].pregunta}
      </h3> 
     {state ? <FaChevronCircleUp className='chevUp'/>:
      <FaChevronCircleRight className={state?'chevRightSelected':'chevRight'}/>}
      </div>
      {state && <p className='answer'>
       {faqs[id].respuesta}
      </p>}
    </div>
       )
    
  }