import React from "react";
import AppRoutes from "./routes/app-routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App p-0">
      <Toaster position="top-center" reverseOrder={false} />
      <AppRoutes />
    </div>
  );
}

export default App;
