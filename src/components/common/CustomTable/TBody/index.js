import React, { Component } from 'react';
import "./index.css";
import TCell from '../TCell';



class TBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { columns, rowData, paginationProps, rowActions } = this.props;
        let { clientSidePagination, currentPageNumber, recordPerPage, customSerialNo, totalRecords } = paginationProps;
        if (clientSidePagination) {
            let recordLowerLimit, recordUpperLimit;
            if (currentPageNumber === 0 || currentPageNumber === 1) {
                recordLowerLimit = 0
            } else {
                recordLowerLimit = (currentPageNumber - 1) * recordPerPage
            }
            recordUpperLimit = recordLowerLimit + recordPerPage + 1;
            return (<React.Fragment>
                {rowData && rowData.map((rowDataX, rowDataXIndex) => {
                    let showRecord = (rowDataXIndex + 1) > recordLowerLimit && (rowDataXIndex + 1) < recordUpperLimit;
                    if (showRecord) {
                        return <TCell data={rowDataX} columns={columns} paginationProps={paginationProps} rowActions={rowActions} />
                    } else {
                        return null
                    }
                })}
            </React.Fragment>
            )
        } else {
            return (<React.Fragment>
                {rowData && rowData.map((rowDataX) => <TCell data={rowDataX} columns={columns} rowActions={rowActions} />)}
            </React.Fragment>
            )
        }
    }
}

export default TBody;