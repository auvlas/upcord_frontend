function Server() {
    const name = server.name
    const indexSpace = name.indexOf(" ");
    
    let title: string;
    
    if (indexSpace === -1 || indexSpace === name.length - 1) {
        title = name.substring(0, 2);
    } else {
        title = name[0] + name[indexSpace + 1];
    }

    title = title.toUpperCase()

    return ( <> <button> {title} </button> </> );
}

function ServersPanel() {
    return (
        <>
            <section>
                <DirectMessage />
                <div>
                    {
                        servers.map((server) => (
                            <Server key = {server.id}
                                server = {server}/>
                        ))
                    }
                </div>
                <CreateServer />
            </section>
        </>
    )
}

export default ServersPanel
