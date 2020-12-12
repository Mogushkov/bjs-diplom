"use strict";

//LOGUOT
let logout = new LogoutButton();

logout.action = function() {
    ApiConnector.logout(response => {
        if(response.success){
            location.reload();
        };
    })
}
//Получение информации о пользователе
ApiConnector.current(response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
})
//Получение текущих курсов валюты

//Операции с деньгами

//Работа с избранным

