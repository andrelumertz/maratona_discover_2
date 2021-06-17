/*
Instruções:
- Exibir uma listagem de números de 1 a 100;
- Quando o número for múltiplo de 3, substituir por "Hospital"; 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99.
- Quando o número for múltiplo de 5, substituir por "Moinhos";
- Quando o número for múltiplo de 3 e 5, substituir por "Hospital Moinhos";

Exemplo:
- 1
- 2
- Hospital
- 4
- Moinhos
- Hospital
- 7
- 8
- Hospital
- Moinhos
- 11
- Hospital
- 14
- Hospital Moinhos
- 16
...


*/

// [x] imprimir do numero 1 ao 100
// []  Quando o número for múltiplo de 3, substituir por "Hospital";
// []  Quando o número for múltiplo de 5, substituir por "Moinhos";
for (let i = 1; i < 101; i++) {
    console.log(i);
    if ( i % 3 === 0) {
     console.log('Hospital');
    }
    if ( i % 5 === 0) {
      console.log('Moinhos');
    }
    if ( i % 3 === 0 && i % 5 === 0) {
      console.log('Hospital Moinhos');
    }
}



