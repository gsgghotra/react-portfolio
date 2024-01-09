const Project = (props) => {
    const {name, tech, description, link, type, image} = props
    return(
        <article className="col-lg-4 col-md-4 col-sm-12" style={{flexGrow: 1, width: '320px'}}>
        <a className="text-decoration-none" href={link} target="_blank">
            <div className="card custom-card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2>{name}</h2>
                    <p className='description'>{description}</p>
                    <div className='techInfo'>
                        <div className="tech">
                            <p>{tech}</p>
                        </div>
                    </div>
                    <hr />
                    <div className='creator'>
                        <div className='wrapper'>
                            {type}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </article>
)}

export default Project;