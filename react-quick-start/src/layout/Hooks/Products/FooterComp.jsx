const FooterComp = (props) => {
    return (
        <div>
            <p>&copy; Авторские права мои {(new Date()).getFullYear() + 25}</p>
        </div>
    );
}
export default FooterComp;