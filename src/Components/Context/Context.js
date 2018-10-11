import React, { Component } from "react";
import apiKey from "../App/config";

const AppContext = React.createContext();

export class Provider extends Component {
  state = {
    photos: [],
    currentTag: undefined,
    searchString: "",
    formSubmitted: false,
    navLinkTag: [
      {
        link: "sunsets",
        text: "Sunsets"
      },
      {
        link: "waterfalls",
        text: "Waterfalls"
      },
      {
        link: "rainbows",
        text: "Rainbows"
      }
    ],
    fetchingPics: true
  };

  buildImageUrls = images =>
    images.map(image => ({
      src: `https://farm${image.farm}.static.flickr.com/${image.server}/${
        image.id
      }_${image.secret}.jpg`,
      alt: image.title
    }));

  fetchTagImagesData = selectedTag => {
    let fetchLink;
    if (!selectedTag) {
      fetchLink = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets%2C+waterfalls%2C+rainbows&per_page=24&format=json&nojsoncallback=1`;
    } else {
      fetchLink = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${selectedTag}&per_page=24&format=json&nojsoncallback=1`;
    }

    fetch(fetchLink)
      .then(response => response.json())
      .then(response => {
        // console.log("These are the pics", response.photos.photo);
        this.setState({
          photos: this.buildImageUrls(response.photos.photo),
          fetchingPics: false
        });
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  };

  componentWillMount() {
    this.fetchTagImagesData();
  }

  handleNavLinkClick = selectedTag => {
    this.setState({
      currentTag: selectedTag,
      photos: this.fetchTagImagesData(selectedTag),
      fetchingPics: true
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log("these are the props: ", this.props.history);
    this.setState({
      photos: this.fetchTagImagesData(this.state.searchString),
      formSubmitted: true,
      fetchingPics: true
    });
  };

  handleSearchChange = event => {
    this.setState({
      searchString: event.target.value
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          photos: this.state.photos,
          tags: this.state.tags,
          navItems: this.state.navLinkTag,
          loading: this.state.fetchingPics,
          currentTag: this.state.currentTag,
          search: this.state.searchString,
          formSubmitted: this.state.formSubmitted,
          actions: {
            updateSelectedTag: this.handleNavLinkClick,
            searchTag: this.handleSearchSubmit,
            searchChange: this.handleSearchChange
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export const Consumer = AppContext.Consumer;
// export default withRouter(AppContext.Consumer);
