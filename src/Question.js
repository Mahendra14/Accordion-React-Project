import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  return <article class="question">
    <header>
      <h4 class="title">{title}</h4>
      <button class="btn">btn</button>
    </header>
    <p class="info">{info}</p>
  </article>;
};

export default Question;
