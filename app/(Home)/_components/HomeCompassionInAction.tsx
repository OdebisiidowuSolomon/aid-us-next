import Image from 'next/image'
import React from 'react'

function HomeCompassionInAction() {
    return (
        <>
            <div className="elementor-element elementor-element-1ed6187 e-con-full e-flex e-con e-parent" data-id="1ed6187"
                data-element_type="container">
                <div className="elementor-element elementor-element-9aa5cb4 elementor-widget elementor-widget-wpo-aidus_cta"
                    data-id="9aa5cb4" data-element_type="widget"
                    data-settings="{&quot;cta_image&quot;:{&quot;url&quot;:&quot;https:\/\/aidus.wpolive.com\/wp-content\/uploads\/2024\/11\/cta-bg.jpg&quot;,&quot;id&quot;:1528,&quot;size&quot;:&quot;&quot;,&quot;alt&quot;:&quot;cta-bg&quot;,&quot;source&quot;:&quot;library&quot;},&quot;cta_shape&quot;:{&quot;url&quot;:&quot;https:\/\/aidus.wpolive.com\/wp-content\/uploads\/2024\/11\/cta-shap.svg&quot;,&quot;id&quot;:1537,&quot;size&quot;:&quot;&quot;,&quot;alt&quot;:&quot;cta-shap&quot;,&quot;source&quot;:&quot;library&quot;},&quot;cta_shape2&quot;:{&quot;url&quot;:&quot;https:\/\/aidus.wpolive.com\/wp-content\/uploads\/2024\/11\/curved_shape.png&quot;,&quot;id&quot;:1544,&quot;size&quot;:&quot;&quot;,&quot;alt&quot;:&quot;curved_shape&quot;,&quot;source&quot;:&quot;library&quot;},&quot;cta_shape3&quot;:{&quot;url&quot;:&quot;https:\/\/aidus.wpolive.com\/wp-content\/uploads\/2024\/11\/arrow1.svg&quot;,&quot;id&quot;:1536,&quot;size&quot;:&quot;&quot;,&quot;alt&quot;:&quot;arrow1&quot;,&quot;source&quot;:&quot;library&quot;}}"
                    data-widget_type="wpo-aidus_cta.default">
                    <div className="elementor-widget-container">


                        <div className="aidus-cta cta-section" style={{ backgroundImage: "url(/assets/images/cta-bg.jpg)" }}>
                            <div className="container">
                                <div className="content">
                                    <span>Compassion in Action: Join Us Today</span>
                                    <h3>children need your help by donating today</h3><a
                                        href="#" className="theme-btn">become
                                        voluteer</a>
                                </div>
                            </div>
                            <div className="shape">
                                <Image decoding="async" src="/assets/fonts/cta-shap.svg" alt="http://cta-shap" width={232} height={558} />
                            </div>
                            <div className="shape-1">
                                <Image decoding="async" src="/assets/images/curved_shape.png" alt="http://curved_shape" width={1152} height={72} />
                            </div>
                            <div className="shape-2">
                                <Image decoding="async" src="/assets/fonts/arrow1.svg" alt="http://arrow1" width={133} height={130} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCompassionInAction