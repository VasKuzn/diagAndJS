let summ = 0;
function btnClick() {
    const tb = document.getElementById("textBox");
    tb.value = ++summ;
}

const btn = document.getElementById("btnAction");

btn.addEventListener("click", btnClick);

//---------------------

const t = document.getElementById("textContainer");
const b = document.getElementById("btnChange");
function ChangeText() {
    t.innerHTML = "<strong>Тут теперь другой текст :)</strong>";
}
b.addEventListener("click", ChangeText);
// ------------------
const bt = document.getElementById("btnJoke");
let x = 400;
let y = 20;

bt.addEventListener("click", function () {
    const test = document.getElementsByTagName("div");
    for (const unit of test) {
        unit.style.transition = "background-color 1s ease, width 1s ease-in-out, height 1s ease-in-out";
        unit.style.fontSize = "30px";
        unit.style.color = "white";
        unit.style.display = "flex";
        unit.style.justifyContent = "center";
        unit.style.alignItems = "center";
        unit.style.backgroundColor = "blue";

        // Задержка перед изменением размеров
        setTimeout(() => {
            unit.style.width = `${x}px`;
            unit.style.height = `${y}px`;
            x += 200;
            y += 10;
        }, 500);
    }
    // Уберите сброс значений x и y, чтобы они сохранялись для следующего нажатия
});
