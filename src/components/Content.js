import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../json/content.json";

function Content() {
  return (
    <main className="main-content">
      {Cards.map((postDetail, index) => {
        return (
          <Link to={postDetail.key} key={index}>
            <div id="main-card">
              <img src={postDetail.img} alt={postDetail.name}></img>
              <span>{postDetail.name}</span>
            </div>
          </Link>
        );
      })}
    </main>
  );
}

export default Content;
