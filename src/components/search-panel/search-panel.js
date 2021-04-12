import React from 'react';

export default class SearchPanel extends React.Component {

  render() {
    const searchStyle = {
      fontSize: '20px',
      marginRight: '0.3rem'
    }
    return <input placeholder='Type here to search' style={searchStyle} onChange={(e) => {this.props.onSearch(e.target.value)}}/>;
  }
};

