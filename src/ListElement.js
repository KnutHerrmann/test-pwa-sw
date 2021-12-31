import React from 'react';

const ListElement = ({title, url}) =>
    <>
      <div>{title}</div>
      <img src={url} alt={title}/>
    </>

export default ListElement