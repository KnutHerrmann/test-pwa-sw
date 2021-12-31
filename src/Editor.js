import React, {useEffect, useState} from 'react';
import JsonEditor from "./JsonEditor";

const Editor = () => {
  const [content, setContent] = useState('loading...');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.log(error));
  }, []);
  return <div><JsonEditor content={content}/></div>
}

export default Editor