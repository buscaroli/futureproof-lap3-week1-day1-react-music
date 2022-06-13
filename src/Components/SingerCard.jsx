import React from 'react'


function SingerCard({singer, onSingerClick}) {
  
  let isLiked = singer.liked ? 'Yes' : 'No'
  

  return (
    <div
    onClick={() => onSingerClick(singer)}
    className="singerCard">
      <div className="singerWrapper">
        <div className="name">{singer.name}</div>
        <div className="genre">{singer.genre}</div>
        <div className="country">{singer.country}</div>
      </div> 
      <div className="likedWrapper">  
        <div className="likedTitle">Liked</div>
        <div className="likedStatus">{isLiked}</div>
      </div> 
    </div>
  )
}

export default SingerCard
