import Header from '../components/Header'
import Menu from '../components/Menu'
import CodeRecord from '../components/codeRecord'
import Data from '../data/fakeData'
import React from 'react'

export default function CommunityPage() {
    return (
        <>
            <Header />
            <div className="editor-page">
                <Menu />
                <div className="codeFeed">
                    {
                        Data.map((record) => {
                            return (
                                <CodeRecord
                                    key={record.id}
                                    title={record.title}
                                    description={record.description}
                                    code={record.code}
                                    likes={record.likes}
                                    comments={record.comments}
                                    color={record.color}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}