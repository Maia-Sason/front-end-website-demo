function Parallex ({image, title, content}) {
    <div>
        <div className="parallax-content">
            <img src={`${image}`}></img>
        </div>
        <div className="parallax-body">
            <h2 className="parallax-title">{title}</h2>
            <p className="parallax-p">{content}</p>
        </div>
    </div>
}