export default function codeRecord(props) {
    return (
        <>
            <div className="codeRecord">
                <div className="codeRecord-code" style={{"background": props.color}}>
                    <div className="codeBox-editor">
                        <div className="codebox-editor-allCircles">
                            <div className="codeBox-editor-circle" style={{ "background": "green" }}></div>
                            <div className="codeBox-editor-circle" style={{ "background": "orange" }}></div>
                            <div className="codeBox-editor-circle" style={{ "background": "green" }}></div>
                        </div>
                        <div className="codeBox-editor-input">
                            <p>{props.code}</p>
                        </div>
                    </div>
                </div>
                <div className="codeRecord-details-box">
                    <h1 className="code-title">{props.title}</h1>
                    <p>{props.description}</p>
                    <div className="codeRecord-details">
                        <div className="codeRecord-details-stats">
                            <img src='img/Comment.svg' alt='comment' style={{ "margin-right": "10px" }} />
                            <p style={{ "margin-right": "10px" }} >{props.comments}</p>
                            <img src='img/Like.svg' alt='like' style={{ "margin-right": "10px" }} />
                            <p>{props.likes}</p>
                        </div>
                        <div className="header-user">
                            <img style={{ "marginLeft": "15px" }, { "height": "25px" }} src="img/Photo.png" alt='user' />
                            <a style={{ "marginLeft": "15px" }} href="#">@Jony</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}