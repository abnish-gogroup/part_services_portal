import React, { useContext, useEffect } from 'react';
import '../../../../stylesheets/common/sidebar.scss';
// import { ALL_USERS_URL, PARTS_VERIFY_URL, USER_DASHBOARD_URL, USER_REPORT_URL, ACCOUNT_DETAILS_URL } from '../../constants/Endpoints';
// import { faChartGantt, faClockRotateLeft, faUser, faPerson, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { SIDEBAR_MAP, getValueFromSessionStorage, setValueInSessionStorage } from '../../helper/Utils';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { UserDetailsContext } from '../context/UserDetailsContext';
// import { useNavigate } from 'react-router-dom';

function Sidebar(props) {
  // const { userLoggedInRole } = props;
  // const translationData = window.partsCheckerPanel.partsTranslations;
  // const { isActive, setIsActive, setUserDropdown, setSelectUser, setIsSetting } = useContext(UserDetailsContext); 
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (getValueFromSessionStorage('currentTab')) {
  //     const currentTab = getValueFromSessionStorage('currentTab');
  //     setIsActive(currentTab);
  //   }
  // }, [])

  // const handleMenuActive = (menuItem) => {
  //   setValueInSessionStorage('currentTab', menuItem);
  //   setUserDropdown(false);
  //   setSelectUser(translationData.allUsers);
  //   window.sessionStorage.removeItem('userData');
  //   setIsActive(menuItem);
  //   setIsSetting(false);
  // }
  
  // const handleIsActive = (menuItem) => {
  //   switch (menuItem) {
  //     case SIDEBAR_MAP['users']:
  //       navigate(`${ALL_USERS_URL}`);
  //       break;
  //     case SIDEBAR_MAP['logs']:
  //       navigate(`${USER_DASHBOARD_URL}`);
  //       break;
  //     case SIDEBAR_MAP['reports']:
  //       navigate(`${USER_REPORT_URL}`);
  //       break;
  //     case SIDEBAR_MAP['accounts']:
  //       navigate(`${ACCOUNT_DETAILS_URL}`);
  //       break;
  //     default:
  //       navigate(`${USER_DASHBOARD_URL}`);
  //   }
  //   handleMenuActive(menuItem);
  // } 

  return (
    <div className='sidebar'>
      sidebar
      {/* <div className={isActive === SIDEBAR_MAP['logs'] ? 'sidebar_ico active_menu' : 'sidebar_ico'} onClick={()=>handleIsActive(SIDEBAR_MAP['logs'])} onKeyPress={()=>handleIsActive(SIDEBAR_MAP['logs'])} role='button' tabIndex={0}>
        <div><FontAwesomeIcon icon={faClockRotateLeft} /></div>
        <div className='pdt_8'>{translationData.logsTab}</div>
      </div>
      {(userLoggedInRole.role_name === 'user') ? '' :
        <div className={isActive === SIDEBAR_MAP['users'] ? 'sidebar_ico active_menu' : 'sidebar_ico'} onClick={()=>handleIsActive(SIDEBAR_MAP['users'])} onKeyPress={()=>handleIsActive(SIDEBAR_MAP['users'])} role='button' tabIndex={0}>
          <div><FontAwesomeIcon icon={faUsers} /></div>
          <div className='pdt_8'>{translationData.userTab}</div>
        </div>}
      <div className={isActive === SIDEBAR_MAP['reports'] ? 'sidebar_ico active_menu' : 'sidebar_ico'} onClick={()=>handleIsActive(SIDEBAR_MAP['reports'])} onKeyPress={()=>handleIsActive(SIDEBAR_MAP['reports'])} role='button' tabIndex={0}>
        <div><FontAwesomeIcon icon={faChartGantt} /></div>
        <div className='pdt_8'>{translationData.reportTab}</div>
      </div>
       { (userLoggedInRole.role_name === 'system_admin') ?
      <div className={isActive === SIDEBAR_MAP['accounts'] ? 'sidebar_ico active_menu' : 'sidebar_ico'} onClick={()=>handleIsActive(SIDEBAR_MAP['accounts'])} onKeyPress={()=>handleIsActive(SIDEBAR_MAP['accounts'])} role='button' tabIndex={0}>
        <div><FontAwesomeIcon icon={faUser} /></div>
        <div className='pdt_8'>{translationData.accountTab}</div>
      </div> : '' } */}
    </div>
  )
}

export default Sidebar;
