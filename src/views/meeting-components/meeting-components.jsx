//schedule-components.jsx
import React from "react";
import PropTypes from "prop-types";

// core components
import HeaderBanner5 from "../../components/banner/banner5.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page

const MeetingComponents = () => {
    return (
        <div id="main-wrapper">
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner5 />
                    {/* <PageCalendar /> */}
                    {/* <TeamComponent /> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

MeetingComponents.propTypes = {
    classes: PropTypes.object
};

export default MeetingComponents;
