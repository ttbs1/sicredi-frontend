export default function DragonInfo(props) {

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="col-8">
                    <div className="info">
                        <p><span>Id:</span> {props.dragon.id}</p>
                        <p><span>Created at:</span> {props.dragon.createdAt}</p>
                        <p><span>Name:</span> {props.dragon.name}</p>
                        <p><span>Type:</span> {props.dragon.type}</p>
                        <p><span>Histories:</span> {props.dragon.histories.map(response => <div>{response}</div>)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}