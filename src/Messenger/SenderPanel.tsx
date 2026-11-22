function SenderPanel() {
    return (
        <>
            <div className="panel sender">
                <textarea className="sender"/>
                <div className="sender buttons first">
                    <button className="sender add">
                        <i className="bi bi-file-earmark-plus sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-file-earmark-image sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-file-earmark-word sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-file-earmark-play sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-file-earmark-music sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-file-earmark-spreadsheet sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-file-earmark-code sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-filetype-md sender icon"/>
                    </button>
                </div>
                <div className="sender buttons last">
                    <button className="sender add">
                        <i className="bi bi-emoji-smile sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-car-front sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-filetype-gif sender icon"/>
                    </button>
                    <button className="sender add">
                        <i className="bi bi-send-fill sender icon"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SenderPanel
