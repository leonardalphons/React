import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=40",
    );
  };

  return (
    <div className="bg-slate-950 h-screen text-white">
      <button
        onClick={getData}
        className="bg-amber-800 px-3 py-5 m-4 rounded-full outline-2 active:scale-95"
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
