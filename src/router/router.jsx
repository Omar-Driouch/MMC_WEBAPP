import { createHashRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layout from "../Layout/Layout";
import Events from "../Components/Events/Events";
import EventDetails from "../Components/EventDetails/EventDetails";
import EventSessionDetails from "../Components/EventDetails/EventSessionDetails";
import Speakers from "../Speakers/Speakers";
import SpeakerDetails from "../Speakers/SpeakerDetails";
import Programs from "../Components/Programs/Programs";
import ProgramEvents from "../Components/Programs/ProgramEvents";
import Registration from "../Components/Registration/Registration";
import { Contact } from "../Components/Contact/Contact";
import Jobintech from "../Components/Jobintech/Jobintech";
import NotFound from "../Components/NotFound/NotFound";
import SearchEvent from "../Components/SearchEvent/SearchEvent";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/events", element: <Events /> },
      {
        path: "/events/:id/:eventCityId?/:eventProgramId?/:eventThemeId?",
        element: <EventDetails />,
      },
      {
        path: "/events/:eventId/sessions/:sessionId",
        element: <EventSessionDetails />,
      },
      { path: "/speakers", element: <Speakers /> },
      { path: "/speakers/:id", element: <SpeakerDetails /> },
      { path: "/programs", element: <Programs /> },
      { path: "/programs/:id", element: <ProgramEvents /> },
      { path: "/registration/:eventId", element: <Registration /> },
      { path: "/contact", element: <Contact /> },
      { path: "/jobintech", element: <Jobintech /> },
      { path: "/search/:query", element: <SearchEvent /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
