let display=document.querySelector(".sid")
console.log(display)

let btn=document.querySelector(".vtn")

function btncl(){
    console.log("Function invoked")
    display.style.opacity=1
}

btn.addEventListener("click",btncl)
