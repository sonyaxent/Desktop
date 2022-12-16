function getYears(amount, percent, limit) {
  let years = 0;
  let newAmount = amount;

  do {
    const interest = newAmount * percent / 100;

    newAmount += interest;
    years += 1;
    if (newAmount >= limit && years > 1) {
      years -= 1;
      break;
    }

    if (newAmount >= limit && years === 1) {
      break;
    }
  } while (newAmount <= limit);

  return years;
}


console.log(getYears(1800, 11, 1998));