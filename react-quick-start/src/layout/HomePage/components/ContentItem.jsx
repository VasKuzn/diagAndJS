const ContentItem = (props) => {
    return (
        <div>
            {props.setOfLabel.map((item, index) =>
                <div className="container col-10">
                    <div className="card">
                        <img src={`https://picsum.photos/seed/${index}/200`} className="card-img-top" alt="Какой-то текст" />
                        <div className="card-body">
                            <h5 className="card-title">{item.cardTitle}</h5>
                            <p className="card-text">{item.cardText}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ContentItem;