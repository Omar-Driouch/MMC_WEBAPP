import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import img from "../assets/said_wahid.png"
import { fetchSpeakerById, fetchSpeakerEvents } from "../features/speakerSlice";
import SpeakerEvents from "./SpeakerEvents";
import Loader from "../Components/Loader/Loader";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Style from "./speaker-details.module.scss";
import parse from "html-react-parser";
import React, { useEffect } from "react";

const SpeakerDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const speaker = useSelector((state) => state.speaker.speaker);
  const status = useSelector((state) => state.speaker.status);
  const speakerEvents = useSelector((state) => state.speaker.speakerEvents);
  const speakerEventsStatus = useSelector(
    (state) => state.speaker.speakerEventsStatus
  );
  const speakerEventsError = useSelector(
    (state) => state.speaker.speakerEventsError
  );
  console.log(speaker);
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchSpeakerById(id));
    dispatch(fetchSpeakerEvents(id));
  }, [dispatch, id]);
  return (
    <div className={Style.SpeakerDetailContainer}>
      <div className={Style.SpeakerHeading}>
        <div className={Style.Box}>
          <div className={Style.HeadingTitle}>
            <span>Speaker</span> <span>intervenant</span> <span>ناطق</span>{" "}
            <span>ⵟⴰⴳⵢⴰⵏⵉⵏ</span>
          </div>
          <div className={Style.Path}>
            <div className={Style.Span}>
              <Link to="/">Home</Link>
            </div>
            <div className={Style.Span}>
              <Link to="/speakers">speakers</Link>
            </div>
            <div className={Style.Span}>
              {speaker?.firstname} {speaker?.lastname}
            </div>
          </div>
        </div>
      </div>

      <div className={Style.Content}>
        {status === "loading" && <Loader />}
        {status === "succeded" && (
          <div className={Style.SpeakerBox}>
            <div className={Style.SpeakerImageBox}>
              <img
                src={speaker?.picturePath}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className={Style.SpeakerInfo}>
              <div className={Style.SpeakerName}>
                {speaker?.firstname} {speaker?.lastname}
              </div>
              <p className={Style.SpeakerEmail}>{speaker?.email}</p>
              <div className={Style.Line}></div>
              <h2 className={Style.SpeakerBio}>{speaker?.bio}</h2>
              <h2 className={Style.SpeakerDescription}>
                {parse(speaker?.description || "")}
              </h2>
              <div className={Style.cardFooter}>
                <div className={Style.containerMicrosoft}>
                  {speaker?.mvp && (
                    <p className={Style.Microsoft}>Microsoft MVP</p>
                  )}
                  {speaker?.mct && (
                    <p className={Style.Microsoft}>Microsoft MCT</p>
                  )}
                </div>
                <div className={Style.Line}></div>

                <div className={Style.SpeakerMediaBox}>
                  {speaker?.speakerSocialMedia?.facebook !== null && (
                    <div
                      className={Style.SpeakerMedia}
                      href={speaker?.speakerSocialMedia?.facebook}
                      target="_blanck"
                    >
                      <FacebookIcon />
                    </div>
                  )}
                  {speaker?.speakerSocialMedia?.instagram !== "" && (
                    <div
                      className={Style.SpeakerMedia}
                      href={speaker?.speakerSocialMedia?.instagram}
                      target="_blanck"
                    >
                      <InstagramIcon />
                    </div>
                  )}
                  {speaker?.speakerSocialMedia?.x !== "" && (
                    <div
                      className={Style.SpeakerMedia}
                      href={speaker?.speakerSocialMedia?.x}
                      target="_blanck"
                    >
                      <XIcon />
                    </div>
                  )}
                  {speaker?.speakerSocialMedia?.linkedin !== "" && (
                    <div
                      className={Style.SpeakerMedia}
                      href={speaker?.speakerSocialMedia?.linkedin}
                      target="_blanck"
                    >
                      <LinkedInIcon />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <SpeakerEvents
          speakerEvents={speakerEvents}
          status={speakerEventsStatus}
          error={speakerEventsError}
        />
      </div>
    </div>
  );
};

export default SpeakerDetails;
