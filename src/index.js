module.exports = function reverse (n) {
    let newNumber = n.toString()
    let array = [];
    
    for (let i = newNumber.length - 1; i >= 0; i--) {
      array.push(newNumber[i]);
    }
    let numberReverse = array.join('').split('-').join('');

    return Number(numberReverse);
}
