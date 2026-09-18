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
    serversIds: number[] = [0, 1, 2, 3, 4]
    return (
        <>
            <section>
                <DirectMessage />
                <div>
                    {
                        serversIds.map((serverId) => (
                            <Server key={serverId} />
                        ))
                    }
                </div>
                <CreateServer />
            </section>
        </>
    )
}

export default ServersPanel
