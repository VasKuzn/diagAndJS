const HeaderItem = (props) => {
    return (
        <div>
            <h1>{props.headerValue}</h1>
            <h1>{props.headerName} {props.headerSurname}</h1>
        </div>
    );
}
export default HeaderItem;