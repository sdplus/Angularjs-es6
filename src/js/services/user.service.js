export default class User {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

    // Object to store our user propeties
    this.current = null;
  }

  // Try to authenitica by registering or logging in
  attemptAuth(type, credentials) {
    let route = (type === 'login') ? '/login' : '';
    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      methoud: 'POST',
      data: {
        user: credentials
      }
    }).then (
      // on success...
      (res) => {
        // Store the user's info for easy lookup
        this.current = res.data.user;

        return res;
      }
    );
  }
}
