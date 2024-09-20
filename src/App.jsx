import React from "react";
import "./App.css";
import CustomBanner from "./components/CustomBanner/CustomBanner";

function App() {
  const isAnonymous = LITHIUM?.CommunityJsonObject?.User?.isAnonymous || false;
  return (
    <React.Fragment>
      <CustomBanner isAnonymous= {isAnonymous}/>
    </React.Fragment>
  );
}

export default App;
