import Image from 'next/image'
import React from 'react'

function HomeWorkTogether() {
    return (
        <div className="elementor-element elementor-element-0fe7a20 e-con-full e-flex e-con e-parent" data-id="0fe7a20"
            data-element_type="container">
            <div className="elementor-element elementor-element-9995709 elementor-widget elementor-widget-wpo-aidus_funfact"
                data-id="9995709" data-element_type="widget"
                data-settings="{&quot;funfact_shape1&quot;:{&quot;url&quot;:&quot;https:\/\/aidus.wpolive.com\/wp-content\/uploads\/2024\/11\/funfact-shape.svg&quot;,&quot;id&quot;:502,&quot;size&quot;:&quot;&quot;,&quot;alt&quot;:&quot;funfact-shape&quot;,&quot;source&quot;:&quot;library&quot;}}"
                data-widget_type="wpo-aidus_funfact.default">
                <div className="elementor-widget-container">

                    <div className="aidus-funfact funfact-section wpo-fun-fact-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12 wow1 fadeInLeft" data-wow-delay="0.1s">
                                    <div className="content">
                                        <h2>Hope, Support, and Love for All</h2>
                                        <h3>We work together &amp; never <span>give</span> up</h3>
                                        <p>We work together to make a lasting difference, helping people. With
                                            kindness and hard work, we bring hope and make positive changes for
                                            those in need.</p> <a href="tel:+tel:415555-98%2076%2044" className="call">
                                            <div className="icon">
                                                <i className="fi flaticon-phone"></i>
                                            </div>
                                            <div className="text">
                                                <span>+(415) 555-98 76 44</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 wow1 fadeInRight" data-wow-delay="0.1s">
                                    <div className="funfact">
                                        <ul>
                                            <li>
                                                <div className="count">
                                                    <h3><span className="odometer" data-count="500">500</span>+</h3>
                                                </div>
                                                <span>Cities we have connected</span>
                                            </li>
                                            <li>
                                                <div className="count">
                                                    <h3><span className="odometer" data-count="1.2">1.2</span>m</h3>
                                                </div>
                                                <span>Raise funds every month</span>
                                            </li>
                                            <li>
                                                <div className="count">
                                                    <h3><span className="odometer" data-count="100">100</span>+</h3>
                                                </div>
                                                <span>We have monthly donor</span>
                                            </li>
                                            <li>
                                                <div className="count">
                                                    <h3><span className="odometer" data-count="95">95</span>%</h3>
                                                </div>
                                                <span>Successful campains</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape">
                            <Image decoding="async" src="/assets/fonts/funfact-shape.svg" alt="http://funfact-shape" width={200} height={120} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWorkTogether