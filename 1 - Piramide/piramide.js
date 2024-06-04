let character = "#";
const count = 8;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) +
            character.repeat(2 * rowNumber - 1) +
            " ".repeat(rowCount - rowNumber);
}

for(let i = 1; i<= count; i++)
{
    if(inverted){
        rows.unshift(padRow(i, count));
    }else{
        rows.push(padRow(i, count));
    }
}

const lista = document.getElementById('lista')
const col = document.querySelector('.col')


const arrayElement = ['uno', 'dos', 'tres'];
// arrayElement.forEach(item =>{
//     const li = document.createElement('li')
//     li.textContent = item
//     lista.appendChild(li)
// })
arrayElement.forEach(item =>{
    lista.innerHTML += `<li>${item}</li>`
})

let result = "";

for(const row of rows){
    result = result + "\n" + row;
}

console.log(result);


