import React, {useState} from 'react';

function RestFilter() {
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <label>Busca tu restaurante  </label>
      <input type="text" value={search} onChange={handleChange} />
    <button>Search</button>
    </div>
  );
}

export default RestFilter;
