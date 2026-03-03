import React from "react";
import Navbar from "./Navbar";
import InfographicPage from "./InfographicPage";
import EmbedCodes from "./EmbedCodes";
const App = () => {
  return (
    <div>
      <Navbar />
      <InfographicPage />
      <EmbedCodes /> {/* Updated component name */}
    </div>
  );
};
export default App;
