import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class AppItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() { 
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
          );
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}

AppItem.propTypes = {
    // 必须传递
    // name: PropTypes.string.isRequired
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
}

// AppItem.defaultProps={
//     name: "测试"
// }
 
export default AppItem