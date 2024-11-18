import './../../../css/header.css';
const HeaderComp = (props) => {
    return (
        <div className="headercomp">
            <h1>Привет! Друг {props.people[0].name} с фамилией {props.people[0].surname}! Машина рада тебя приветствовать!</h1>
        </div>
    );
}
export default HeaderComp;