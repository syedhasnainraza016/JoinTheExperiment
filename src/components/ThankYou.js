import React from "react";

const ThankYou = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <div class="content">
        <div class="wrapper-1">
          <div class="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for your time and answers</p>
            {/* <p>you should receive a confirmation email soon  </p> */}
            <button class="go-home">go home</button>
          </div>
          {/* <div class="footer-like">
      <p>Email not received?
       <a href="#">Click here to send again</a>
      </p>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
