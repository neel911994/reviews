import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
  const[index, setIndex]=useState(0)
  const {id, name,job,image,text}=people[index]

  const swipeLeft = ()=>{
    if(index === 0){
      setIndex(people.length-1)
    }else{
      setIndex(index-1)
    }
    
  }
  const swipeRight =()=>{
    if(index === people.length-1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
    
  }
  const random = ()=>{
    let rand = Math.floor(Math.random() * people.length)
    if(rand === index){
      rand = index +1
    }
    if(rand === 0){
      setIndex(people.length-1)
    }else if(rand === people.length-1){
      setIndex(0)
    }else{
      setIndex(rand);
    }
   
    console.log(index)
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} className='person-img'></img>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span> 
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={swipeLeft} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={swipeRight} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button type='button' onClick={random} className='random-btn'>Surprise me</button>
    </article>
  )
};

export default Review;
