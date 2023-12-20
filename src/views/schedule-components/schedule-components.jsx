import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner2 from "../../components/banner/banner2.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import HeaderComponent from "./sections/headercomponent.jsx";
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";

const ScheduleComponents = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner2 />
                    <HeaderComponent />
                    <PortfolioComponent />
                    <TeamComponent />
                </div>
            </div>
            <Footer />
        </div>
    );
}

ScheduleComponents.propTypes = {
    classes: PropTypes.object
};

export default ScheduleComponents;
