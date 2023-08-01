import React from 'react';
import '../../assets/stylesheets/userDetails/userDetails.scss';
import { ALL_USERS_URL, PARTS_VERIFY_URL, ROOT_URL, USER_DASHBOARD_URL, USER_PROFILE_URL, USER_REPORT_URL, ACCOUNT_DETAILS_URL } from '../partsChecker/constants/Endpoints';
import { Navigate, Route, Routes } from 'react-router-dom';
import Logs from '../components/logs/Logs';
import Report from '../components/reports/Report';
import ShowUser from '../components/showUser/ShowUser';
import Sidebar from '../components/common/Sidebar';
import UserDetails from '../components/userDetails/UserDetails';
import PartsChecker from '../components/partsChecker/PartsChecker';
import AccountDetails from '../components/accountDetails/AccountDetails';

function RoutesContainer(props) {
  const { userLoggedInRole, userProflieUrlPath } = props;
  return (
    <div className='user_details_container'>
      <Sidebar userLoggedInRole={userLoggedInRole} />
      <Routes>
        <Route path={USER_DASHBOARD_URL} element={<Logs />} />
        <Route path={ROOT_URL} element={<Logs />} />
        {userLoggedInRole === 'user' ? '' :
        <Route path={ALL_USERS_URL} element={<UserDetails />} />}
        <Route path={USER_PROFILE_URL} element={<ShowUser />} />
        <Route path={USER_REPORT_URL} element={<Report />} />
        <Route path={ACCOUNT_DETAILS_URL} element={<AccountDetails />} />
        {userLoggedInRole === 'system_admin' ?  '' : 
        <Route path={PARTS_VERIFY_URL} element={ <PartsChecker />} />}
        <Route path='*' element={<Navigate to={userProflieUrlPath} />} />
      </Routes>
    </div>
  )
}

export default RoutesContainer;
