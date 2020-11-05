import React from 'react'
import './Search.scss'
import { Input } from 'antd'

const Search = ({ onSearch, inputValue }) => {
  return (
      <div className="search">
        <Input.Search
          placeholder="input search text"
          onChange={(e) => onSearch(e.target.value)}
          value={inputValue}
          allowClear
          enterButton
        />
      </div>
  )
}

export default Search
