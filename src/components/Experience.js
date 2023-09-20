import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>McKinsey and Company(2022-2023)</h3>
            <ul>
              <li>In charge of designing and building User Interaction displays in HTML, CSS3, Bootstrap, JavaScript, and</li>
              React.js.
              <li>Collaborated with the team, assisting them in developing their markup and CSS.</li>
              <li>Added new React.js functionality to the application.</li>
              <li>Used JavaScript/jQuery to create custom validation controls and implement different Validation
              Controls for form validation.</li>
              <li>Monitored and improved front-end performance and documented application changes.</li>
            </ul>
            
          </div>
        </div>
        {/*---*/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>ACL Digital(2019-2022)</h3>
            <ul>
             <li>Responsible for converting design mock-ups to W3C standards compliant HTML pages using XHTML,
              CSS, JavaScript, jQuery, and JSON.</li>
              <li>Defined new validations through React.js for the form field validation implemented through HTML5.</li>
              <li>Used Cascading Style Sheets (CSS) to maintain design consistency across all web forms.</li>
              <li>Created multiple POCs to create a user interface in React.js.</li>
              <li>Created SPA and implemented Routers & History in Single Page App (SPA) using React.js.ur veniam occaecat.</li>
            </ul>
          </div>
        </div>
        {/*---*/}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Penn State University(2020-2022)</h3>
            <ul>
              <li>Responsible for assisting students and faculty to solve any technical issues.</li>
              <li>Supporting windows and mac-based computers, laptops, mobile devices such as iPhone, android, windows</li>
              <li>Troubleshooting skills, Huge experience of the TCP/IP protocol, Worked under supervisor.</li>
              <li>Ability to solve problems including printer, PCs, Mobile device, Laptop, and hardware.</li>
              <li>Setup/Support/Maintenance of all Computers and Phone including Hardware/Software/Applications.</li>
            </ul>
          </div>
        </div>{/*---*/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Lidl(2017-2018)</h3>
            <ul>
              <li>Collect the cash money from customer.</li>
              <li>Strong verbal and written communication skills.</li>
              <li>Make the credit card payment.</li>
            </ul>
          </div>
        </div>
        {/*---*/}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Burger King(2016-2017)</h3>
            <ul>
              <li>Collect the cash/card money from customer.</li>
              <li>Listen to customer problem and order.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience