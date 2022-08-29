'use script';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let expenseName1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expenseValue1 = +prompt("Во сколько обойдется?", ""),
    expenseName2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expenseValue2 = +prompt("Во сколько обойдется?", "");

let appData = {
    budjet : money,
    timeDate : time,
    expenses : {
        expenseName1 : expenseValue1,
        expenseName2 : expenseValue2
    }
};

alert(appData.budjet/30);