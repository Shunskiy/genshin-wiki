import React from "react";

function Blocks(props) {
  let divs = [];
  for (let i = 0; i < props.amount; i++) {
    divs.push(<div key={i}></div>);
  }

  return <div id={props.idName}>{divs}</div>;
}
export default Blocks;
