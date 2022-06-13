import React, {useState} from 'react'
import SingerCard from './SingerCard'

let singers = [
  {
    id: 1,
    name: 'Zucchero',
    genre: 'Pop/Blues',
    country: 'Italy',
    liked: false
  },
  {
    id: 2,
    name: 'Lucio Dalla',
    genre: 'Pop',
    country: 'Italy',
    liked: true
  },
  {
    id: 3,
    name: 'Madonna',
    genre: 'Pop',
    country: 'USA',
    liked: false
  },
  {
    id: 4,
    name: 'Coldplay',
    genre: 'Pop',
    country: 'UK',
    liked: false
  },
  {
    id: 5,
    name: 'Avicii',
    genre: 'Electronic',
    country: 'Sweden',
    liked: false
  },
  {
    id: 6,
    name: 'Black Eyed Peas',
    genre: 'Funk',
    country: 'USA',
    liked: false
  },
]


function SingerList() {
  const [list, setList] = useState(singers)
  
  const onSingerClick = (singer) => {
    console.log(singer)
    let newList = []
    
    list.forEach(sng => {
      if (sng.id === singer.id) sng.liked = !sng.liked
      newList.push(sng)
    })
    setList(newList)
  }
  
  const renderList = list.map(sng => <SingerCard key={sng.id} singer={sng} onSingerClick={onSingerClick}/>)

  return (
    <div className="singerList">
      {renderList}
    </div>
  )
}

export default SingerList
