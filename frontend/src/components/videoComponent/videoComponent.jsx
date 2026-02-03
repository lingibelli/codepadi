import "./videoComponent.css"

function VideoComponent({url,title,description}){


    return (
    <div className="video-component">
            <div className="video-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
         <iframe src={url} 
                 title= {title}
                 width="620"
                 height="440"      
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen>
        </iframe>
            

    </div>        

    );
}

export default VideoComponent;