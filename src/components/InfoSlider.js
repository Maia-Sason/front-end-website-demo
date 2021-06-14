function InfoSlider() {
    return (
        <div className="info-slider-container">
            <div className="info-slider-linkbar">
                <button className="font info-link">Franchising</button>
                <button className="font info-link">Brokerage</button>
                <button className="font info-link">Relocation</button>
                <button className="font info-link">{'Title & Settlement'}</button>
                <button className="font info-link">Leads</button>
                <button className="font info-link">{'Innovation & Technology'}</button>
            </div>
            <div className="info-slider-content">
                <h2 className="block-header info-slider-header">
                    Dolor sunt labore velit incididunt minim irure deserunt voluptate dolor sint ea est do dolore.
                </h2>
                <p className="font info-slider-body">
                Occaecat deserunt nostrud in officia fugiat consectetur. Dolor laborum nostrud consectetur sit excepteur ut. Pariatur esse nisi in nisi sint fugiat nisi dolor irure consequat.
                </p>
                <div className="font info-slider-button"><button>LEARN MORE</button><span className="font"> {`>`} </span></div>
            </div>
        </div>
    )
}

export default InfoSlider