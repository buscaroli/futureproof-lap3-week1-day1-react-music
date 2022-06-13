import React, {useState} from 'react'
import SingerCard from './SingerCard'

const singers = [
  {
    name: 'Zucchero',
    genre: 'Pop/Blues',
    country: 'Italy'
  },
  {
    name: 'Lozenzo Jovanotti',
    genre: 'Pop',
    country: 'Italy'
  },
  {
    name: 'Madonna',
    genre: 'Pop',
    country: 'USA'
  },
  {
    name: 'Coldplay',
    genre: 'Pop',
    country: 'UK'
  },
  {
    name: 'Avicii',
    genre: 'Electronic',
    country: 'Sweden'
  },
  {
    name: 'Black Eyed Peas',
    genre: 'Funky',
    country: 'USA'
  },
]

const renderList = singers.map(sng => <SingerCard name={sng.name} genre={sng.genre} country={sng.country} />)
  


function SingerList() {

  const [list, setList] = useState(singers)

  return (
    <div className="singerList">
      {renderList}
    </div>
  )
}

export default SingerList
