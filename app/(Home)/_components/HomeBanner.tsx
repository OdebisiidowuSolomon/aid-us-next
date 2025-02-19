import Image from 'next/image'
import React from 'react'

function HomeBanner() {
    return (
        <div className="elementor-element elementor-element-de96559 e-con-full e-flex e-con e-parent" data-id="de96559"
            data-element_type="container">
            <div className="elementor-element elementor-element-c29489f elementor-widget elementor-widget-wpo-aidus_slider"
                data-id="c29489f" data-element_type="widget" data-widget_type="wpo-aidus_slider.default">
                <div className="elementor-widget-container">

                    <div className="aidus-hero wpo-hero-slider">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="slide-inner slide-bg-image"
                                        data-background="https://aidus.wpolive.com/wp-content/uploads/2024/11/slide-1.jpg">
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <span>We can brighten every child&apos;s future.</span>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-sub-title">
                                                    <h2>Give support to <span>poverties</span> &amp; <span
                                                        className="text">Old</span> non profit Care</h2>
                                                </div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <div className="btn-wrap">
                                                        <a href="https://aidus.wpolive.com/about-us/"
                                                            className="theme-btn">About Us</a>
                                                    </div>
                                                    <a href="tel:+tel:+025%20757%20576%20560" className="call">
                                                        <div className="icon">
                                                            <i className="fi flaticon-phone"></i>
                                                        </div>
                                                        <div className="text">
                                                            <h3>Call Us Now</h3>
                                                            <span>+025 757 576 560</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-shape">
                                            <Image decoding="async" src="/assets/fonts/left-shape.svg"
                                                alt="http://left-shape" width={983} height={843} />
                                        </div>
                                        <div className="shape shape-1">
                                            <Image decoding="async" src="/assets/fonts/hero-shape-2.svg" alt="" width={128} height={339} />
                                        </div>

                                        <div className="shape shape-2">
                                            <Image decoding="async" src="/assets/fonts/hero-shape-3.svg" alt="" width={115} height={169} />
                                        </div>

                                        <div className="shape shape-3">
                                            <Image decoding="async" src="/assets/images/shape-4.png" alt="" width={349} height={160} />
                                        </div>

                                        <div className="shape shape-4">
                                            <Image decoding="async" src="/assets/fonts/hero-shape-5.svg" alt="" width={59} height={69} />
                                        </div>

                                    </div>
                                    {/* <!-- end slide-inner --> */}
                                </div>
                                {/* <!-- end swiper-slide --> */}


                                {/* <!-- end swiper-slide --> */}

                                <div className="swiper-slide">
                                    <div className="slide-inner slide-bg-image"
                                        data-background="https://aidus.wpolive.com/wp-content/uploads/2024/11/slide-2.jpg">
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <span>We are always open for children</span>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-sub-title">
                                                    <h2>Give support to <span>poverties</span> &amp; <span
                                                        className="text">Old</span> non profit Care</h2>
                                                </div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <div className="btn-wrap">
                                                        <a href="https://aidus.wpolive.com/about-us/"
                                                            className="theme-btn">About Us</a>
                                                    </div>
                                                    <a href="tel:+tel:+025%20757%20576%20560" className="call">
                                                        <div className="icon">
                                                            <i className="fi flaticon-phone"></i>
                                                        </div>
                                                        <div className="text">
                                                            <h3>Call Us Now</h3>
                                                            <span>+025 757 576 560</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-shape">
                                            <Image decoding="async" src="/assets/fonts/left-shape.svg"
                                                alt="http://left-shape" width={983} height={843} />
                                        </div>
                                        <div className="shape shape-1">
                                            <Image decoding="async" src="/assets/fonts/hero-shape-2.svg" alt="" width={128} height={339} />
                                        </div>

                                        <div className="shape shape-2">
                                            <Image decoding="async" src="/assets/fonts/hero-shape-3.svg" alt="" width={115} height={169} />
                                        </div>

                                        <div className="shape shape-3">
                                            <Image decoding="async" src="/assets/images/shape-4.png" alt="" width={349} height={160} />
                                        </div>

                                        <div className="shape shape-4">
                                            <Image decoding="async" src="/assets/fonts/hero-shape-5.svg" alt="" width={59} height={69} />
                                        </div>

                                    </div>
                                    {/* <!-- end slide-inner --> */}
                                </div>
                                {/* <!-- end swiper-slide --> */}


                                {/* <!-- end swiper-slide --> */}
                            </div>


                            {/* <!-- end swiper-wrapper --> */}

                            {/* <!-- swipper controls --> */}
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner