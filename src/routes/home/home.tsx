import React from "react";
import styles from "./home.module.css"

import {
  Webchat,
  WebchatProvider,
  getClient,
  Configuration,
} from "@botpress/webchat";

const clientId = "44a685b2-2150-44c8-9e6e-7ce1983c2e8f";

// Define configuration with proper typing
const configuration: Configuration = {
  color: "#000", // Customize color if necessary
    botName: "Chatbot",
};

const App: React.FC = () => {
  // Create the client with the given clientId
  const client = getClient({ clientId });

  return (
    <div style={{ width: '100vw', height: '85vh', backgroundColor: '#121212' }}>
    <WebchatProvider client={client} configuration={configuration}>
      {/* Webchat will apply the .bp-webchat class internally, so your CSS will target it */}
      <Webchat />
    </WebchatProvider>
  </div>
  );
};

export default App;
