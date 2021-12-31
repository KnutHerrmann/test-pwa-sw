import React, {useEffect, useState} from 'react';
import ListElement from "./ListElement";

const List = () => {
  const [content, setContent] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => setContent(json))
        .catch(error => console.log(error));
  }, []);
  if (!content) {
    return 'loading...';
  }
  return content.map(entry =>
      <ListElement key={entry.id}
                   title={entry.title}
                   url={entry.url}/>)
}

export default List