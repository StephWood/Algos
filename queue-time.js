const queueTime = (customers, n) => {
  const tills = new Array(n).fill(0);

  customers.forEach(customer => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });
  return Math.max(...tills);
};

console.log(queueTime([10, 3, 2, 2], 2));
