let home = document.getElementById("home")
let guest = document.getElementById("guest")
let count = 0
let set = 0
function increment1() {
    count +=  1
    home.textContent = count
}
function increment2() {
    count +=  2
    home.textContent = count
}
function increment3() {
    count +=  3
    home.textContent = count
}

function add1() {
    set +=  1
    guest.textContent = set
}
function add2() {
    set +=  2
    guest.textContent = set
}
function add3() {
    set +=  3
    guest.textContent = set   
}

function reset1(){
    home.textContent = 0
    count = 0
}
function reset2(){
    guest.textContent = 0
    set = 0
}
