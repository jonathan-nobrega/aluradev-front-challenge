export default function codeRecord() {
    return (
        <>
            <div className="codeRecord">
                <div className="codeRecord-code">
                    <div className="codeBox-editor">
                        <div className="codebox-editor-allCircles">
                            <div className="codeBox-editor-circle" style={{ "background": "green" }}></div>
                            <div className="codeBox-editor-circle" style={{ "background": "orange" }}></div>
                            <div className="codeBox-editor-circle" style={{ "background": "green" }}></div>
                        </div>
                        <textarea className="codeBox-editor-input" placeholder="escreva seu codigo"></textarea>
                    </div>
                </div>
                <div className="codeRecord-details-box">
                    <h1 className="code-title">Titulo do projeto</h1>
                    <p>Essa é a descrição do projeto</p>
                    <div className="codeRecord-details">
                        <div className="codeRecord-details-stats">
                            <img src='img/Comment.svg' alt='comment' style={{ "margin-right": "10px" }} />
                            <p style={{ "margin-right": "10px" }} >10</p>
                            <img src='img/Like.svg' alt='like' style={{ "margin-right": "10px" }} />
                            <p>10</p>
                        </div>
                        <div className="header-user">
                            <img style={{ "marginLeft": "15px" }, {"height": "25px"}} src="img/Photo.png" alt='user' />
                            <a style={{ "marginLeft": "15px" }} href="#">@Jony</a>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}