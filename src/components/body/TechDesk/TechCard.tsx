// @ts-nocheck
import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import './TechDesk.css'
import { useSpring, animated } from 'react-spring'

interface TechCardProp {
  techLogo: string,
  title: string,
  content: string,
  handleClick: (string, string) => void
}

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const TechCard:React.FunctionComponent = ({techLogo, title, content, handleClick}:TechCardProp) => {

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (  
    <Card className="flex-fill">
      <animated.div
        className="animated-card img-fluid"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        onClick={() => handleClick(title, content)}
      >
        <img src={techLogo} alt="Tech" className="img-fluid" width="300" />
      </animated.div>
    </Card>
  )
}
 
export default TechCard;