import React, { Component } from 'react';
import THeader from './THeader';
import TBody from './TBody';
import "./index.css";
import Pagination from 'components/pagination';
import NoResultFound from '../NoResultFound';


class CustomTable extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let { columns, rowData, paginationProps,rowActions, showPagination=true } = this.props;
        let rowDataFrom, rowDataTo;
        if (paginationProps.currentPageNumber === 0 || paginationProps.currentPageNumber === 1) {
            rowDataFrom = 1;
            rowDataTo = paginationProps.recordPerPage
        } else {
            rowDataFrom = (paginationProps.currentPageNumber-1)*(paginationProps.recordPerPage) + 1;
            rowDataTo = rowDataFrom + paginationProps.recordPerPage -1;
        }

        return (
            <>
            {paginationProps.totalRecords > 0 ?
            <>
                <div className='scrollbar scrollbar-height'>
                <table style={{ width: "100%" }}>
                    <THeader columns={columns} />
                    <tbody>
                        <TBody columns={columns} rowData={rowData} paginationProps={paginationProps} rowActions={rowActions} />
                    </tbody>
                </table>
                </div>
                {showPagination && 
                 <div className="pagination">
                 <span className="show-count">showing {rowDataFrom}-{rowDataTo}</span>
                 <Pagination
                     defaultPageSize={paginationProps.defaultPageSize}
                     defaultCurrentPage={paginationProps.defaultCurrentPage}
                     totalResultCount={paginationProps.totalRecords}
                     onChangePage={(current, pageSize) => paginationProps.onChangePage(current, pageSize)}
                     currentPageNumber={paginationProps.currentPageNumber}
                 />
             </div>
                }
               
            </>
            :
            <NoResultFound msgHeading="No data available" />
            }
            </>
        );
    }
}

export default CustomTable;