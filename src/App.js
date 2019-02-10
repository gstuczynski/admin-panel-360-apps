import React, { useState, useEffect } from "react";
import { FilePond } from "react-filepond";
import axios from "axios";
import Gallery from "react-grid-gallery";

import "filepond/dist/filepond.min.css";
import "./App.css";

const server_url = "https://gstuczynski.pl/api-360";

const getImages = () =>
  axios.get(`${server_url}/all-images`).then(res =>
    res.data.map(img => ({
      src: `https://gstuczynski.pl/images360/${img}`,
      thumbnail: `https://gstuczynski.pl/images360/${img}`,
      thumbnailWidth: 320,
      thumbnailHeight: 212
    }))
  );

export default () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    setItems(await getImages());
  }, items);
  return (
    <div className="App">
      {console.log(items)}
      <FilePond server={`${server_url}/upload`} name="images" />
      <Gallery images={items} />
    </div>
  );
};
