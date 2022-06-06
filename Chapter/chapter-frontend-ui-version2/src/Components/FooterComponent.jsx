import React from "react";
// import './FooterComponent.css';
import './ApplicationFooter.css';
const ApplicationFooter = () => {

    const LinkedInImg = `Gabriel-Jefferson-Capstone-Project/Chapter/chapter-frontend-ui-version2/src/Components/In-White-128.png`
    const LinkedInImg2 = `https://e7.pngegg.com/pngimages/499/488/png-clipart-plan-johns-hopkins-university-white-house-food-linkedin-angle-white.png`


    return(
        <div className="application-footer-container">
            {/* <h1>Footer Component Placeholder</h1> */}
            <div id="application-footer-row"   className="row-1">
                <div id="footer-site-links-col" className="col-4">
                    <div id="footer-links-box">
                        <img src={LinkedInImg2} alt="Gabriel Jefferson's LinkedIn Page" id="linkedin-link" />
                        <div id="img-spacer"></div>
                        <img src="" alt="" id="github-link" />
                    </div>

                </div>
                {/* INBETWEEN COL */}
                <div className="col-1" id="footer-space-col"></div>
                
                <div id="footer-contact-info-col"  className="col-4">
                    <div id="footer-contact-box">
                        <h3>Portfolio Site: https://www.gabrieljefferson.com/</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ApplicationFooter;

