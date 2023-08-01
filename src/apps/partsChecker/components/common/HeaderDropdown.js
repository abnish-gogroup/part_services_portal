import React from 'react';
import '../../../../stylesheets/common/header.scss';

function HeaderDropdown(props) {
  const { updateLanguageInCookies, langParam, countryFlag, translation, altImg } = props;

  return (
    <div className='ddc cp' 
      onClick={() => updateLanguageInCookies(langParam)} 
      onKeyPress={() => updateLanguageInCookies(langParam)} role='button' tabIndex={0}>
      <img src={countryFlag} alt={altImg} width='40px' height="20px" />
      <span className='pd_10'>{translation}</span>
    </div>
  )
}

export default HeaderDropdown;
