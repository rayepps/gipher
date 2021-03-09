import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  > input {
    flex: 1;
    margin-right: 10px;
    outline: none;
    border: none;
    padding: 10px;
  }
  > button {
    min-width: 200px;
    border: none;
    outline: none;
    background-color: green;
    &:hover {
      cursor: pointer;
      background-color: yellow;
    }
  }
`

function GifSearch({ 
  keyword = '',
  onKeywordChange = () => {},
  onSubmit = () => {}
}) {
  const handleChange = (event) => onKeywordChange(event.target.value)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  }
  return (
    <Container>
      <input 
        type="text" 
        value={keyword} 
        placeholder="Search for a Gif"
        onKeyDown={handleKeyDown}
        onChange={handleChange} />
      <button onClick={onSubmit}>Search</button>
    </Container>
  )
}

export default GifSearch
