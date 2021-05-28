//select options
export let ageOptions = [''];
for (let index = 5; index <= 100; index++) {
    ageOptions.push(index);
}

let grades = [''];
for (let index = 1; index <= 12; index++) {
    grades.push(`${index}º`);
}

const gradesArr = grades.concat(['Universidade', 'Aluno externo'])
export {gradesArr}