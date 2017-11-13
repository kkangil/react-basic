import React, {Component} from 'react';

class About extends Component {
  render() {
    const {params} = this.props.match;
    return (
      <div>
        <h2>About {params.name}</h2>
      </div>
    );
  }
}

export default About;
