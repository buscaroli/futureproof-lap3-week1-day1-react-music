import React from 'react'


function SingerCard({singer, onSingerClick}) {
  
  let isLiked = singer.liked ? 'Yes' : 'No'
  

  return (
    <div
    className="singerCard">
      <div className="singerWrapper">
        <div className="name">{singer.name}</div>
        <div className="genre">{singer.genre}</div>
        <div className="country">{singer.country}</div>
      </div> 
      <div className="likedWrapper">  
        <div className="likedTitle">Liked</div>
        <div 
        role = "comment" className="likedStatus">{isLiked}</div>
        <button
          onClick={() => onSingerClick(singer)}
          >Click</button>
      </div> 
    </div>
  )
}

export default SingerCard
