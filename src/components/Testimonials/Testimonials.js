import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.scss";

const Testimonials = () => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="testimonials ">
      <h1> Testimonials</h1>
      <p className="colluage">
        People I've worked with have said some nice things...
      </p>
      <Slider {...settings}>
        <div>
          <img src="./img/myphoto.jpeg" alt="profile" />
          <p className="comment">
            “Matt was a real pleasure to work with and we look forward to
            working with him again. He’s definitely the kind of designer you can
            trust with a project from start to finish.”
          </p>
          <h3>Pascal Tremblay</h3>
          <p className="role">Creative Lead, Good Kind</p>
        </div>
        <div>
          <img src="./img/myphoto.jpeg" alt="profile" />
          <p className="comment">
            “Matt was a real pleasure to work with and we look forward to
            working with him again. He’s definitely the kind of designer you can
            trust with a project from start to finish.”
          </p>
          <h3>Pascal Tremblay</h3>
          <p className="role">Creative Lead, Good Kind</p>
        </div>
        <div>
          <img src="./img/myphoto.jpeg" alt="profile" />
          <p className="comment">
            “Matt was a real pleasure to work with and we look forward to
            working with him again. He’s definitely the kind of designer you can
            trust with a project from start to finish.”
          </p>
          <h3>Pascal Tremblay</h3>
          <p className="role">Creative Lead, Good Kind</p>
        </div>
        <div>
          <img src="./img/myphoto.jpeg" alt="profile" />
          <p className="comment">
            “Matt was a real pleasure to work with and we look forward to
            working with him again. He’s definitely the kind of designer you can
            trust with a project from start to finish.”
          </p>
          <h3>Pascal Tremblay</h3>
          <p className="role">Creative Lead, Good Kind</p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
