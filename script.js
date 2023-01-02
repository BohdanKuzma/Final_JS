// Створення змінних
let topblock = document.querySelector('.topblock');
let bot = document.querySelector('.textarea');

let add = document.querySelector('.add');
let save = document.querySelector('.save');

let edit = document.querySelector('.edit')
let style = document.querySelector('.style')

let style_form = document.querySelector('.style_form')

let select = document.querySelector('.ffselect')

let bold = document.querySelector('.bold')
let cursive = document.querySelector('.cursive')

let btn_color = document.querySelector('.btn_color')
let btn_bg = document.querySelector('.btn_bg')

let add_table = document.querySelector('.add_table')
let add_list = document.querySelector('.add_list')

let create_table = document.querySelector('.btn_create_table')
let create_list = document.querySelector('.btn_create_list')

// Клік кнопки edit
edit.addEventListener('click', () => {
    bot.value = topblock.innerHTML;
    bot.classList.add('active');
    add.classList.add('active');
    save.classList.add('active');
    style_form.classList.remove('active');
})

// Клік кнопки save
save.addEventListener('click', () => {
    topblock.innerHTML = bot.value;
    bot.classList.remove('active');
    add.classList.remove('active');
    save.classList.remove('active');

})

// Клік кнопки style
style.addEventListener('click', () => {
    style_form.classList.add('active');
    bot.classList.remove('active');
    add.classList.remove('active');
    save.classList.remove('active');

})

// Клік радіобатонів для вибору Font-size
style_form.addEventListener('click', () => {
    if (event.target.classList == 'rad_btn') {
        topblock.style.fontSize = event.target.value;
    }

})

select.addEventListener('change', () => {
    topblock.style.fontFamily = select.value;

})

// Клік на форму 
style_form.addEventListener('click', () => {

    if (event.target.classList == 'checkbox_style bold') {
        // Перевірка чи є клас checkbox_style bold
        if (bold.checked) {
            // Як що є то додаєм клас bold_style
            topblock.classList.add('bold_style')
        } else {
            // Як що нема то видаляєм клас bold_style
            topblock.classList.remove('bold_style')
        }
    }

    if (event.target.classList == 'checkbox_style cursive') {
        // Перевірка чи є клас checkbox_style cursive
        if (cursive.checked) {
            // Як що є то додаєм клас cursive_style
            topblock.classList.add('cursive_style')
        } else {
            // Як що нема то додаєм клас cursive_style
            topblock.classList.remove('cursive_style')
        }
    }

})

// Створення масиву кольорів
let arrColors = ['red', 'violet', 'tomato', 'grey', 'blue', 'green', 'yellow', 'purple', 'cadetblue']
// Цикл for який проганяє кожен елемент і дає йому колір
for (let i = 0; i < document.querySelector('.colortext').children.length; i++) {
    document.querySelector('.colortext').children[i].style.background = arrColors[i]
    document.querySelector('.colortext').children[i].addEventListener('click', () => {
        topblock.style.color = event.target.style.backgroundColor
        document.querySelector('.colortext').classList.remove('active_flex')
    })
}

// Клік для появи кольорів тексту
btn_color.addEventListener('click', () => {
    document.querySelector('.colortext').classList.add('active_flex')
})

// Цикл for який проганяє кожен елемент і дає йому колір
for (let i = 0; i < document.querySelector('.backcolor').children.length; i++) {
    document.querySelector('.backcolor').children[i].style.background = arrColors[i]
    document.querySelector('.backcolor').children[i].addEventListener('click', () => {
        topblock.style.backgroundColor = event.target.style.backgroundColor
        document.querySelector('.backcolor').classList.remove('active_flex')
    })
}
// Клік для появи кольору заднього фону
btn_bg.addEventListener('click', () => {
    document.querySelector('.backcolor').classList.add('active_flex')
})
// Клік кнопки add
add.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none'
    document.querySelector('.addSection').classList.add('active_block');
})
// Клік кнопки table 
add_table.addEventListener('click', () => {
    document.querySelector('.table_construktor').classList.add('active_block');
    document.querySelector('.list_construktor').classList.remove('active_block');
})

// Клік кнопки list 
add_list.addEventListener('click', () => {
    document.querySelector('.list_construktor').classList.add('active_block');
    document.querySelector('.table_construktor').classList.remove('active_block');

})

// Клік для створення таблиці 
create_table.addEventListener('click', () => {
    // Створення змінних
    let countTr = document.querySelector('.table1').value
    let countTd = document.querySelector('.table2').value
    let widthTr = document.querySelector('.table3').value
    let heightTr = document.querySelector('.table4').value
    let widthBorder = document.querySelector('.table5').value
    let typeBorder = document.querySelector('.table6').value
    let colorBorder = document.querySelector('.table7').value
    // Створюємо змінну td в яку будем записувати
    let td = "";

    bot.value += "<table><tbody>"
    // В циклі for пушимо змінні в td
    for (let a = 0; a < countTd; a++) {
        td += `<td style="width:${widthTr}px; height:${heightTr}px; border-width:${widthBorder}px; border-style:${typeBorder}; border-color: ${colorBorder}; "></td>`;
    }
    for (let b = 0; b < countTr; b++) {
        bot.value += `<tr>${td}</tr>`
    }
    bot.value += `</tbody></table>`;
    document.querySelector('.container').style.display = 'flex'
    document.querySelector('.addSection').classList.remove('active_block');


})
// Клік для створення списку
create_list.addEventListener('click', () => {
    let countLi = document.querySelector('.table8').value
    let typeMarks = document.querySelector('.table9').value

    bot.value += `<ul style="list-style-type: ${typeMarks}">`;

    for (let a = 0; a < countLi; a++) {
        bot.value += `<li>item ${a+1}</li>`
    }
    bot.value += `</ul>`
    document.querySelector('.container').style.display = 'flex'
    document.querySelector('.addSection').classList.remove('active_block');
})