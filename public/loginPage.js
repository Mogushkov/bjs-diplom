"use strict";
let user = new UserForm();
user.loginFormCallback = function(data) {
    ApiConnector.login(data, response => response.success ? location.reload() : this.setLoginErrorMessage(response.error));
}