import React from 'react';

const ListElement = ({id, title, url}) =>
    <>
      <div>{id}. {title}</div>
      {url ? <img src={url} alt={title}/> : null}
    </>

export default ListElement