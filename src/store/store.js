import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "../features/eventSlice"
import partnerReducer from "../features/partnerSlice";
import speakerReducer from "../features/speakerSlice";
import sessionReducer from "../features/sessionSlice";
import programReducer from "../features/programSlice";
import cityReducer from "../features/citySlice";
import themeReducer from "../features/themeSlice";
const store = configureStore({
    reducer:{
      event:eventReducer,
      partner:partnerReducer,
      speaker:speakerReducer,
      session:sessionReducer,
      program:programReducer,
      city:cityReducer,
      theme:themeReducer
    }
});
export default store;