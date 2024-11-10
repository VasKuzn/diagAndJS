let summ = 0;
function btnClick() {
    const tb = document.getElementById("textBox");
    tb.value = ++summ;
}

const btn = document.getElementById("btnAction");

btn.addEventListener("click", btnClick);
