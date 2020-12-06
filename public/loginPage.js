"use strict";
let user = new UserForm();
user.loginFormCallback = function(data) {
    ApiConnector.login({login, password}, callback => callback.success ? location.reload() : setLoginErrorMessage(message));
}