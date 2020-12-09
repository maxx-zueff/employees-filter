export const byName = function (employees) {
  return employees.sort(function (a, b) {
    let first = a.name;
    let second = b.name;

    if (first > second) return 1;
    else if (second > first) return -1;
    return 0;
  });
};

export const byBirthday = function (employees) {
  return employees.sort(function (a, b) {
    let first = new Date(a.joinedDate);
    let second = new Date(b.joinedDate);
    return first - second;
  });
};

export const byNameReverce = function (employees) {
  return byName(employees).reverse();
};

export const byBirthdayReverce = function (employees) {
  return byBirthday(employees).reverse();
};
