// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
//  const { name, years: age, isAdmin = false } = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

let zp = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
    let maxSalary = 0;
    let maxSalaryMan = null;
  const entries = Object.entries(salaries);
    for (const entry of entries) {
        if (maxSalary < entry[1]) {
            maxSalary = entry[1];
            maxSalaryMan = entry[0];
        }
    }
    console.log(`Top Salaryman is ${maxSalaryMan}`);
    return maxSalaryMan;
}

console.log(topSalary(zp));