import React from 'react'
import 'animate.css';

type Props = {
  image: string,
  name: string
}
export const HeroComponent = ({image, name}: Props): JSX.Element => {
  return (
    <div className="heroes__hero--card animate__animated animate__fadeIn">
        <div className="hero__image">
              <img className="image__hero" src={image} alt={name}></img>
        </div>
        <p className="hero__name">{name}</p>
    </div>
  );
}
