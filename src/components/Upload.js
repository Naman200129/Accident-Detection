import React, { useState } from "react";

import './Upload.css';


function Upload() {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
      <div className="App">
          <h2>Add Image:</h2>
          <div className='box'>
            <img src={file} />
          </div>
          <input type="file" className='btn' onChange={handleChange} />
           <br/>
          <button type="submit">Detect</button>

      </div>

  );
}

export default Upload;
