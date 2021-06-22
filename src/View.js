
import React, { useState } from 'react';
import './View.css';
import data from './data';
function View(props){
   
    return ( 
        <div className="view_container">
            <div className="details">
              <img src={props.img}></img>
              <div className="small_container">
              <h4>{props.name}</h4>
               <p>{props.age} Years</p>
              </div>
              <button type="submit" id="button" onClick={()=> props.deleteItem(data.id)}>Clear</button> 
            </div>    
        </div>
        
    );
}
export default View;
