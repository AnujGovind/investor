//import CartItem from './CartItem';
import React,{useEffect,useState} from 'react';
import PageHeading from '../../components/common/PageHeading/index';
import { indexTableHeaderOptions } from '../../constants/tableColumns';
import SearchBox from '../../components/common/SearchBox/index';

import moment from "moment";
import CustomTable from "../../components/common/CustomTable"
import Button from '../../components/common/Button/index';
import history from 'services/history';
import ConfirmationPopUp from '../../../src/components/common/Modal/ConfirmationPopup/index'
import { InvestorAction } from "../../dataSource";
import './index.scss'



const Cart = () => {


  return(
    <div className="sponsored">
        <div className="row m-0 p-0">
            <PageHeading title="Licensing Search" hideEllipses={true} isSticky={false} backButton={false} />
            <div className="row m-0 p-3 ml-auto pos-relative">
                <SearchBox 
              //  searchResult={fetchSearchResult}
                placeholder="Search "/>
            </div>
            <div className='row p-3 pos-relative'>
            <Button
                       // onClick={() => {handleAddLicensing() }}
                        pageButton={[
                            {
                                buttonClass: 'btn b-success btn-spacing btn-save mr-3',
                                title: " View History"
                            }
                        ]}
                    />
            </div>

        </div>
        <CustomTable 
            columns={indexTableHeaderOptions}
            //rowData={licensingList?.length !== 0 && licensingList}
            rowActions={{
                hasAction: true,
                actionList: InvestorAction,
                //handleRowActions: handleRowActions
            }}
            paginationProps={{
                clientSidePagination: false,
                currentPageNumber:10,
                recordPerPage: 10,
                customSerialNo: true,
                totalRecords: 10 || 0,
              //  onChangePage : onChangePage
            }}
        />
        
            <ConfirmationPopUp 
                isOpen={true}
                //onRequestClose={() =>handleOpenModal('delete')}
                //handleSave={(data) => handleDeleteLicensing(data)} 
                saveTitle='Delete' 
            /> : null
        
    </div>
)
}






//     // const items = useSelector(state => getItems(state));
//     // const dispatch = useDispatch();

//     return (
//         <div>
//             <h3>Cart Details</h3>
//             <div className="cart">
//                 <div className="panel panel-default">
//                     <div className="panel-body">
//                         { (
//                             <div className="cart__body"> 
//                               <table class="table">
//                                 <thead class="thead-dark">
//                                   <tr>
//                                     <th scope="col">Name</th>
//                                     <th scope="col">Price</th>
//                                     <th scope="col">Quantity</th>
//                                     <th scope="col">Total</th>
//                                     <th scope="col">Action</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
                            
//                                 </tbody>
//                               </table>
//                             </div>
//                         )}
                      
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



export default Cart;