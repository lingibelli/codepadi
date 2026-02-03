import "./videoPage.css"
import "../../components/videoComponent/videoComponent"
import VideoComponent from "../../components/videoComponent/videoComponent";

function VideoPage(){

     const videos = [
    {
      url: "https://www.youtube.com/embed/Pu5zNVqNPug",
      title: "Scratch 3 Editor",
      description: "Learn about the Scratch 3 Editor"
    },
    {
      url: "https://www.youtube.com/embed/elFyeqLgM3c",
      title: "1. Say Somethings",
      description: "Learn about LOOKS pallet "
    },
    {
      url: "https://www.youtube.com/embed/Bat7QKpME9A",
      title: "2. Spin",
      description: "Learn about MOTION Pallet"
    },
    {
      url: "https://www.youtube.com/embed/17CE5x4AWTE",
      title: "3. Play a Sound ",
      description: "Learn about SOUND Pallet"
    },
    {
      url: "https://www.youtube.com/embed/S5O48xfdWh8",
      title: "4. Dancing Letter",
      description: "Learn to change direction of sprite"
    },
    {
      url: "https://www.youtube.com/embed/2A6PHsct2_k",
      title: "5. Change Size",
      description: "Learn to change size of sprite"
    },
    {
      url: "https://www.youtube.com/embed/Jz9mpExhflI",
      title: "6. Press a Key",
      description: "Learn about EVENT Pallet"
    },
    {
      url: "https://www.youtube.com/embed/b_Aclgxo5RM",
      title: "7. Glide Around",
      description: " Learn animating sprite"
    }
  ];



    return (
         <div className="container">
          {videos.map((video,index) => (
               <VideoComponent
               key={index}
               url={video.url}
               title={video.title}
               description={video.description}></VideoComponent>
          ))} 
         </div>  
    );
}

export default VideoPage;