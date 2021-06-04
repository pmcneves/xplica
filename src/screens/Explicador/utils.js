///////select options

//ages
export let ageOptions = [''];
for (let index = 5; index <= 100; index++) {
    ageOptions.push(index);
}

//grades
let grades = [''];
for (let index = 1; index <= 12; index++) {
    grades.push(`${index}º`);
}
const gradesArr = grades.concat(['Universidade', 'Aluno externo'])
export {gradesArr}

//duration per week
let durationPerWeek = ['', '1', '1.5', '2', '2.5', '3', '3.5', '4', '>4']
durationPerWeek.forEach((hour,i) => {
    if (hour !== '') {
        durationPerWeek[i] = `${hour}h`
    }
})

export {durationPerWeek}