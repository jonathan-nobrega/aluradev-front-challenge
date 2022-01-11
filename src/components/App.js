import '../css/App.css'

export default function App() {
  return (
    <>
      <div>
        <div className="header-container">
          <div className="header-logo">
            <img src="img/Logo.svg" alt='logo' />
          </div>
          <div className="header-search">
            <input className="header-search-input" type="text" placeholder="Busque por algo" />
          </div>
          <div className="header-user">
            <img src="img/Photo.png" alt='user' />
            <a style={{ "margin-left": "15px" }} href="localhost:3000">Jony</a>
          </div>
          <div className="header-icons">
            <img className="header-icon-search" src="img/Search.svg" alt='search' />
            <img className="header-icon-menu" src="img/Menu.svg" alt='menu' />
          </div>

        </div>
      </div><div className="page">
        <div className="menu">
          <p className="menu-title">MENU</p>
          <div className="menu-item-selected">
            <div className="menu-item-selected-box">
              <img className="menu-item-box-logo" src="img/Editor de código.svg" alt='editor-de-codigo' />
            </div>
            <a href="localhost:3000">Editor de código</a>
          </div>
          <div className="menu-item">
            <div className="menu-item-box">
              <img className="menu-item-box-logo" src="img/Comunidade.svg" alt='comunidade' />
            </div>
            <a href="localhost:3000">Comunidade</a>
          </div>
        </div>
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
  );
}
