import React from "react";
import {Bookmark} from "lucide-react"

const Card = () => {
  return (
    <div className="parent">
      <div className="card">
        <div>
          <div className="top">
            <img src="https://imgs.search.brave.com/fDgnDC5_yugXHiCM6lN-rhPBXJ_NDMTyZplZXeJW8Us/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzkxLzU5LzIx/LzM2MF9GXzE2OTE1/OTIxODZfdXNBNkVz/Q2o3WDVtNjNWeUZx/TUNzaEpGYXBvSHB3/SUwuanBn"></img>
            <button>
              Save <Bookmark size={14} />
            </button>
          </div>

          <div className="centre">
            <h3>
              Amazon <span>5 days ago</span>
            </h3>
            <h2>Senior UI/UX Designer</h2>
            <div className="tag">
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
