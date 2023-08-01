import React, { useContext, useEffect, useState } from 'react';
import '../../../../stylesheets/common/header.scss';
import { ALL_USERS_URL, GET_CURRENT_USER_API, PARTS_VERIFY_URL, PROD_URL, STAGING_URL, USER_DASHBOARD_URL, USER_SIGNOUT_API } from '../../constants/Endpoints';
import { LANG_MAPPING, SIDEBAR_MAP, setValueInSessionStorage } from '../../utils/utils';
// import Cookies from 'universal-cookie';
// import HeaderDropdown from './HeaderDropdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { UserDetailsContext } from '../context/UserDetailsContext';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
import HeaderDropdown from './HeaderDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  // const { currentUserData } = props;
  const [showProfileDD, setShowProfileDD] = useState(false);
  // const translationData = window.partsCheckerPanel.partsTranslations;
  // const domain = window.location.origin;
  // const navigate = useNavigate();
  // const { headerText, secretKey, setUserProfileData, setCurrentUserId, setCurrentUserData, setAccountServices, setIsActive, defaultLanguage, setDefaultLanguage, setUserLoggedInRole, setIsSetting } = useContext(UserDetailsContext);
  // const cookies = new Cookies();
  // const [ddState, setDdState] = useState(defaultLanguage);

  const profileArray = ['settings', 'logout']

  // useEffect(() => {
  //   if (getValueFromLocalStorage('currentUser')) {
  //     const currentUser = JSON.parse(getValueFromLocalStorage('currentUser'));
  //     setCurrentUserData(currentUser);
  //     setAccountServices(currentUser?.account?.enabled_services)
  //     setUserLoggedInRole(currentUser.role);
  //     if (currentUser.role === 'user') {
  //       window.history.pushState({}, '', `${USER_DASHBOARD_URL}`);
  //     }
  //   }
  //   else {
  //     const getCurrentUser = () => {
  //       fetch(GET_CURRENT_USER_API, {
  //         method: 'GET',
  //       }).then(res => res.json()).then(res => {
  //         console.log('resssss', res.user);
  //         const resjson = res?.user;
  //         const jsondata = JSON.stringify(resjson);
  //         setValueToLocalStorage('currentUser', jsondata)
  //         setCurrentUserData(resjson);
  //         setAccountServices(resjson?.account?.enabled_services);
  //         setUserLoggedInRole(resjson.role);
  //         let cookiesLang = cookies.get('defaultLanguage');
  //         if (!cookiesLang) {
  //           cookiesLang = COUNTRY_CODE_MAPPING[resjson.country_code] || COUNTRY_CODE_MAPPING["EN"];
  //           cookies.set("defaultLanguage", cookiesLang, { path: '/dashboard' });
  //           setDdState(COUNTRY_CODE_MAPPING[resjson.country_code]);
  //         }
  //         setDefaultLanguage(cookiesLang);
  //         updateLanguageInCookies(cookiesLang)
  //         if (resjson.role === 'user') {
  //           window.history.pushState({}, '', `${USER_DASHBOARD_URL}`);
  //         }
  //       })
  //     }
  //     getCurrentUser()
  //   }
  // }, [])

  // useEffect(() => {
  //   let link = document.querySelector("link[rel~='icon']");
  //   if (!link) {
  //     link = document.createElement('link');
  //     link.rel = 'icon';
  //     document.getElementsByTagName('head')[0].appendChild(link);
  //   }
  //   link.href = toggleFavicon(currentUserData?.admin_company_name);
  // }, [currentUserData?.admin_company_name]);

  // useEffect(() => {
  //   const cookiesLang = cookies.get('defaultLanguage');
  //   if (cookiesLang) {
  //     setDdState(cookiesLang);
  //     setDefaultLanguage(cookiesLang);
  //   }
  // }, [])

  const handleSetting = () => {
    setShowProfileDD(false);
    // const id = currentUserData?.id;
    // setCurrentUserId(id);
    // setIsSetting(true);
    // setUserProfileData(currentUserData);
    // navigate(`${ALL_USERS_URL}/${id}`);
  }

  const handleLogOut = () => {
    setShowProfileDD(false);
    // await fetch(domain + USER_SIGNOUT_API, {
    //   method: 'DELETE'
    // }).then(res => res.json).then()
    // window.sessionStorage.clear();
    // window.location.reload();
    // setUserLoggedInRole('');
    // setCurrentUserData('');
    // setAccountServices('');
    localStorage.removeItem('currentUser');
  }

  const handleClick = (index) => {
    switch (index) {
      case 0:
        handleSetting();
        break;
      case 1:
        handleLogOut();
        break;
      default:
        return false;
    }
  }

  const handleHideDD = React.useCallback(() => {
    console.log('hide dd')
  })

  const handleLogo = React.useCallback(() => {
    // navigate(USER_DASHBOARD_URL);
    // setIsActive('Logs');
    setValueInSessionStorage('currentTab', SIDEBAR_MAP['logs']);
  })

  function updateLanguageInCookies(lang) {
    // if (lang) {
    //   setDefaultLanguage(lang);
    //   setDdState(lang);
    //   cookies.set(
    //     "defaultLanguage",
    //     lang,
    //     { path: '/dashboard' }
    //   );
    // }
    window.location.reload();
  }

  // const handlePartsVerification=()=>{
  //   const currentUser = JSON.parse(getValueFromLocalStorage('currentUser'));
  //   if(currentUser.client_name && currentUser.secret){
  //     setValueInSessionStorage('currentTab', SIDEBAR_MAP['search']);
  //     setIsActive('Search');
  //     navigate(PARTS_VERIFY_URL);
  //   }
  //   else {
  //     handleLogOut();
  //   }
  // }

  // const toggleFavicon=(companyName)=>{ 
  //   switch(companyName){
  //     case 'Planus Group':
  //       return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/tempario_favicon.png';
  //     case 'ri-werkstattservice gmbh':
  //       return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/riparo_favicon.png';
  //     case 'ALFAH GmbH':
  //       return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/alfah_favicon.png';
  //       case 'Edisonstraße 19':
  //         return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/3c_favicon.png';
  //     default:
  //       return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/goparts-favicon.png';  
  //   }
  // }

  const toggleLogo = (companyName) => {
    switch (companyName) {
      case 'Planus Group':
        return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/logo_tempario.png';
      case 'ri-werkstattservice gmbh':
        return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/riparo_resize_logo.png';
      case 'ALFAH GmbH':
        return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/alafa_logo.png';
      case 'Edisonstraße 19':
        return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/3c_logo.png';
      default:
        return 'https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/go_parts_logo.png';
    }
  }

  // console.log('currentUserData', currentUserData);

  return (
    <div className='header_container'>
      <img src={toggleLogo('admin_company_name')} className='logo' onClick={handleLogo} alt='tempario_logo' onKeyPress={handleLogo} role='button' tabIndex={0} />
      <span className='parts_checker_text'>Admin Panel</span>
      <div className='dh_flex'>
        {<div className='add_btn_cont pts_cont'>
          <button className='add_user_btn pts_ver_btn' type='button'>Parts checker</button>
        </div>}
        <div className="dropdown">
          <div className="dropbtn cp">{LANG_MAPPING['en']}</div>
          <div className="dropdown-content">
            <HeaderDropdown
              updateLanguageInCookies={updateLanguageInCookies}
              langParam='en'
              countryFlag='https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/uk_flag.png'
              translation='English'
              altImg='united_kingdom_logo'
            />
            <HeaderDropdown
              updateLanguageInCookies={updateLanguageInCookies}
              langParam='de'
              countryFlag='https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/german_flag.png'
              translation='de'
              altImg='germany_logo'
            />
            <HeaderDropdown
              updateLanguageInCookies={updateLanguageInCookies}
              langParam='it'
              countryFlag='https://d3brnpc5nhvc9v.cloudfront.net/parts-checker/it_flag.png'
              translation='it'
              altImg='italy_logo'
            />
          </div>
        </div>

        <div className='dropdown'>
          <div className='dropbtn cp' onClick={handleHideDD} onKeyPress={handleHideDD} role='button' tabIndex={0}>
            <FontAwesomeIcon icon={faUser}
              className='fa-solid fa-user fs_12 pd_1' />Abnish</div>
          <div className={showProfileDD ? 'dropdown-content' : 'dn'} >
            {/* {profileArray?.map((profileData, index) => (
              <div className='ddc cp' key={profileData}
                onClick={() => handleClick(index)}
                role='button' onKeyPress={() => handleClick(index)} tabIndex={0}>
                {profileData}
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
