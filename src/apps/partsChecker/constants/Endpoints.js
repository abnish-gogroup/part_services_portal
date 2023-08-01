export const ROOT_URL = '/';
export const USER_DASHBOARD_URL = '/dashboard';

// URLs
export const ALL_USERS_URL = "/dashboard/users";
export const USER_PROFILE_URL = `${ALL_USERS_URL}/:id`;
export const USER_REPORT_URL = '/dashboard/report';
export const ACCOUNT_DETAILS_URL = '/dashboard/accounts';
export const PARTS_VERIFY_URL = '/dashboard/parts-verify';

// APIs
export const USERS_API = '/api/v1/users';
export const GET_CURRENT_USER_API = '/api/v1/users/fetch_current_user';
export const USER_SIGNOUT_API = '/users/sign_out';
export const GET_VIN_HISTORY = '/api/v1/logs/fetch_vin_history';
export const GET_REPORT_DATA = '/api/v1/logs/fetch_report_data';
export const EXPORT_VIN_HISTORY = '/api/v1/logs/export_vin_history';
export const SERVICES = '/api/v1/services';
export const ACCOUNTS = '/api/v1/accounts';
export const SHOW_ACCOUNT = `${ACCOUNTS}/:id`;

// environment
export const STAGING_URL = 'https://staging.goparts.tech/parts-checker/ca45593cbbdf';
export const PROD_URL = 'https://goparts.tech/parts-checker/ca45593cbbdf';
export const GP_PARTS_CHECKER = '/api/v1/gt/parts_checker';
