
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
let booleano = true

box1.addEventListener('click', function () {
    const h1 = document.querySelector('#box1>h2')
    const p = document.querySelector('#box1>p')
    let i = document.querySelector('#box1 h2>i')
    if (booleano === true) {
        p.innerText = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        i.style.transform = 'rotate(180deg)'
        h1.style.fontWeight = '700'
        booleano = false
    } else if (booleano === false) {
        p.innerText = ''
        i.style.transform = 'rotate(0deg)'
        h1.style.fontWeight = '400'
        booleano = true
    }
})
box2.addEventListener('click', function () {
    const h2 = document.querySelector('#box2>h2')
    const p = document.querySelector('#box2>p')
    let i = document.querySelector('#box2 h2>i')
    if (booleano === true) {
        p.innerText = "No more than 2GB. All files in your account must fit your allotted storage space."
        i.style.transform = 'rotate(180deg)'
        h2.style.fontWeight = '700'
        booleano = false
    } else if (booleano === false) {
        p.innerText = ''
        i.style.transform = 'rotate(0deg)'
        h2.style.fontWeight = '400'
        booleano = true
    }
})
box3.addEventListener('click', function () {
    const h3 = document.querySelector('#box3>h2')
    const p = document.querySelector('#box3>p')
    let i = document.querySelector('#box3 h2>i')
    if (booleano === true) {
        p.innerHTML = "Click “Forgot password” from the login page or “Change password” from your profile page. <br /> A reset link will be emailed to you."
        i.style.transform = 'rotate(180deg)'
        h3.style.fontWeight = '700'
        booleano = false
    } else if (booleano === false) {
        p.innerHTML = ''
        i.style.transform = 'rotate(0deg)'
        h3.style.fontWeight = '400'
        booleano = true
    }
})
box4.addEventListener('click', function () {
    const h4 = document.querySelector('#box4>h2')
    const p = document.querySelector('#box4>p')
    let i = document.querySelector('#box4 h2>i')
    if (booleano === true) {
        p.innerText = "Yes! Send us a message and we’ll process your request no questions asked."
        i.style.transform = 'rotate(180deg)'
        h4.style.fontWeight = '700'
        booleano = false
    } else if (booleano === false) {
        p.innerText = ''
        i.style.transform = 'rotate(0deg)'
        h4.style.fontWeight = '400'
        booleano = true
    }
})
box5.addEventListener('click', function () {
    const h5 = document.querySelector('#box5>h2')
    const p = document.querySelector('#box5>p')
    let i = document.querySelector('#box5 h2>i')
    if (booleano === true) {
        p.innerText = "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        i.style.transform = 'rotate(180deg)'
        h5.style.fontWeight = '700'
        booleano = false
    } else if (booleano === false) {
        p.innerText = ''
        i.style.transform = 'rotate(0deg)'
        h5.style.fontWeight = '400'
        booleano = true
    }
})