import React from 'react';

const ListElement = ({title, url}) =>
    <>
      <div>{title}</div>
      {url ? <img src={url} alt={title}/> : null}
    </>

export default ListElement