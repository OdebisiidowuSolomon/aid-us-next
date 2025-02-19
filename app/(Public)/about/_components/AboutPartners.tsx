import Image from 'next/image'
import React from 'react'

function AboutPartners() {
    return (
        <div className="elementor-element elementor-element-54255c1 e-con-full e-flex e-con e-parent" data-id="54255c1"
            data-element_type="container">
            <div className="elementor-element elementor-element-11a2b43 elementor-widget elementor-widget-wpo-aidus_client"
                data-id="11a2b43" data-element_type="widget" data-widget_type="wpo-aidus_client.default">
                <div className="elementor-widget-container">

                    <div className="aidus-partners partners-section-s3">
                        <h2 className="d-none">No Content</h2>

                        <ul className="partners-slider-s3">
                            <li>
                                <div>
                                    <Image decoding="async" src="/assets/images/partner1.png" alt="partner1" width={176} height={41} />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Image decoding="async" src="/assets/images/partner2.png" alt="partner2" width={131} height={38} />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Image decoding="async" src="/assets/images/partner3.png" alt="partner3" width={187} height={75} />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Image decoding="async" src="/assets/images/partner4.png" alt="partner4" width={84} height={73} />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Image decoding="async" src="/assets/images/partner5.png" alt="partner5" width={142} height={42} />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Image decoding="async" src="/assets/images/partner6.png" alt="partner6" width={75} height={65} />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Image decoding="async" src="/assets/images/partner7.png" alt="partner7" width={188} height={79} />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Image decoding="async" src="/assets/images/partner3.png" alt="partner3" width={187} height={75} />
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPartners