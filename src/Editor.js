import React from 'react';
import ace from 'ace-builds/src-min-noconflict/ace';
import AceEditor from 'react-ace';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-html';
import 'ace-builds/src-min-noconflict/theme-textmate';
import 'ace-builds/src-min-noconflict/snippets/html';
import 'ace-builds/src-min-noconflict/snippets/json';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';

// https://github.com/securingsincity/react-ace/issues/725
// eslint-disable-next-line import/no-webpack-loader-syntax
import jsonWorkerUrl
  from 'file-loader!ace-builds/src-min-noconflict/worker-json';

ace.config.setModuleUrl('ace/mode/json_worker', jsonWorkerUrl);

const Editor = ({content}) =>
    <AceEditor
        name={'EDITORACE'}
        mode="json"
        theme="textmate"
        value={content}
        height="200px"
        width="390px"
        fontSize={14}
        showPrintMargin={false}
        highlightActiveLine={false}
        focus={true}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        tabSize={2}
        debounceChangePeriod={500}
        editorProps={{$blockScrolling: true}}
        style={{
          border: '1px solid rgba(0, 0, 0, 0.15)',
          borderRadius: '0.25rem',
        }}
    />

export default Editor;
