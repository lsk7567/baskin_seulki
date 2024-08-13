export function DetailTitle({content}){
    return(
        <div className="Titlebox">
            <h3 className="detailEvent">Event</h3>
            <p className="detailcategory">{content.category}</p>
            <h3 className="detailTitle">{content.info}</h3>
            <p className="detaildate">{content.date}</p>
        </div>
    )
};

export function DetailNotice({content}){
    let etc = {...content}.etc
    return(
            <ul className="detailNotice">
                {etc&&etc.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
    )
};