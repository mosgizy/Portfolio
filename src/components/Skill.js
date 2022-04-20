import React from 'react'

const Skill = ({skill}) => {
  return (
    <>
      <li><img loading='lazy' src={skill[1]} alt={skill[0]} /></li>
    </>
  )
}

export default Skill