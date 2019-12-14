// Получить общую сумму баланса (поле balance) всех пользователей.
import users from './users.js';

const calculateTotalBalance = users => {
    return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916