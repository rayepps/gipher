import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  
`

function GifDetail({ 
  gif = null
}) {
  if (!gif) return <></>
  // first try the gif.user object for a username
  // then try the gif.username property
  // else set to unknown
  const username = gif.user
    ? gif.user.username
    : gif.username
      ? gif.username
      : 'unknown'
  return (
    <Container>
      <h3>{gif.title}</h3>
      <span>@{username}</span>
      <img 
        src={gif.images?.original?.url} 
        alt={gif.title} />
    </Container>
  );
}

export default GifDetail;
