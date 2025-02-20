import Image from 'next/image'
import React from 'react'

function ServiceDetailLeft() {
    return (
        <div className="col-lg-8">
            <div className="service-single-content">

                <div className="service-single-content">
                    <div className="service-details">
                        <div data-elementor-type="wp-post" data-elementor-id="1225"
                            className="elementor elementor-1225">
                            <FundRaisedAndDonation />
                            <RelatedService/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailLeft





const FundRaisedAndDonation = () => {
    return <div className="elementor-element elementor-element-72e85e3 e-con-full e-flex e-con e-parent"
        data-id="72e85e3" data-element_type="container">
        <div className="elementor-element elementor-element-29200fd elementor-widget elementor-widget-image"
            data-id="29200fd" data-element_type="widget"
            data-widget_type="image.default">
            <div className="elementor-widget-container">
                <Image fetchPriority="high" decoding="async" width="897" height="521"
                    src="/assets/images/service-single1.jpg"
                    className="attachment-large size-large wp-image-2830"
                    alt="service-single1" />
            </div>
        </div>
        <div className="elementor-element elementor-element-9536519 elementor-widget elementor-widget-heading"
            data-id="9536519" data-element_type="widget"
            data-widget_type="heading.default">
            <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Fund
                    Raised &amp; Donation</h2>
            </div>
        </div>
        <div className="elementor-element elementor-element-9b1e284 elementor-widget elementor-widget-text-editor"
            data-id="9b1e284" data-element_type="widget"
            data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
                <p>I must explain to you how all this mistaken idea of pleasure and
                    praising pain was born and I will give you a complete account of
                    the system, and expound the actual teachings of the great
                    explorer of the truth, the master-builder of human happiness. No
                    one rejects, dislikes, or avoids pleasure itself, because it is
                    pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely
                    painful.</p>
                <p>Nor again is there anyone who loves or pursues or desires to
                    obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil and pain can
                    procure him some great pleasure. To take a trivial example,
                    which of us ever undertakes laborious physical exercise.</p>
            </div>
        </div>
        <div className="elementor-element elementor-element-03d8861 e-flex e-con-boxed e-con e-child"
            data-id="03d8861" data-element_type="container">
            <div className="e-con-inner flex-row bg-red-900">
                <div className="elementor-element elementor-element-40a5afb elementor-widget elementor-widget-image"
                    data-id="40a5afb" data-element_type="widget"
                    data-widget_type="image.default">
                    <div className="elementor-widget-container">
                        <Image decoding="async" width="433" height="350"
                            src="/assets/images/sdetails1.jpg"
                            className="attachment-large size-large wp-image-2834"
                            alt="sdetails1" />
                    </div>
                </div>
                <div className="elementor-element elementor-element-b5d689e elementor-widget elementor-widget-image"
                    data-id="b5d689e" data-element_type="widget"
                    data-widget_type="image.default">
                    <div className="elementor-widget-container">
                        <Image decoding="async" width="433" height="350"
                            src="/assets/images/sdetails2.jpg"
                            className="attachment-large size-large wp-image-2835"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const RelatedService = () => {
    return <div className="elementor-element elementor-element-7e9395b e-con-full e-flex e-con e-parent"
        data-id="7e9395b" data-element_type="container">
        <div className="elementor-element elementor-element-3a0b94a elementor-widget elementor-widget-heading"
            data-id="3a0b94a" data-element_type="widget"
            data-widget_type="heading.default">
            <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Related
                    Service</h2>
            </div>
        </div>
    </div>
}