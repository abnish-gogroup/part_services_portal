import React, { useCallback, useContext } from 'react';
import '../../../../stylesheets/users/userDetails.scss';
// import { convertUserRole, joinTwoString  } from '../../utils/utils';
// import { ALL_USERS_URL } from '../../constants/Endpoints';
// import { UserDetailsContext } from '../context/UserDetailsContext'; // see you later
// import { useNavigate } from 'react-router-dom';

function UserDetailsTable(props) { 
  // const { userData, setIsDeactivate, setCurrentUserId, } = props;
  // const translationData = window.partsCheckerPanel.partsTranslations;
  // const navigate = useNavigate();
  // const { setUserCurrentStatus } = useContext(UserDetailsContext);
  
  // const handleDeactivate = useCallback((userId, status) => e => {
  //   e.stopPropagation();
  //   const Userstatus = status === 'active' ? 'deactivate' : 'activate'
  //   setIsDeactivate(true);
  //   setCurrentUserId(userId);
  //   setUserCurrentStatus(Userstatus);
  // })

  // const handleShowUser = useCallback((id) => {
  //   setCurrentUserId(id);
  //   navigate(`${ALL_USERS_URL}/${id}`)
  // }, [])


  return (
    <tbody className='table_body'>
      user details table
      {/* {userData?.map((user) => (
        <tr key={user.email} className='fs_14 cp' onClick={()=>handleShowUser(user.id)}>
          <td>{user.email}</td>
          <td>{joinTwoString(user.first_name, user.last_name)}</td>
          <td style={{ width: '10%', backgroundColor: convertUserRole(user.role).bg, color: convertUserRole(user.role).color, borderRadius: 5 }}>{convertUserRole(user.role).role}</td>
          <td>{user.company_name}</td>
          <td>{user.contact_number}</td>
          <td>{user.request_access_type === 'limited' ? <span> {user.used_request_quota} / {user.request_limit}</span> : <span> {user.used_request_quota} / &#8734;</span>}</td>
          <td className={user.status === 'active' ? 'bg_deact cp' : 'bg_act cp'} onClick={handleDeactivate( user.id, user.status)} onKeyPress={handleDeactivate} role='button' tabIndex={0}>{user.status === 'active' ? <span>{translationData.deactivate}</span> : <span>{translationData.activate}</span>}</td>
        </tr>
      ))} */}
    </tbody>
  )
}

export default UserDetailsTable;
