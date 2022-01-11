import Header from '../components/Header'
import Menu from '../components/Menu'
import CodeRecord from '../components/codeRecord'

export default function CommunityPage() {
    return (
        <>
            <Header />
            <div className="editor-page">
                <Menu />
                <div className="codeFeed">
                    <CodeRecord />
                    <CodeRecord />
                    <CodeRecord />
                    <CodeRecord />
                    <CodeRecord />

                </div>
            </div>
        </>
    )
}