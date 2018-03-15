import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
<<<<<<< HEAD
        <p>Colors: {this.props.colors.join(', ')} </p>
=======
        <p>Colors: </p>
        
        <p></p>
        <p></p>
>>>>>>> 1b94445a052536e7443ed5e97418fe9a2e9f56aa
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};