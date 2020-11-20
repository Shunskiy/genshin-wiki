import React, { useState } from "react";
import Heroes from "../json/heroes.json";
import Blocks from "./blocks/Blocks";

function HeroPage(props) {
  console.log(props)
  function findId(id) {
    return id.key === props.match.params.name;
  }
  const id = Heroes.find(findId).id;
  const hero = Heroes[id - 1];
  console.log(hero);
  return (
    <main className="main-hero-discription">
      <div className="main-hero-portfolio">
        <img src={hero.img} className="hero-foto"></img>
        <div className="hero-stats">
          <div id="hero-stats-text">
            <span>Кэрри потенциал:</span>
            <span>Саппорт потенциал:</span>
            <span>Реактор потенциал:</span>
          </div>
          <div id="hero-stats-block">
            <Blocks amount={hero.carry} idName="hero-stats-block-carry" />
            <Blocks amount={hero.support} idName="hero-stats-block-support" />
            <Blocks amount={hero.reactor} idName="hero-stats-block-catalyst" />
          </div>
        </div>
        <span className="hero-weapon">Оружие: {hero.weaponText}</span>
      </div>
      <div className="hero-discripsion">
        <span>{hero.discription}</span>
      </div>
    </main>
  );
}

export default HeroPage;
