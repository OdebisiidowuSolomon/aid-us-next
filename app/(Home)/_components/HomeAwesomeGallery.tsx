import Image from 'next/image'
import React from 'react'

function HomeAwesomeGallery() {
    return (
        <>
            <div className="elementor-element elementor-element-63612a5 e-con-full e-flex e-con e-child" data-id="63612a5"
                data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-79b9cf6 elementor-widget elementor-widget-wpo-aidus_title"
                    data-id="79b9cf6" data-element_type="widget" data-widget_type="wpo-aidus_title.default">
                    <div className="elementor-widget-container">

                        <div className="section-title-wrap">
                            <div className="container">
                                <div className="section-title section-title-s3">
                                    <span className="subtitle">We are always open for children</span>
                                    <h2>Our Awesome Gallery</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="elementor-element elementor-element-74adc05 e-con-full e-flex e-con e-child"
                    data-id="74adc05" data-element_type="container"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;position&quot;:&quot;absolute&quot;}">
                </div>
            </div>


            <div className="elementor-element elementor-element-018f44e e-con-full e-flex e-con e-parent" data-id="018f44e"
                data-element_type="container">
                <div className="elementor-element elementor-element-0268849 elementor-widget elementor-widget-wpo-aidus_gallery"
                    data-id="0268849" data-element_type="widget" data-widget_type="wpo-aidus_gallery.default">
                    <div className="elementor-widget-container">

                        <div className="aidus-gallery gallery-section">
                            <div className="gallery-main-wrap">
                                <div className="sortable-gallery">
                                    <div className="grid wow1 fadeInUp" data-wow-delay="0.2s">
                                        <div className="img-holder">
                                            <a href="https://aidus.wpolive.com/wp-content/uploads/2024/12/gallery-1.jpg"
                                                className="fancybox" data-fancybox-group="gall-1">
                                                <Image decoding="async" src="/assets/images/gallery-1.jpg" alt=""
                                                    className="img img-responsive"
                                                    width={220}
                                                    height={227}
                                                    />
                                                <div className="hover-content">
                                                    <i className="fi ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid wow1 fadeInUp" data-wow-delay="0.2s">
                                        <div className="img-holder">
                                            <a href="https://aidus.wpolive.com/wp-content/uploads/2024/12/gallery2.jpg"
                                                className="fancybox" data-fancybox-group="gall-1">
                                                <Image decoding="async" src="/assets/images/gallery2.jpg" alt="gallery2"
                                                    className="img img-responsive"
                                                    width={220}
                                                    height={227}
                                                    />
                                                <div className="hover-content">
                                                    <i className="fi ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid wow1 fadeInUp" data-wow-delay="0.2s">
                                        <div className="img-holder">
                                            <a href="https://aidus.wpolive.com/wp-content/uploads/2024/12/gallery3.jpg"
                                                className="fancybox" data-fancybox-group="gall-1">
                                                <Image decoding="async" src="/assets/images/gallery3.jpg" alt=""
                                                    className="img img-responsive"
                                                    width={220}
                                                    height={227}
                                                    />
                                                <div className="hover-content">
                                                    <i className="fi ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid wow1 fadeInUp" data-wow-delay="0.2s">
                                        <div className="img-holder">
                                            <a href="https://aidus.wpolive.com/wp-content/uploads/2024/12/gallery4.jpg"
                                                className="fancybox" data-fancybox-group="gall-1">
                                                <Image decoding="async" src="/assets/images/gallery4.jpg" alt=""
                                                    className="img img-responsive"
                                                    width={220}
                                                    height={227}
                                                    />
                                                <div className="hover-content">
                                                    <i className="fi ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid wow1 fadeInUp" data-wow-delay="0.2s">
                                        <div className="img-holder">
                                            <a href="https://aidus.wpolive.com/wp-content/uploads/2024/12/gallery5.jpg"
                                                className="fancybox" data-fancybox-group="gall-1">
                                                <Image decoding="async" src="/assets/images/gallery5.jpg" alt="gallery5"
                                                    className="img img-responsive"
                                                    width={220}
                                                    height={227}
                                                    />
                                                <div className="hover-content">
                                                    <i className="fi ti-plus"></i>
                                                </div>
                                            </a>
                                        </div>
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

export default HomeAwesomeGallery