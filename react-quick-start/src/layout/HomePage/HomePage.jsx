import ContentItem from "./components/ContentItem";
import FooterItem from "./components/FooterItem";
import HeaderItem from "./components/HeaderItem";

const HomePage = () => {
    const value = "Привет из JS хахах";
    const name = "Василий";
    const surname = "Кузнецов";
    const arr = [{ id: 1, cardTitle: "Заголовок карточки 1", cardText: "описание 1" },
    { id: 2, cardTitle: "Заголовок карточки 2", cardText: "описание 2" },
    { id: 3, cardTitle: "Заголовок карточки 3", cardText: "описание 3" },
    ];
    return (
        <div>
            <HeaderItem headerValue={value} headerName={name} headerSurname={surname} />
            <ContentItem setOfLabel={arr} />
            <FooterItem />
        </div>
    );
}
export default HomePage;