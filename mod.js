
/**
 * 
 * @param {number} numb 
 * @param {number} power doit faire
 * @returns {number}
 */
const pow = (numb, power = 2) => {
 numb = parseInt(numb);
 power = parseInt(power);
 n = 1;
 while (n < power) {
   numb *= numb;
   n++;
   console.log(n, numb);
 }
 alert(numb);
 return numb;
};

const a = pow(2, 5)