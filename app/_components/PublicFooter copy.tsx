import Image from 'next/image';
import React from 'react'

function PublicFooter() {
    return (
        <footer className="wpo-site-footer clearfix" style={{ backgroundImage: "url('/assets/images/footer-bg.jpg')" }}>
            {/* <!-- Footer Widgets --> */}
            <div className="wpo-upper-footer">
                <div className="footer-widget-area">
                    <div className="container">
                        <div className="row">
                            <div className="separator"></div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="about-widget widget text-widget">
                                    <div className="widget about-widget about-widget">
                                        <div className="logo widget-title">
                                            <Image src="/assets/fonts/logo-2.svg" alt="logo-2" width={126} height={46} />
                                        </div>
                                        <p>The aidus Charity is an organization dedicated to improving the lives of
                                            those in need through various humanitarian, Pets efforts.</p>
                                        <div className="social-icons">
                                            <ul>
                                                <li><a href="#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                                <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                                <li><a href="#"><i className="ti-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- end widget --> */}
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className=" widget link-widget">
                                    <div className="widget-title">
                                        <h3>Services</h3>
                                    </div>
                                    <div className=" nav-notenabled-child">
                                        <div className="menu-service-menu-container">
                                            <ul id="menu-service-menu-1" className="menu -sidenav">
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2565">
                                                    <a href="https://aidus.wpolive.com/service/medical-treatment-help/">Medical
                                                        Treatment Help</a></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2562">
                                                    <a href="https://aidus.wpolive.com/service/corporate-gifts-donate/">Corporate
                                                        Gifts donate</a></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2563">
                                                    <a href="https://aidus.wpolive.com/service/child-medical-research/">Child
                                                        medical research</a></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2564">
                                                    <a href="https://aidus.wpolive.com/service/development-programs/">development
                                                        programs</a></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2561">
                                                    <a href="https://aidus.wpolive.com/service/they-get-new-home/">They
                                                        get new home</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- end widget --> */}
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className=" widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful links</h3>
                                    </div>
                                    <div className=" nav-notenabled-child">
                                        <div className="menu-footer-menu-container">
                                            <ul id="menu-footer-menu-1" className="menu -sidenav">
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-178 current_page_item menu-item-2566">
                                                    <a href="https://aidus.wpolive.com/about-us/"
                                                        aria-current="page">About Us</a></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-give_forms menu-item-3592">
                                                    <a
                                                        href="https://aidus.wpolive.com/donations/lets-be-kind-for-the-poor-children/">Donate</a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2570">
                                                    <a href="https://aidus.wpolive.com/volunteer/">Volunteer</a></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2568">
                                                    <a href="https://aidus.wpolive.com/events/">Events</a></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3353">
                                                    <a href="https://aidus.wpolive.com/contact/">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- end widget --> */}
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="newsletter-s2 widget widget_mc4wp_form_widget">
                                    <div className="widget-title">
                                        <h3>Subscribe Newsletter</h3>
                                    </div>
                                    <script>
                                        {`(function () {
                                        window.mc4wp = window.mc4wp || {
                                            listeners: [],
                                            forms: {
                                                on: function (evt, cb) {
                                                    window.mc4wp.listeners.push(
                                                        {
                                                            event: evt,
                                                            callback: cb
                                                        }
                                                    );
                                                }
                                            }
                                        }
                                    })();`}
                                    </script>
                                    {/* <!-- Mailchimp for WordPress v4.10.0 - https://wordpress.org/plugins/mailchimp-for-wp/ --> */}
                                    <form id="mc4wp-form-2" className="mc4wp-form mc4wp-form-2571" method="post"
                                        data-id="2571" data-name="">
                                        <div className="mc4wp-form-fields">
                                            <p>These agencies specialize leveraging various digital channels, such as
                                                social media advertising</p>

                                            <div className="form-fild">
                                                <input type="email" id="email" name="EMAIL" placeholder="Email Address"
                                                    className="fild" />
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </div><label style={{ display: "none !important" }}>Leave this field empty if you&apos;re
                                            human: <input type="text" name="_mc4wp_honeypot" tabIndex={-1}
                                                autoComplete="off" /></label>
                                        <div className="mc4wp-response"></div>
                                    </form>
                                    {/* <!-- / Mailchimp for WordPress Plugin --> */}
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- end widget --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer Widgets --> */}
            <div className="wpo-lower-footer  has-not-copyright text-center">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <div className="col col-xs-12">
                            <p>© Copyright 2025 | <a href="https://aidus.wpolive.com">AidUs - Fundraising &amp; Charity
                                WordPress Theme</a> | All right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default PublicFooter