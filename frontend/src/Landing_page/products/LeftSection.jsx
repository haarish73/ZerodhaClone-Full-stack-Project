import React from "react";
import googlePlayBadge from "../../assets/img/images/googlePlayBadge.svg"; 
import appStoreBadge from "../../assets/img/images/appStoreBadge.svg"
function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} style={{ width: "100%" }} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src={googlePlayBadge} alt="Get it on Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src={appStoreBadge} alt="Download on App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
