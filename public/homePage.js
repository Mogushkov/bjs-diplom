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
let rates = new RatesBoard();
function getStock () {
    ApiConnector.getStock (response => {
    if (response.success) {
        rates.clearTable();
        rates.fillTable(response.data);
    }
})
}
getStock();
setInterval (getStock, 20000)
//Операции с деньгами

//Работа с избранным

