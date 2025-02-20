import Image from 'next/image';
import Link from 'next/link';
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
                                                <li><Link href="#"><i className="ti-facebook"></i></Link></li>
                                                <li><Link href="#"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link href="#"><i className="ti-pinterest"></i></Link></li>
                                                <li><Link href="#"><i className="ti-instagram"></i></Link></li>
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
                                                    <Link href="/service/1">Medical
                                                        Treatment Help</Link></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2562">
                                                    <Link href="/service/1">Corporate
                                                        Gifts donate</Link></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2563">
                                                    <Link href="/service/1">Child
                                                        medical research</Link></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2564">
                                                    <Link href="/service/1">development
                                                        programs</Link></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2561">
                                                    <Link href="/service/1">They
                                                        get new home</Link></li>
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
                                                    <Link href="/about/"
                                                        aria-current="page">About Us</Link></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-give_forms menu-item-3592">
                                                    <Link
                                                        href="/donation/">Donate</Link>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2570">
                                                    <Link href="/volunteer/">Volunteer</Link></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2568">
                                                    <Link href="/events/">Events</Link></li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3353">
                                                    <Link href="/contact/">Contact</Link></li>
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
                            <p>© Copyright 2025 | <Link href="/">AidUs - Fundraising &amp; Charity
                            </Link> | All right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default PublicFooter