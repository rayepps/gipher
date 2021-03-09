import React from 'react'
import styled from 'styled-components'


const ListContainer = styled.div`
  > div {
    float: left;
    margin: 10px 0;
    margin-right: 20px;
    > img {
      height: ${({ rowHeight }) => rowHeight}px;
      width: auto;
    }
    &:hover {
      cursor: pointer;
    }
  }
`

function GifList({ 
  gifs = [],
  onSelect = () => {}
}) {
  const ROW_HEIGHT = 200
  return (
    <ListContainer rowHeight={ROW_HEIGHT}>
      {gifs.map(g => (
        <div key={g.id} onClick={() => onSelect(g)}>
          <img 
            src={g.images.preview_gif.url} 
            alt={g.title} />
        </div>
      ))}
    </ListContainer>
  );
}

export default GifList;
