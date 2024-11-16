import React, { useState, useEffect } from "react";
const MyComponents = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Нажатие кнопки = ${count}`;
    })
    return (
        <div>
            <p>{` ${count} /Просто текстик тестик`}</p>
            <button onClick={() => setCount(count + 1)}>Нажми :)</button>
        </div>
    );
}
export default MyComponents;