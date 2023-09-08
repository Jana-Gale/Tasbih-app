let input = document.querySelector("input");

let option = document.querySelector("option")
    // console.log(option)
let buttons = document.querySelectorAll("button");
let reset = 0;
let number = "99+"
    // console.log(buttons)




//count funtion
var counter = 0;

function countClick() {
    counter = counter + 1;
    input.value = counter
        // output.innerHTML=counter

}
//option funtion
function optionCount(message) {
    option.innerHTML = message;
}






//event 

buttons.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener("click", () => {
        if (btn.classList.contains("conter")) {
            countClick()
            if (counter == 1) {
                optionCount("Subhanallah")
            } else if (counter == 34) {
                optionCount("Alhamdulillah")

            } else if (counter == 67) {
                optionCount("Allahuakbar")
            } else if (counter == 99) {
                counter = 0
            }


            //reset button and number button

        } else if (btn.classList.contains("reset")) {
            input.value = reset
            counter = 0;
            optionCount("")
        } else {
            input.value = number
            counter = 0;
            optionCount("")
        }


    })
})