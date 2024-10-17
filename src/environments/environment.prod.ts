import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  // apiUrl: 'https://microsoft/leanoffice/api'
  apiUrl: 'https://demo.test.org.pe/LeanOffice-Api/api'
};
