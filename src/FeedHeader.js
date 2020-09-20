import React from "react";
import { Avatar } from "@material-ui/core";
import "./Feed.css";

function FeedHeader() {
  return (
    <div>
      <div className="row card d-flex flex-column border-0 ">
        <div className="col border-bottom p-1">
          <h5 style={{ fontSize: 22, color: "#00aced" }}>HOME</h5>
        </div>
        <div className="row d-flex flex-row">
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 mt-2 ">
            {/* user avatar 🎱 */}
            <Avatar
              className="h-100 w-100 img-fluid"
              src="https://scontent.fkhi11-1.fna.fbcdn.net/v/t1.0-9/95260674_2556673724590700_5847535705068142592_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeFiRRsHNV54VEgiUYuRAKbChzk7UcgGVvyHOTtRyAZW_GRbwC3kA0cf6z_pHq1Qd71FS3MNYPDPT8ur3Yx3T_46&_nc_ohc=GQoUYoCQNQcAX-r6z18&_nc_ht=scontent.fkhi11-1.fna&oh=96f70b15781d5cd5ee2ebb3f8fc076c9&oe=5F8B91F2"
            />
          </div>
          <div className="col-xl-10 col-lg-10 col-md-8 col-sm-8   m-0 p-0 mt-4 w-100 ">
            {/* post section 👡 */}
            <input
              type="text"
              className="form-control border-0"
              placeholder="What's Happening?"
              style={{ backgroundColor: "#f8f8f8" }}
            />
          </div>
        </div>
        <div className="row mt-2 border-bottom p-2">
          {/* image posting section 🦺 */}
          <div className="col-10">
            <input
              type="text"
              className="form-control border-0 border-bottom"
              placeholder="Enter Image URL"
              style={{ backgroundColor: "#f8f8f8" }}
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedHeader;
