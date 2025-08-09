import React from 'react'
import { useParams } from 'react-router-dom'
import {songData } from './DataSongs'

const SongDetails = () => {
  const {id}=useParams()
  return (
    <div>
      <h1>Hello Wolrd!</h1>
      <div>
        {songData[id].title}
      </div>
      
    </div>
  )
}

export default SongDetails
