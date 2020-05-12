import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.png";
import image4 from "./4.jpg";
class Dashboard extends Component {
  render() {
    const images = [
      {
        url: image1
      },
      {
        url: image2
      },
      {
        url: image3
      },
      {
        url: image4
      }
    ];

    return (
      <div>
        <div className="full-height">
          <SimpleImageSlider width={1920} height={700} images={images} />
        </div>
        {/* <CssBaseline />
        <Container fixed>
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "000vh" }}
            children={
              <SimpleImageSlider width={1230} height={700} images={images} />
            }
          />
        </Container> */}
      </div>
    );
  }
}

export default Dashboard;
