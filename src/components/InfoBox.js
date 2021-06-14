function InfoBox({children, boxColor, headerText, textColor}) {


    return (
        <div className="info-container" style={{backgroundColor: `${boxColor}`}}>
            <div className="box-content-container">
                <p className="font box-header-font" style={{color: `${textColor}`}}>{headerText}</p>
                <div className="section-break break1"></div>
                <div className="box-children">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default InfoBox;