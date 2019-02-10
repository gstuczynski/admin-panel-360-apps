import React, { Component } from 'react';
import { FilePond } from 'react-filepond';
import axios from 'axios';
import Gallery from 'react-grid-gallery';

import 'filepond/dist/filepond.min.css';
import './App.css';

const server_url = "https://gstuczynski.pl/api-360"

class App extends Component {
  constructor(){
    super();
    this.state = {
      images: []
    }
  }

  componentDidMount(){
    this.getImages()
  }

  getImages(){
   axios.get(`${server_url}/all-images`)
      .then((res) => {
        console.log(res)
        this.setState({
          images: res.data.map((img) => ({
            src: `https://gstuczynski.pl/images360/${img}`,
            thumbnail: `https://gstuczynski.pl/images360/${img}`,
            thumbnailWidth: 320,
            thumbnailHeight: 212
          })
             
          )
        })
      })
  }

  render() {
    return (
      <div className="App">
      {console.log()}
        <FilePond server={`${server_url}/upload`} name="images"/>
        <Gallery images={this.state.images}/>
      </div>
    );
  }
}

export default App;
