'use client'

import PublicBanner from "../../_components/PublicBanner"
import AboutAwesomeGallery from "./_components/AboutAwesomeGallery"
import AboutBuildingBrighterFuture from "./_components/AboutBuildingBrighterFuture"
import AboutCompassionInAction from "./_components/AboutCompassionInAction"
import AboutTestimonial from "./_components/AboutTestimonial"
import AboutWeAreAlwaysOpenForChildren from "./_components/AboutWeAreAlwaysOpenForChildren"
import AboutYouCanHelpThePoorWithUs from "./_components/AboutYouCanHelpThePoorWithUs"

function AboutPage() {
    return (
        <>
            <PublicBanner title="About Us" />
            <div data-elementor-type="wp-page" data-elementor-id="178" className="elementor elementor-178">
                <AboutBuildingBrighterFuture />
                <AboutCompassionInAction />
                <AboutYouCanHelpThePoorWithUs />
                <AboutWeAreAlwaysOpenForChildren />
                <AboutTestimonial />
                <AboutAwesomeGallery />
                {/* <AboutPartners /> */}
            </div>
        </>
    )
}

export default AboutPage