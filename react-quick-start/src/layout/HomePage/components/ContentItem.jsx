const ContentItem = (props) => {
    return (
        <div>
            {props.setOfLabel.map((item, index) =>
                <div key={item.id} className="card m-3">
                    <img src={`http://via.placeholder.com/640x${300 + index}`} className="card-img-top" alt="Какой-то текст" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title.slice(0, 30)}</h5>
                        <p className="card-text">{item.body.slice(0, 50)}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ContentItem;