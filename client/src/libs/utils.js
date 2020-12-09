const getRoleName = function (role) {
  let name = {
    driver: "Курьер",
    waiter: "Официант",
    cook: "Повар",
    "*": "Все должности",
  };

  return name[role];
};

export default getRoleName;
