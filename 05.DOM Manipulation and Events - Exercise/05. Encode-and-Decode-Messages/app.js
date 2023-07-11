function encodeAndDecodeMessages() {
    let [encodeBtn,decodeBtn] = Array.from(document.querySelectorAll("#main button"));
    let text = Array.from(document.querySelectorAll("#main textarea"));
    encodeBtn.addEventListener("click",encodeAndSend)
    decodeBtn.addEventListener("click",decodeAndRead)
    function transformText(text,cb){
        return text.split('').map(cb).join('')
    }
    function prevChar(c){
        return String.fromCharCode(c.charCodeAt(0)-1)
    }

    function nextChar(c){
        return String.fromCharCode(c.charCodeAt(0)+1)

    }

    function encodeAndSend(e){
        text[1].value = transformText(text[0].value,nextChar)
        text[0].value = ''
    }
    function decodeAndRead(e){
        text[1].value = transformText(text[1].value,prevChar)
    }
}