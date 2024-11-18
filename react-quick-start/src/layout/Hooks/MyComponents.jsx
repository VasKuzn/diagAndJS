import React, { useState, useEffect } from "react";
import HeaderComp from "./Products/HeaderComp";
import ContentComp from "./Products/ContentComp";
import FooterComp from "./Products/FooterComp";

const MyComponents = () => {
    const users = [
        {
            id: 1,
            name: `Vasily`,
            surname: `Kuznetsov`
        }];
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Нажатие кнопки = ${count}`;
    })
    return (
        <div>
            <HeaderComp people={users} />
            <ContentComp />
            <FooterComp />
            <p>{` ${count} /Просто текстик тестик`}</p>
            <button onClick={() => setCount(count + 1)}>Нажми :)</button>
        </div>
    );
}
export default MyComponents;