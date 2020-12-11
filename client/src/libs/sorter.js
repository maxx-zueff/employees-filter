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

  let list = []
  let result = []
  employees.map((employee) => {
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let timestamp = Date.parse(employee.birthday);
    if (isNaN(timestamp) === false) {
      employee.birthday = new Date(employee.birthday.replace(pattern,'$3-$2-$1'));
    }
    else {
      employee.birthday = new Date();  
    }
    list.push(employee)   

  })

  list.sort(function (a, b) {
    let first = new Date(a.birthday);
    let second = new Date(b.birthday);
    return first - second;
  });

  console.log(list)

  list.map((employee) => {


    let dateStr = employee.birthday.toISOString();
    let date = dateStr.slice(0, 10).split('-')

    // let month = employee.birthday.getMonth()
    // let year = employee.birthday.getFullYear()

    employee.birthday = `${date[2]}.${date[1]}.${date[0]}`
    result.push(employee)   
  })

  return result;

};

export const byNameReverce = function (employees) {
  return byName(employees).reverse();
};

export const byBirthdayReverce = function (employees) {
  return byBirthday(employees).reverse();
};
