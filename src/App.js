import React from 'react'
import { Input } from 'antd';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="wrapper">
      <Input.Search
      placeholder="input search text"
      allowClear
      style={{ width: 200, margin: '0 10px' }}
    />
    </div>
  );
}
}

export default App;
