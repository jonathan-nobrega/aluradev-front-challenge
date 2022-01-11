import Header from '../components/Header'
import Menu from '../components/Menu'

export default function EditorPage() {
    return (
        <>
            <Header />
            <div className="editor-page">
                <Menu />
                <div className="codeSpace">
                    <div className="codeBox">
                        <div className="codeBox-editor">
                            <div className="codebox-editor-allCircles">
                                <div className="codeBox-editor-circle" style={{ "background": "green" }}></div>
                                <div className="codeBox-editor-circle" style={{ "background": "orange" }}></div>
                                <div className="codeBox-editor-circle" style={{ "background": "green" }}></div>
                            </div>
                            <textarea className="codeBox-editor-input" placeholder="escreva seu codigo"></textarea>
                        </div>
                    </div>
                    <div className="button-highlight">
                        <a href="localhost:3000">Visualizar com o highlight</a>
                    </div>
                </div>
                <div className="codeInfo">
                    <p className="menu-title">SEU PROJETO</p>
                    <input className="codeInfo-text" type="text" placeholder="Nome do seu projeto" />
                    <textarea className="codeInfo-text" type="text" rows="3" placeholder="Descrição do seu projeto"></textarea>
                    <p className="menu-title">PERSONALIZAÇÃO</p>
                    <div className="codeInfo-personalize">
                        <select className="codeInfo-dropdown" id="language" name="Language">
                            <option value="javascript">JavaScript</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                        </select>
                        <select className="codeInfo-dropdown" id="color" name="Color">
                            <option style={{ "background": "red" }} value="red">Vermelho</option>
                            <option style={{ "background": "blue" }} value="blue">Azul</option>
                            <option style={{ "background": "green" }} value="green">Verde</option>
                            <option style={{ "background": "yellow" }} value="yellow">Amarelo</option>
                        </select>
                    </div>
                    <div className="button-saveProject">
                        <a href="localhost:3000" style={{ "color": "black" }}>Salvar projeto</a>
                    </div>
                </div>
            </div>
        </>
    )
}