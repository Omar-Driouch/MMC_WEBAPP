import React, { useEffect, useRef } from "react";
import styled from "styled-components";
//import banner from "../../assets/banner.png"
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../features/eventSlice";
import { colors } from "../../theme";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
const { yellow } = colors;
const Hero = styled.div`
  width: 100%;
  height: 100vh;
`;
const Btn = styled(Link)`
  margin-top: 20px;
  display: inline-block;
  padding: 15px 40px;
  background: ${yellow};
  font-weight: 800;
  text-transform: uppercase;
`;
const Arrow = styled.button`
  position: absolute;
  top: 50%;
  z-index: 100;
  width: 30px;
  height: 30px;
  border-top: 3px solid ${yellow};
  border-left: 3px solid ${yellow};
`;
const Prev = styled(Arrow)`
  left: 30px;
  transform: translateY(-50%) rotate(-45deg);
`;
const Next = styled(Arrow)`
  right: 30px;
  transform: translateY(-50%) rotate(135deg);
`;
//    position:relative;
//    top:0;
//    left:0;
/*
  //  background-image:linear-gradient(to right , rgba(255,255,255,0.8) , rgba(255,255,255,0.8)) , url(${banner});
  //   background-image:url(${banner});
  //  background-repeat:no-repeat;
  //  background-size: cover;
  //  background-position: auto;
  //  background-attachment:fixed;
  */
const EventsSwipper = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    // fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // waitForAnimate: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear"
  };
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <Hero className="slider-container relative">
      <Prev onClick={previous} />
      <Next onClick={next} />
      {/* <button className='absolute top-[50%] left-0 z-40'>prev</button> */}
      {/* <button className='absolute top-[50%] right-0 z-40'>next</button> */}
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
        className="hover:cursor-grab"
      >
        {events?.map((event) => (
          <div className='min-h-screen relative after:absolute after:z-10 after:content[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-[#373737c1]'>
            <img
              src={event?.imagePath}
              className="w-full z-50 object-cover h-[100vh]"
              alt=""
            />
            <div className="info max-w-[1200px] z-50 my-2 absolute top-[200px] left-[170px]">
              <h1 className="text-white text-[40px] font-[800]">
                {event?.title}
              </h1>
              <p className="max-w-[600px] text-white mt-5">
                {parse(event?.description?.substring(0, 500))}
              </p>
              <Btn
                className="text-white"
                to={`/events/${event?.id}/${event?.cityId}/${event?.programId}`}
              >
                read more
              </Btn>
            </div>
          </div>
        ))}
      </Slider>
    </Hero>
  );
};

export default EventsSwipper;
