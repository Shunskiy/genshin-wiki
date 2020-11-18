import React from 'react'
import {Link} from 'react-router-dom'
import Cards from '../json/heroes.json'
import { connect } from 'react-redux'



function HeroesMenu(props) {
    return (
        <main className="main-heroes">
            {
                Cards.map((postDetail, index) => {
                        if (props.eye === undefined || props.eye === "") {
                            return(
                                <Link to={postDetail.path} key={index}>
                                    <div id="main-card-heroes" key={postDetail.key}>
                                        <img src={postDetail.img} alt={postDetail.name}></img>
                                        <span>{postDetail.name}</span>
                                    </div>
                                </Link>
                                )
                        } else if (props.eye === postDetail.eye) {
                            return(
                                <Link to={postDetail.path} key={index}>
                                <div id="main-card-heroes" key={postDetail.key}>
                                    <img src={postDetail.img} alt={postDetail.name}></img>
                                    <span>{postDetail.name}</span>
                                </div>
                                </Link>
                            )
                        }                      
                })
            }
        </main>
    );
}
  
const mapStateToProps = state => {
    return {
        eye: state.eye
    }
}

  export default connect(mapStateToProps)(HeroesMenu);
  
  