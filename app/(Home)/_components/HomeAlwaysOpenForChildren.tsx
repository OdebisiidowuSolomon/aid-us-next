import Image from 'next/image'
import React from 'react'

function HomeAlwaysOpenForChildren() {
    return (
        <>
            <div className="elementor-element elementor-element-432a4b9 e-con-full e-flex e-con e-parent" data-id="432a4b9"
                data-element_type="container">
                <div className="elementor-element elementor-element-500bd61 elementor-widget elementor-widget-wpo-aidus_title"
                    data-id="500bd61" data-element_type="widget" data-widget_type="wpo-aidus_title.default">
                    <div className="elementor-widget-container">

                        <div className="section-title-wrap">
                            <div className="container">
                                <div className="section-title section-title-s3">
                                    <span className="subtitle">We are always open for children</span>
                                    <h2>Transforming Lives Through Charity</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="elementor-element elementor-element-9e18446 e-con-full e-flex e-con e-parent" data-id="9e18446"
                data-element_type="container">
                <div className="elementor-element elementor-element-df99c3f elementor-widget elementor-widget-wpo-aidus_event"
                    data-id="df99c3f" data-element_type="widget" data-widget_type="wpo-aidus_event.default">
                    <div className="elementor-widget-container">

                        <div className="project-section">
                            <div className="project-slider owl-carousel">

                                <div className="project-card">
                                    <Image decoding="async" src="/assets/images/event5-1.jpg" alt="http://event5" width={576} height={391} />
                                    <div className="top-date">
                                        <span>23 Jan</span>
                                    </div>
                                    <div className="content">
                                        <h2><a href="https://aidus.wpolive.com/event/clean-water-to-rural/">Clean Water
                                            to Rural</a></h2>
                                        <div className="event-info">
                                            <span><i className="ti-time"></i>10:00 AM - 11:00 AM</span><span><i
                                                className="ti-location-pin"></i>New York</span>
                                        </div>
                                        <div className="icon"><a
                                            href="https://aidus.wpolive.com/event/clean-water-to-rural/"><i
                                                className="flaticon-arrow-up"></i></a></div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <Image decoding="async" src="/assets/images/event3.jpg" alt="http://event3" width={576} height={391} />
                                    <div className="top-date">
                                        <span>18 Jan</span>
                                    </div>
                                    <div className="content">
                                        <h2><a href="https://aidus.wpolive.com/event/old-people-child-trouble/">old
                                            people &amp; Child trouble</a></h2>
                                        <div className="event-info">
                                            <span><i className="ti-time"></i>12:00 AM - 1:20 AM</span><span><i
                                                className="ti-location-pin"></i>Brazil</span>
                                        </div>
                                        <div className="icon"><a
                                            href="https://aidus.wpolive.com/event/old-people-child-trouble/"><i
                                                className="flaticon-arrow-up"></i></a></div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <Image decoding="async" src="/assets/images/event2.jpg" alt="http://event2" width={576} height={391} />
                                    <div className="top-date">
                                        <span>17 Feb</span>
                                    </div>
                                    <div className="content">
                                        <h2><a href="https://aidus.wpolive.com/event/empowering-through-food/">Empowering
                                            Through Food</a></h2>
                                        <div className="event-info">
                                            <span><i className="ti-time"></i>11:00 AM - 12:00 AM</span><span><i
                                                className="ti-location-pin"></i>Singapore</span>
                                        </div>
                                        <div className="icon"><a
                                            href="https://aidus.wpolive.com/event/empowering-through-food/"><i
                                                className="flaticon-arrow-up"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAlwaysOpenForChildren