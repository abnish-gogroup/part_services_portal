import React, { useContext, useEffect, useState  } from 'react';
import '../../../../stylesheets/users/userDetails.scss';
// import { ACCESS_TYPE_MAPPING, ROLE_MAPPING, getValueFromLocalStorage, joinTwoString } from '../../helper/Utils';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { UserDetailsContext } from '../context/UserDetailsContext';
// import UserForm from '../common/UserForm';
// import Loader from '../common/Loader';
// import { USERS_API } from '../../constants/Endpoints';
// import { faClose } from '@fortawesome/free-solid-svg-icons';

function AddUser(props) {
  // const { setIsAddUser, isAddUser, accountDetails2 } = props;
  // const [isLimited, setIsLimited] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState('');
  // const translationData = window.partsCheckerPanel.partsTranslations;
  // const { allUserData, setAllUserData, currentUserRole, setCurrentUserRole, userLoggedInRole } = useContext(UserDetailsContext);
  // const [showPrice, setShowPrice] = useState(false);
  // const [showCupi, setShowCupi] = useState(false);
  // const [showFunctionalGroup, setShowFunctionalGroup] = useState(false);

  // const [initState, setInitState] = useState(
  //   {
  //     first_name: '',
  //     last_name: '',
  //     email: '',
  //     role: userLoggedInRole === 'system_admin' ? 'system_admin' : userLoggedInRole === 'super_admin' ? 'admin' : 'user',
  //     country_code: 'IT',
  //     mobile_number: '',
  //     account_name: '',
  //     company_name: '',
  //     request_limit: '',
  //     admin_company_name: ''
  //   });
  // const [isSuperAdmin, setSuperAdmin] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [isSystemAdmin, setSystemAdmin] = useState(false);

  // const setToggleValue=(value)=>{
  //   switch(value){
  //     case 'price':
  //       setShowPrice(!showPrice);
  //       break;
  //     case 'cupi':
  //       setShowCupi(!showCupi);
  //       break;
  //     case 'functional_group':
  //       setShowFunctionalGroup(!showFunctionalGroup);
  //       break;
  //     default:
  //       return false;
  //   }
  // }
    
  // useEffect(() => {
  //   if (getValueFromLocalStorage('currentUser')) {
  //     const currUser = JSON.parse(getValueFromLocalStorage('currentUser'));
  //     if (isAddUser) {
  //       setCurrentUserRole(currUser.role)
  //     }
  //   }
  // }, [])

  // const handleModalClose = React.useCallback(() => {
  //   setIsAddUser(false);
  //   setIsLoading(false);
  // })

  // const handleChange = React.useCallback(e => {
  //   setErrorMsg('');
  //   setError(false);
  //   setInitState({ 
  //     ...initState, 
  //     [e.target.name]: e.target.value
  //    })
  //    setToggleValue(e.target.value)
  //   if (e.target.value === 'system_admin' && e.target.name === 'role') {
  //     setSuperAdmin(false);
  //     setSystemAdmin(true);
  //     setCurrentUserRole('system_admin');
  //   }
  //   else if (e.target.value === 'super_admin' && e.target.name === 'role') {
  //     setSuperAdmin(true);
  //     setIsAdmin(false);
  //     setCurrentUserRole('super_admin');
  //   }
  //   else if (e.target.name === 'role' && e.target.value === 'admin') {
  //     setIsAdmin(true);
  //     setSuperAdmin(true);
  //     setSystemAdmin(false);
  //     setCurrentUserRole('admin');
  //   }
  //   else if (e.target.name === 'role' && e.target.value === 'user') {
  //     setIsAdmin(true);
  //     setSuperAdmin(true);
  //     setSystemAdmin(false);
  //     setCurrentUserRole('user');
  //   }
  //   else if (e.target.value === 'Limited') {
  //     setIsLimited(true);
  //   }
  //   else if (e.target.value === 'Unlimited') {
  //     setIsLimited(false);
  //   }
  // })
  // const handleSave = React.useCallback(() => {
  //   if (initState.first_name !== '') {
  //       joinTwoString(initState.first_name, initState.last_name);
  //   }
  //   setIsLoading(true);
  //   const userInputData = userLoggedInRole === 'system_admin' ? {
  //     first_name: initState.first_name,
  //     last_name: initState.last_name,
  //     email: initState.email,
  //     role: ROLE_MAPPING[initState.role],
  //     country_code: initState.country_code,
  //     contact_number: initState.mobile_number,
  //     company_name: initState.company_name,
  //     account_name: initState.account_name,
  //     request_limit: isSystemAdmin ? '' : Number(initState.request_limit),
  //     admin_company_name: isSystemAdmin ? '' : initState.admin_company_name,
  //     settings: {
  //       show_price: showPrice,
  //       show_cupi: showCupi,
  //       show_functional_group: showFunctionalGroup
  //     }} :
  //     {
  //       first_name: initState.first_name,
  //       last_name: initState.last_name,
  //       email: initState.email,
  //       role: ROLE_MAPPING[initState.role],
  //       country_code: initState.country_code,
  //       contact_number: initState.mobile_number,
  //       company_name: initState.company_name,
  //       account_name: initState.account_name,
  //       request_limit: isSystemAdmin ? '' : Number(initState.request_limit),
  //       admin_company_name: isSystemAdmin ? '' : initState.admin_company_name,
  //     };
  //   fetch(USERS_API, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(userInputData),
  //   }).then(res => res.json()).then(res => {
  //     const resjson = res?.payload?.data;
  //     const success = res?.status?.status === 'SUCCESS' ? true : false;
  //     const errorMesg = res?.status?.message;
  //     if (success) {
  //       setIsLoading(false);
  //       handleModalClose();
  //       setAllUserData([resjson, ...allUserData ])
  //     }
  //     else {
  //       setIsLoading(false);
  //       setError(true);
  //       setErrorMsg(errorMesg);
  //     }
  //   }).catch(err => console.log(err))
  // })

  return (
    <div className='prompt-add-reference-holder'>
      add user
      {/* <div className='prompt-add-reference md-p24 cb'>
        <div onClick={handleModalClose} onKeyPress={handleModalClose} role='button' tabIndex={0}>
          <FontAwesomeIcon icon={faClose} className='cp float_r' />
        </div>

        <div className='add_user_text pdt_10'>{translationData.addUser}</div>
        {isLoading ? <Loader /> : <UserForm
          isAddUser={isAddUser}
          initState={initState}
          handleChange={handleChange}
          currentUserRole={currentUserRole}
          isSuperAdmin={isSuperAdmin}
          isAdmin={isAdmin}
          isLimited={isLimited}
          handleModalClose={handleModalClose}
          handleSave={handleSave}
          isError={isError}
          errorMsg={errorMsg}
          userLoggedInRole={userLoggedInRole}
          showPrice={showPrice}
          showCupi={showCupi}
          showFunctionalGroup={showFunctionalGroup}
          accountDetails2={accountDetails2}
        />}
      </div> */}
    </div>
  )
}

export default AddUser;
