import React from 'react';
import Editor from "./Editor";

const TEST = {"aaa":1, "bbb":"ccc"};

const A = () => <div><Editor content={JSON.stringify(TEST)} /></div>

export default A