import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import giphy from './services/giphy'
import GifList from './components/GifList'
import GifSearch from './components/GifSearch'
import GifDetail from './components/GifDetail'
import './App.css'


const Layout = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LayoutContent = styled.div`
  max-width: 1200px;
`

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

function App() {

  const [selectedGif, setSelectedGif] = useState(null)
  const [keyword, setKeyword] = useState('')
  const [gifs, setGifs] = useState({
    data: [],
    pagination: {}
  })
  
  const fetchTrending = async () => {
    const trending = await giphy.fetchTrending()
    console.log(trending)
    setGifs(trending)
  }
  
  const onKeywordChange = (newKeyword) => {
    setKeyword(newKeyword)
  }
  
  const onSearchSubmit = async () => {
    const searched = await giphy.search(keyword)
    setGifs(searched)
  }

  const onGifSelect = (gif) => {
    setSelectedGif(gif)
  }

  const closeModal = () => {
    setSelectedGif(null)
  }
  
  useEffect(() => {
    fetchTrending()
  }, [])

  return (
    <Layout>
      <LayoutContent>
        <GifSearch 
          keyword={keyword} 
          onKeywordChange={onKeywordChange}
          onSubmit={onSearchSubmit} />
        <GifList 
          onSelect={onGifSelect}
          gifs={gifs.data} />
        <Modal
          isOpen={!!selectedGif}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <GifDetail gif={selectedGif} />
        </Modal>
      </LayoutContent>
    </Layout>
  )
}

export default App
