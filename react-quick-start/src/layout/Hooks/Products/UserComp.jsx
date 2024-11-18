const UserComp = ({ human }) => {
    return (
        <div className="user">
            <p>{console.log(human)}</p>
            {human.map((h, index) => (
                <div key={index}>
                    <h3>{h.name} {h.surname}</h3>
                    <p>{h.bio}</p>
                    <b>{h.happiness ? `Счастлив :)` : `Не счастлив :(`}</b>
                </div>
            ))}
        </div>
    );
}
export default UserComp;