import React from "react";
import { Link } from "react-router-dom";
import Cards from "../json/heroes.json";
import { connect } from "react-redux";

function HeroesMenu(props) {
  const { eye } = props;
  return (
    <main className="main-heroes">
      {Cards.map((postDetail, index) => {
        if (props.eye === undefined || eye === "") {
          return (
            <Link
              to={{ pathname: postDetail.path, id: postDetail.id }}
              key={index}
            >
              <div id="main-card-heroes" key={postDetail.key}>
                <img src={postDetail.img} alt={postDetail.name}></img>
                <span>{postDetail.name}</span>
              </div>
            </Link>
          );
        } else if (eye === postDetail.eye) {
          return (
            <Link
              to={{ pathname: postDetail.path, id: postDetail.id }}
              key={index}
            >
              <div id="main-card-heroes" key={postDetail.key}>
                <img src={postDetail.img} alt={postDetail.name}></img>
                <span>{postDetail.name}</span>
              </div>
            </Link>
          );
        }
      })}
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    eye: state.eye,
  };
};

export default connect(mapStateToProps)(HeroesMenu);
