import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css";



class THeader extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let { columns } = this.props;
        return (
            <tr className="theader" style={{marginBottom: "50px"}}>
                {columns && columns.map((columnsX) => {
                        return (<th className="tcolumns" style={{width: columnsX.width}}><span className="theading">{columnsX.label}</span></th>)
                })}
            </tr>
        );
    }
}

THeader.propTypes = {

};

export default THeader;