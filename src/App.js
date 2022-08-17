import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [photo, setphoto] = useState("");
  const [result, setresult] = useState([]);
  const changephoto = () => {
    axios.get(`https://api.unsplash.com/search/users?page=1&query=${photo}&client_id=2iF2Lu7Ml0NyB8ZB5zyJ94LA_vycXxxRWWq_kki6nks`)
      .then((response) => {
        setresult(response.data.results);
        console.log(response.data)
      })
  }
  return (
    <>
      <div className="container">
        <div className="searchbox">

          <input type="text" className="sinput" onChange={e => setphoto(e.target.value)} value={photo} placeholder="search Image" />
          <button type="submit" className="searchbtn" onClick={() => { changephoto() }}>search</button>

        </div>
      </div>

      <div className="fl">
        {
          result.map((e) => {
            return (
              <>
                <div className="sh☻owdata">

                  <img className="showimg" src={e.photos.map(e => e.urls.small)} alt="" />
                <button className="addcaption">Add Caption</button>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default App;
