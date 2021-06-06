import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProp: this.props.list
        }
    }
    render() {
        return (
            <div id="list">{this.state.listProp}</div>
        )
    }
}

export default List;