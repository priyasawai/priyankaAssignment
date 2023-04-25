const neg = document.querySelector('.negative');
const pos = document.querySelector('.positive');
const val = document.querySelector('.change_quantity');
const neg1 = document.querySelector('.negative-2');
const pos1 = document.querySelector('.positive-2');
const val1 = document.querySelector('.change_quantity-2');
const circle = document.querySelector('.circle');
const next = document.querySelector('.next');
const pay = document.querySelector('.payment');

const adress = document.querySelector('.adress');
const adress2 = document.querySelector('.adress-2');

// ------delete-----
const delt1 = document.querySelector('.item-1');
const delt2 = document.querySelector('.item-2');
const ship_adres = document.getElementsByName('adress');
console.log(ship_adres)
const bill_adres = document.getElementsByName('adress-2');


delt1.addEventListener('click', () => {
    document.querySelector('.item1').style.display = 'none';
    val.innerText = '0';
    const a = +circle.innerText;
    circle.innerText = a - 1;
    if (a == 1) {
        next.style.display = 'none';
    }
})
delt2.addEventListener('click', () => {
    document.querySelector('.item2').style.display = 'none';
    val1.innerText = '0';
    const a = +circle.innerText;
    circle.innerText = a - 1;
    if (a == 1) {
        next.style.display = 'none';
    }
})

neg.addEventListener('click', () => {
    let data = +val.textContent;
    if (data > 1) {
        data--;
    }
    val.textContent = data;
})
pos.addEventListener('click', () => {
    let data = +val.innerHTML;
    console.log(data);
    console.log(typeof data);
    data++;
    val.innerHTML = data;
})

neg1.addEventListener('click', () => {
    let data = +val1.textContent;
    if (data > 1) {
        data--;
    }
    val1.textContent = data;
})
pos1.addEventListener('click', () => {
    let data = +val1.innerHTML;
    console.log(data);
    console.log(typeof data);
    data++;
    val1.innerHTML = data;
});

// ----------------Adress-------------

next.addEventListener('click', () => {
    adress.style.display = 'block';
    document.querySelector('.items').style.display = "none";
    adress2.style.display = 'block';
    document.querySelector('.header').style.display = "none";
    pay.style.display = 'block';
    let show_shipAdd;
    let checked1 = false;
    for(let i=0; i<ship_adres; i++){
        if(ship_adres[i].checked){
           
        }
    }


})
// ---billing----------


// next.addEventListener('click',()=>{
//  adress.style.display = 'block';
//  document.querySelector('.items').style.display = "none";
// })

const ship = document.querySelector('.add');
const bill = document.querySelector('.added');
const ship_add = document.querySelector('.ship_add');
ship.addEventListener('click', () => {

    const input = document.createElement('input');
    const btn = document.createElement('button');
    btn.textContent = 'add';
    adress.append(input);
    adress.append(btn);
    ship.disabled = true;
    btn.addEventListener('click', () => {
        const data = input.value;
        const box = document.createElement('input');
        box.type = "radio";
        box.name = "adress";
        const span = document.createElement('span');
        span.style.fontSize = '20px'
        span.innerText = data;
        const div = document.createElement('div');
        input.style.display = "none";
        btn.style.display = "none";
        adress.insertBefore(div, ship);
        div.append(box);
        div.append(span);
        ship.disabled = false;
    })
});

// -------billing-------
bill.addEventListener('click', () => {

    const input = document.createElement('input');
    const btn = document.createElement('button');
    btn.textContent = 'add';
    adress2.append(input);
    adress2.append(btn);
    bill.disabled = true;
    btn.addEventListener('click', () => {
        bill.disabled = false;
        const data = input.value;
        const box = document.createElement('input');
        box.type = "radio";
        box.name = "adress-2";
        // const span = document.createElement('span');
        // span.style.fontSize = '20px'
        box.innerText = data;
        const div = document.createElement('div');
        input.style.display = "none";
        btn.style.display = "none";
        adress2.insertBefore(div, bill);
        div.append(box);
        // div.append(span);

    })
});

// ------payment-------------

pay.addEventListener('click', () => {
    document.querySelector('.card').style.display = 'block';
    document.querySelector('.adress_shop').style.display = 'none';
    pay.style.display = 'none';
    let total_Amount;
    if (val !== null && val1 !== null) {
        let m1 = +val.innerText;
        let m2 = +val1.innerText;
        total_Amount = m1 * 1500 + m2 * 600;

    } else if (val !== null && val1 === null) {
        let m1 = +val.innerText;
        total_Amount = m1 * 1500
    } else if (val === null && val1 !== null) {
        let m1 = +val1.innerText;
        total_Amount = m1 * 600
    } else {
        total_Amount = 0;
        next.disabled = 'true';
    }

    document.querySelector('.show_pay').innerHTML = `Payment :- ${total_Amount}/-`;
})

const sbt = document.querySelector('.submit');
sbt.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.card').style.display = 'none';


    document.querySelector('.end').innerText = 'Thank you for your order';
    document.querySelector('.end').style.display = 'block';
    document.querySelector('.end').style.margin = '60px';

})
