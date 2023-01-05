const textarea = document.getElementById("textarea");
const buttonEncrypt = document.getElementById("encrypt");
const buttonDescrypt = document.getElementById("descrypt");
const contentMain = document.getElementById("content-main");
const contentDescrypt = document.getElementById("content-descrypt");
const text = document.getElementById("text");
const copy = document.getElementById("copy");



buttonEncrypt.onclick = ()=>{
    
    const encrypt = textarea.value.replace(/a|e|i|o|u/gi, (value)=>{
        if (value === "a") {
            return "ai"
        }else if(value === "e") {
            return "enter"
        }else if (value === "i") {
            return "imes"
        }else if (value === "o") {
            return "ober"
        }else if (value === "u") {
            return "ufat"
        }
    })
    contentMain.classList.add("none");
    contentDescrypt.classList.remove("none");
    contentDescrypt.classList.add("active");
    text.innerHTML = encrypt;

}

buttonDescrypt.onclick = () => {

    const descrypt = textarea.value.replace(/ai|enter|imes|ober|ufat/gi, (value)=>{
        if (value === "ai") {
            return "a"
        }else if(value === "enter") {
            return "e"
        }else if (value === "imes") {
            return "i"
        }else if (value === "ober") {
            return "o"
        }else if (value === "ufat") {
            return "u"
        }
    })

    contentMain.classList.add("none");
    contentDescrypt.classList.remove("none");
    contentDescrypt.classList.add("active");
    text.innerHTML = descrypt;
}

copy.onclick = () => {
    
    text.select()
    navigator.clipboard.writeText(text.value)
    
}