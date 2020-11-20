import React, { useState } from "react";
import Eyes from "../json/eye.json";
import { connect } from "react-redux";

function HeroCategories(props) {
  const [active, isActive] = useState(null);
  return (
    <div className="categories">
      {Eyes.map((postDetail, index) => {
        return (
          <img
            src={postDetail.eye}
            className={active === index ? "eye-active" : "eye"}
            key={postDetail.id}
            onClick={() => {
              if (postDetail.name === props.eye) {
                props.changeEye("");
                isActive(null);
              } else {
                props.changeEye(postDetail.name);
                isActive(index);
              }
            }}
          ></img>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    eye: state.eye,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeEye: (filter) => dispatch({ type: "CHANGE_EYE", eye: filter }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroCategories);
