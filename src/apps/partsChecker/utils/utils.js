// const translationData = window.partsCheckerPanel.partsTranslations;

export function setValueInSessionStorage(key, value) {
  window.sessionStorage.setItem(key, value);
}

// export function getValueFromSessionStorage(key, value) {
//   return window.sessionStorage.getItem(key, value);
// }

// export function setValueToLocalStorage(key, value) {
//   return window.localStorage.setItem(key, value);
// }

// export function getValueFromLocalStorage(key, value) {
//   return window.localStorage.getItem(key, value);
// }

// export function joinTwoString(str1, str2) {
//   if (str1 !== null && str2 !== null) {
//     return str1.concat(' ', str2);
//   }
//   else {
//     return str1;
//   }
// }

// export const ROLE_MAPPING = {
//   system_admin: 0,
//   super_admin: 1,
//   admin: 2,
//   user: 3
// }

// export const ACCESS_TYPE_MAPPING = {
//   Limited: 0,
//   Unlimited: 1
// }

// export const ACCESS_TYPE_CAPS = {
//   limited: 'Limited',
//   unlimited: 'Unlimited'
// }

export const SIDEBAR_MAP = {
  users: 'Users',
  logs: 'Logs',
  reports: 'Reports',
  search: 'Search',
  accounts: 'Accounts'
}

// export const SERVICES_MAP ={
//   parts_checker: 'Parts Checker',
//   parts_linker: 'Parts Linker',
//   vehicle_linker: 'Vehicle Linker',
// }

// // export const OE_MAPPING = {
// //   0: translationData.success,
// //   1: translationData.failed,
// //   2: translationData.superseded,
// //   3: translationData.correctOeNumber,
// //   4: translationData.fitForManufacturer,
// //   5: translationData.smallParts,
// //   6: translationData.noResult,
// //   7: translationData.mountingKitFin,
// //   8: translationData.colorCode
// // }

// export const convertUserRole = (userRole) => {
//   if (userRole.role_name === 'system_admin') {
//     return { role: translationData.systemAdmin, bg: '#DAFBE1', color: '#1C7F37' };
//   }
//   // else if (userRole.role_name === 'super_admin') {
//   //   return { role: translationData.superAdmin, bg: '#c5d9ed', color: '#4f94d4' };
//   // }
//   else if (userRole.role_name === 'admin') {
//     return { role: translationData.admin, bg: '#fff8ca', color: '#9b6700' };
//   }
//   else {
//     return { role: translationData.user, bg: '#fbefff', color: '#8250df' };
//   }
// }

export const LANG_MAPPING = {
  en: 'EN',
  de: 'DE',
  it: 'IT'
}

// export const COUNTRY_CODE_MAPPING = {
//   IT: 'it',
//   DE: 'de',
//   EN: 'en'
// }

// export const VIN_RESULT_MAPPING = {
//   0: translationData.vin_success, 
//   1: translationData.vin_failed
// }

// export const VIN_STATUS_MAPPING = {
//   true: translationData.vin_success,
//   false: translationData.vin_failed
// }

// export function convertDateFormat(date) {
//   let requestDate = date,
//     month = '' + (requestDate.getMonth() + 1),
//     day = '' + requestDate.getDate(),
//     year = requestDate.getFullYear();
//   if (month.length < 2)
//     month = `0${month}`;
//   if (day.length < 2)
//     day = `0${day}`;
//   return [year, month, day].join('-');
// }

// export function handleParamUserData(startDate, endDate, externalClientId, selectUser, setErrorMsg) {
//   let userData = {
//     request_type: 'parts_checker'
//   }
//   if (startDate && startDate !== '') {
//     const from = 'from';
//     const to = 'to';
//     userData[from] = convertDateFormat(startDate);
//     userData[to] = endDate && endDate !== '' ? convertDateFormat(endDate) : null;
//   }
//   if (externalClientId && externalClientId !== '') {
//     const ext_Id = 'external_client_id';
//     userData[ext_Id] = externalClientId;
//   }
//   if (selectUser !== `${translationData.allUsers}` && (externalClientId === '' || externalClientId === null)) {
//     return setErrorMsg({ error: true, errorMsg: translationData.dataNotAvailable })
//   }
//   else {
//     return userData;
//   }
// }

// export function getFormattedRecentData(data) {
//   const dataStored = [];
//   if(!data?.brand){
//     return dataStored;
//   }
//     const dataToSend = {
//       brand: data.brand,
//       partInfo: data.vehicleInfo.oe_numbers,
//       date: new Date(),
//       vin: data.vin,
//       isPartNumberFound: data.isPartNumberFound,
//       isOENumberValid: data.isOENumberValid,
//       countryCode: data.countryCode
//     }
//     dataStored.unshift(dataToSend);
//     return dataStored;
// }
