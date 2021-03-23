// borar del localstorge
localStorage.removeItem('producto');

// actualizar del localStorage
const mesesArray = JSON.parse( localStorage.getItem('meses') );
console.log(mesesArray);

mesesArray.push('Abril','Mayo');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));

// limpiar localStorage
localStorage.clear();
