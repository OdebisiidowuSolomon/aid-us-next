import PublicBanner from '@/app/_components/PublicBanner'
import React from 'react'

function ContactPage() {
    return (
        <div>
            <PublicBanner title='Contact' />


            <div data-elementor-type="wp-page" data-elementor-id="3048" className="elementor elementor-3048">
                <div className="elementor-element elementor-element-a895575 e-con-full e-flex e-con e-parent" data-id="a895575"
                    data-element_type="container">
                    <div className="elementor-element elementor-element-d05de7f elementor-widget elementor-widget-wpo-aidus_contactinfo"
                        data-id="d05de7f" data-element_type="widget" data-widget_type="wpo-aidus_contactinfo.default">
                        <div className="elementor-widget-container">
                            <div className="contact-info-section">
                                <div className="container">
                                    <div className="office-info">
                                        <div className="row">
                                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                                <div className="office-info-item ">
                                                    <div className="office-info-icon">
                                                        <div className="icon">
                                                            <i className="fi flaticon-maps-and-flags"></i>
                                                        </div>
                                                    </div>
                                                    <div className="office-info-text">
                                                        <span>Address line</span>
                                                        <p>Bowery St, New York, 37 USA<br />NY 10013,USA</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                                <div className="office-info-item active">
                                                    <div className="office-info-icon">
                                                        <div className="icon">
                                                            <i className="fi flaticon-phone-call"></i>
                                                        </div>
                                                    </div>
                                                    <div className="office-info-text">
                                                        <span>Phone Number</span>
                                                        <p>+1255 - 568 - 6523 4374-221<br />+1255 - 568 - 6523</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                                <div className="office-info-item ">
                                                    <div className="office-info-icon">
                                                        <div className="icon">
                                                            <i className="fi flaticon-phone-call"></i>
                                                        </div>
                                                    </div>
                                                    <div className="office-info-text">
                                                        <span>Email Address</span>
                                                        <p>contact@aidUs.com<br />info@aidUs.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end contianer --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-83be737 e-flex e-con-boxed e-con e-parent" data-id="83be737"
                    data-element_type="container">
                    <div className="e-con-inner">
                        <div className="elementor-element elementor-element-35f08e1 elementor-widget elementor-widget-wpo-aidus_contact_form"
                            data-id="35f08e1" data-element_type="widget" data-widget_type="wpo-aidus_contact_form.default">
                            <div className="elementor-widget-container">
                                <div className="aidus-contact-section wpo-contact-pg-section">
                                    <div className="section-title section-title-s3">
                                        <span>Contact Us</span>
                                        <h2>Have Any Question?</h2>
                                    </div>

                                    <div className="wpcf7 no-js" id="wpcf7-f6-p3048-o1" lang="en-US" dir="ltr"
                                        data-wpcf7-id="6">
                                        <div className="screen-reader-response">
                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                            <ul></ul>
                                        </div>
                                        <form action="/contact/#wpcf7-f6-p3048-o1" method="post" className="wpcf7-form init"
                                            aria-label="Contact form" noValidate={true} data-status="init">
                                            <div style={{ display: "none" }}>
                                            </div>
                                            <div className="wpo-contact-form-area">
                                                <div className="wrap">
                                                    <div className="form-field">
                                                        <p><span className="wpcf7-form-control-wrap" data-name="text-743"><input
                                                            size={40} maxLength={400}
                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                                            autoComplete="name" aria-required="true"
                                                            aria-invalid="false" placeholder="Your Name*"
                                                            type="text" name="text-743" /></span>
                                                        </p>
                                                    </div>
                                                    <div className="form-field">
                                                        <p><span className="wpcf7-form-control-wrap"
                                                            data-name="email-293"><input size={40} maxLength={400}
                                                                className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control"
                                                                autoComplete="email" aria-required="true"
                                                                aria-invalid="false" placeholder="Your Email*"
                                                                type="email" name="email-293" /></span>
                                                        </p>
                                                    </div>
                                                    <div className="form-field">
                                                        <p><span className="wpcf7-form-control-wrap" data-name="text-629"><input
                                                            size={40} maxLength={400}
                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                                            autoComplete="name" aria-required="true"
                                                            aria-invalid="false" placeholder="Adress"
                                                            type="text" name="text-629" /></span>
                                                        </p>
                                                    </div>
                                                    <div className=" form-field">
                                                        <p><span className="wpcf7-form-control-wrap"
                                                            data-name="select-650"><select
                                                                className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-control"
                                                                aria-required="true" aria-invalid="false"
                                                                name="select-650">
                                                                <option value="Product Design">Product Design</option>
                                                                <option value="Development">Development</option>
                                                                <option value="Data Analysis">Data Analysis</option>
                                                            </select></span>
                                                        </p>
                                                    </div>
                                                    <div className="fullwidth form-field">
                                                        <p><span className="wpcf7-form-control-wrap"
                                                            data-name="textarea-667"><textarea cols={40} rows={10}
                                                                maxLength={2000}
                                                                className="wpcf7-form-control wpcf7-textarea form-control"
                                                                aria-invalid="false" placeholder="Message..."
                                                                name="textarea-667"></textarea></span>
                                                        </p>
                                                    </div>
                                                    <div className="submit-area">
                                                        <p><input
                                                            className="wpcf7-form-control wpcf7-submit has-spinner theme-btn"
                                                            type="submit" value="Get in Touch" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpcf7-response-output" aria-hidden="true"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-f2a37e1 e-con-full e-flex e-con e-parent" data-id="f2a37e1"
                    data-element_type="container">
                    <div className="elementor-element elementor-element-315487f elementor-widget elementor-widget-google_maps"
                        data-id="315487f" data-element_type="widget" data-widget_type="google_maps.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-custom-embed">
                                {/* <iframe loading="lazy" src="embed.html" title="London Eye, London, United Kingdom"
                                    aria-label="London Eye, London, United Kingdom"></iframe> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253700.9456454776!2d3.610084097564691!3d6.511903031138606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1740058157410!5m2!1sen!2sng" width="600" height="450" style={{border:"0"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage