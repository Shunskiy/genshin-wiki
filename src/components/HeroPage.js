import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Heroes from '../json/heroes.json'



function HeroPage(props) {

    return (
        <main className="main-content">
            {Heroes.map((postDetail, index) => {
                if (postDetail.key === props.match.params.name) {
                    return(
                        <Link to={postDetail.key} key={index}>
                            <div id="main-card">
                                <img src={postDetail.img} alt={postDetail.name}></img>
                                <span>{postDetail.name}</span>
                            </div>
                        </Link>
                    )
                }})}
        </main>
    );
  }
  
  export default HeroPage;
  
  