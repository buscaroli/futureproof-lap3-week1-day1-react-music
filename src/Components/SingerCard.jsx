import React from 'react'


function SingerCard({name, genre, country}) {
  return (
    <div className="singerCard">
      <div className="singerWrapper">
        <div className="name">{name}</div>
        <div className="genre">{genre}</div>
        <div className="country">{country}</div>
      </div>  
    </div>
  )
}

export default SingerCard
