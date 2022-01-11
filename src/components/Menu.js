import { useEffect } from "react"

export default function Menu() {

    let editorItem = "menu-item-selected"
    let editorItemBox = "menu-item-selected-box"
    let communityItem = "menu-item"
    let communityItemBox = "menu-item-box"
    function chooseStyle() {
        if (window.location.pathname === "/") {
            console.log('entrou')
            editorItem = "menu-item-selected"
            editorItemBox = "menu-item-selected-box"
            communityItem = "menu-item"
            communityItemBox = "menu-item-box"
        } else {
            editorItem = "menu-item"
            editorItemBox = "menu-item-box"
            communityItem = "menu-item-selected"
            communityItemBox = "menu-item-selected-box"
        }
    }
    chooseStyle()

    return (
        <div className="menu">
            <p className="menu-title">MENU</p>
            <div className={editorItem}>
                <div className={editorItemBox}>
                    <img className="menu-item-box-logo" src="img/Editor de código.svg" alt='editor-de-codigo' />
                </div>
                <a href={window.location.origin}>Editor de código</a>
            </div>
            <div className={communityItem}>
                <div className={communityItemBox}>
                    <img className="menu-item-box-logo" src="img/Comunidade.svg" alt='comunidade' />
                </div>
                <a href={window.location.origin + "/community"}>Comunidade</a>
            </div>
        </div>
    )
}