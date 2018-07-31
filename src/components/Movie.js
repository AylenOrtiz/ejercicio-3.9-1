import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      selector: ""
    };
    this.userMovie = this.userMovie.bind(this);
    this.descriptionMovie = this.descriptionMovie.bind(this);
    this.selectorMovie = this.selectorMovie.bind(this);
  }

  userMovie(event) {
    this.setState({ title: event.target.value });
  }
  descriptionMovie(event) {
    this.setState({ description: event.target.value });
  }
  selectorMovie(event) {
    this.setState({ selector: event.target.value });
  }

  render() {
    return (
      <div>
        <label htmlFor="Title">Título</label>
        <input
          id="movieTItle"
          type="text"
          value={this.state.title}
          onChange={this.userMovie}
        />
        <label htmlFor="description">Descripción</label>
        <input
          id="movieDescription"
          type="text"
          value={this.state.description}
          onChange={this.descriptionMovie}
        />
        <label htmlFor="gender">Género</label>
        <select
          name="selector"
          id="genderMovie"
          value={this.state.selector}
          onChange={this.selectorMovie}
        >
          <option value="comedy">Comedia</option>
          <option value="drama">Drama</option>
          <option value="children">Infantil</option>
        </select>
        <input type="submit" value="Enviar" />
      </div>
    );
  }
}

export default Movie;
