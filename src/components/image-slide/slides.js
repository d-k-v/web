import React, { useEffect, useState } from "react";
import "./slides.css";
// import image from "../../images/image1.png";
function Slides(props) {
  const [imageId, setImageId] = useState(2);

  useEffect(() => {
    console.log("here");
    const interval = setInterval(() => {
      console.log("changing image");
      changeImage();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [imageId]);

  const changeImage = () => {
    const slide = document.getElementById("slides-container");
    slide.style = "transform : translateX(-100%); transition: 0.4s;";
    setTimeout(() => {
      const newImageId = (imageId % 12) + 1;
      setImageId(newImageId);
      slide.style = "transform : translateX(-40%)";
    }, 400);
  };
  const prevImageId = (imageIds) => {
    if (imageIds - 1 > 0) return imageIds - 1;
    else return 13 - imageIds;
  };
  console.log(imageId);
  console.log("sss", prevImageId(imageId));

  return (
    <React.Fragment>
      <div className="gallery">
        <div className="slides-container">
          <div className="slides" id="slides-container">
            <img
              src={require(`../../images/image${prevImageId(imageId)}.jpg`)}
              alt=""
              id="image-src"
            />
            <img
              src={require(`../../images/image${
                imageId > 0 ? imageId : 14 - imageId
              }.jpg`)}
              alt=""
              id="image-src"
            />
            <img
              src={require(`../../images/image${
                imageId + 1 > 0 ? imageId + 1 : 14 - (imageId + 1)
              }.jpg`)}
              alt=""
              id="image-src"
            />
          </div>
        </div>

        {/* <img src="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=en_US" /> */}
        {/* <div className="gallery-btn">
          <div onclick="prevImage()" className="btn">
            Previous
          </div>
          <div onclick="nextImage()" className="btn">
            Next
          </div>
        </div> */}

        {/* <button onClick={changeImage}>Next</button> */}
      </div>
    </React.Fragment>
  );
}

export default Slides;
