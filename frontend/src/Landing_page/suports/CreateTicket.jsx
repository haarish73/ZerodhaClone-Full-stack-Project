import React from "react";

function CreateTicket() {
  const topics = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">To create a ticket, select a relevant topic</h1>

        {[1, 2, 3].map((col) => (
          <div key={col} className="col-4 p-3 mb-4">
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
            </h4>
            {topics.map((topic, idx) => (
              <div key={idx}>
                <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                  {topic}
                </a>
                <br />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
