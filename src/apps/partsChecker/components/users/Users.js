import React, { useContext, useEffect, useState } from 'react';
import '../../../../stylesheets/users/userDetails.scss';
// import { getValueFromSessionStorage, setValueInSessionStorage } from '../../utils/utils';
// import AddUser from './AddUser';
// import ConfirmationBox from '../common/ConfirmationBox';
// import Loader from '../common/Loader';
// import { Pagination } from 'semantic-ui-react';
import TableHead from '../common/TableHead';
// import { ACCOUNTS, USERS_API } from '../../constants/Endpoints';
// import { UserDetailsContext } from '../context/UserDetailsContext';   // see you later
// import UserDetailsTable from './UserDetailsTable';

function Users(props) {
  const { actions } = props;
  console.log('actions', actions);
  // const [isDeactivate, setIsDeactivate] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [accountDetails2, setAccountDetails2] = useState([]);
  // const translationData = window.partsCheckerPanel.partsTranslations;
  // const { allUserData, setIsError, isAddUser, setIsAddUser, setHeaderText, userLoggedInRole, setAllUserData, currentUserId, setCurrentUserId, userCurrentStatus } = useContext(UserDetailsContext);

  // const handleFetchPaginationData = (currPage) => {
  //   fetch(`${USERS_API}?page=${currPage}&pagination=true`).then(res => res.json()).then(res => {
  //     const success = res?.status?.status === 'SUCCESS' ? true : false;
  //     if (success) {
  //       setIsError({ error: false, errorMsg: '' });
  //       setAllUserData(res?.payload?.data);
  //       setCurrentPage(currPage);
  //       setTotalPages(res?.payload?.total_pages);
  //       setIsLoading(false)
  //     }
  //     else {
  //       const errorMsg = res?.status?.message;
  //       setIsError({ error: true, errorMsg: errorMsg });
  //       setIsLoading(false);
  //     }
  //   });
  //   window.scrollTo(0, 0);
  // }

  // useEffect(() => {
  //   setHeaderText({ isShowPage: true, headerText: translationData.users })
  //   const fetchUserData = () => {
  //     setIsLoading(true);
  //     if (getValueFromSessionStorage('currentActivePage')) {
  //       const currentActivePage = getValueFromSessionStorage('currentActivePage');
  //       handleFetchPaginationData(Number(currentActivePage));
  //     }
  //     else if (currentPage === 1) {
  //       handleFetchPaginationData(currentPage);
  //     }
  //   }
  //   fetchUserData();
  // }, []);

  // const handleAllAccountDetails=()=>{
  //   fetch(`${ACCOUNTS}`).then(res=>res.json()).then(res=>{
  //     const resData = res?.payload?.data;
  //     console.log('resdata', resData);
  //     const success = res?.status?.status === 'SUCCESS' ? true : false;
  //     if(success){
  //       setAccountDetails2(resData);
  //     }
  //     else {
  //       console.log('error');
  //     }
  //   })
  // }

  const handleAddUser=()=>{
    console.log('handle add users');
  }

  // const handleAddUser = React.useCallback(() => {
  //   setIsAddUser(true);
  //   handleAllAccountDetails();
  // })

  // const handlePageChange = React.useCallback((e, pageObject) => {
  //   let pageNumber = pageObject?.activePage;
  //   setValueInSessionStorage('currentActivePage', pageNumber);
  //   handleFetchPaginationData(pageNumber);
  // })

  return (
    <div className='user_details_table'>
      <div className='add_btn_cont'>
        <button className='add_user_btn'
          type='button'
          onClick={handleAddUser}>
          + Add User</button>
      </div>
      <div className='main_container'>
        <table className='table table-bordered table-hover'>
          {/* <TableHead /> */}
          {/* {<UserDetailsTable
            userData={allUserData}
            setIsDeactivate={setIsDeactivate}
            setCurrentUserId={setCurrentUserId}
            userLoggedInRole={userLoggedInRole}
          />} */}
        </table>
        {/* <div className='pag_ination'>
          <Pagination
            activePage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div> */}

        {/* {isAddUser ? <AddUser setIsAddUser={setIsAddUser} isAddUser={isAddUser} userData={allUserData} accountDetails2={accountDetails2} /> : ''}
        {isDeactivate ? <ConfirmationBox userId={currentUserId} userCurrentStatus={userCurrentStatus} setIsDeactivate={setIsDeactivate} /> : ''}
        {isLoading ? <Loader /> : ''} */}
      </div>
    </div>
  )
}

export default Users;
