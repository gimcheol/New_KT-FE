import React from "react";
import PropTypes from "prop-types";

// core components
import HeaderBanner4 from "../../components/banner/banner4.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
// import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";

const AboutComponents = () => {
    return (
        <div id="main-wrapper">
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner4 />
                    <TeamComponent />
                </div>
            </div>
            <Footer />
        </div>
    );
}

AboutComponents.propTypes = {
    classes: PropTypes.object
};

export default AboutComponents;
