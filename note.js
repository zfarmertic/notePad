const btn = document.getElementById("btn")
const parent = document.getElementById("parent")





btn.addEventListener("click", ()=>{
    const textArea = document.createElement("textarea")
    textArea.placeholder = "Empty note"
    textArea.className = "textarea"
    const parentElement = btn.parentNode;
    parentElement.insertBefore(textArea, btn)

    parent.style.cssText = "display:flex; flex-wrap:wrap; justify-content:flexStart; align-items:center; gap:25px; width:80%; margin:auto"

    textArea.addEventListener("dblclick", ()=>{
        textArea.remove();
    })
})




