// fiz buzz - 100 numeros

// multiplos de 3: 3 6 9 12 ... fizz
// multiplos de 5: 5 10 15 20 ... buzz
// 15 30 45 FIZZ BUZZ

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZ BUZZ`);
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if(i % 5 === 0) {
        console.log(`${i} buzz`);
    } else {
        console.log(i);
    }
        
    
}
