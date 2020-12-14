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
function getStocks () {
    ApiConnector.getStocks (response => {
    if (response.success) {
        rates.clearTable();
        rates.fillTable(response.data);
    }
})
}
getStocks();
setInterval(getStocks, 60000)

//Операции с деньгами
//пополнение баланса
let money = new MoneyManager ();
money.addMoneyCallback = data => {
    ApiConnector.addMoney(data, response => {
        if(response.success) {
            ProfileWidget.showProfile(response.data);
            money.setMessage(response.success, "Ваш счет пополнен");
        }
        else {
            money.setMessage(response.success, response.error);
        }
    })
};

//конвертирование валюты
moneyManager.conversionMoneyCallback = data => {
    ApiConnector.convertMoney(data, response => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response.success, "Валюта сконвертирована");
        }
        else {
            moneyManager.setMessage(response.success, response.error);
        }
    })
}

//перевод валюты
moneyManager.sendMoneyCallback = data => {
    ApiConnector.transferMoney(data, response => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response.success, "Перевод средств выполнен");
        }
        else {
            moneyManager.setMessage(response.success, response.error);
        }
    })
}
//Работа с избранным

