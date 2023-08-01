import React, { useContext, useState } from 'react';
import '../../../../stylesheets/users/userDetails.scss';
// import ActionButton from './ActionButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Loader from './Loader';
// import { USERS_API } from '../../constants/Endpoints';
// import { UserDetailsContext } from '../context/UserDetailsContext';
// import { faClose } from '@fortawesome/free-solid-svg-icons';

function ConfirmationBox(props) {
  // const { userId, userCurrentStatus, setIsDeactivate } = props;
  // const [isLoading, setIsLoading] = useState(false);
  // const translationData = window.partsCheckerPanel.partsTranslations;
  // const usersApi = USERS_API;
  // const { allUserData, setAllUserData, currentUserId, setCurrentUserId, setUserCurrentStatus } = useContext(UserDetailsContext);

  // const handleModalClose = React.useCallback(() => {
  //   setIsLoading(false);
  //   setIsDeactivate(false);
  // })

  // function handleStatusChange() {
  //   const allUserDataCopy = [...allUserData];
  //   const newUpdateUser = allUserDataCopy?.map(user => (
  //     user.id === currentUserId ? { ...user, status: userCurrentStatus === 'activate' ? 'active' : 'inactive' } : user
  //   ));
  //   setAllUserData(newUpdateUser);
  // }

  // const handleConfirmation = React.useCallback(() => {
  //   if (userCurrentStatus) {
  //     setCurrentUserId(userId);
  //     fetch(`${usersApi}/${userId}/modify_status?status=${userCurrentStatus}`, {
  //       method: 'PUT',
  //     }).then().then(() => {
  //       handleStatusChange();
  //       setUserCurrentStatus(userCurrentStatus);
  //     })
  //       .catch(err => console.log(err));
  //     handleModalClose();
  //   }
  // })

  return (
    <div className='prompt-add-reference-holder'>
      confirmation box
      {/* <div className='prompt-confirmation md-p24 cb'>
        <div onClick={handleModalClose} onKeyPress={handleModalClose} role='button' tabIndex={0}>
          <FontAwesomeIcon icon={faClose} className='cp float_r' />
        </div>
        <div className='fs_14 tc pb_20'>  {userCurrentStatus === 'activate' ? `${translationData.confirmActivateText}` : `${translationData.confirmDeactivateText}`} </div>
        <ActionButton
          handleModalClose={handleModalClose}
          handleConfirmation={handleConfirmation} />
      </div>
      {isLoading ? <Loader /> : ''} */}
    </div>
  )
}

export default ConfirmationBox;
