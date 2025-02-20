import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PublicHeader() {
    return (
        <header id="header" className="header-builder">
            <div data-elementor-type="wp-post" data-elementor-id="16" className="elementor elementor-16">
                <div className="elementor-element elementor-element-5eeaef5 e-con-full e-flex e-con e-parent"
                    data-id="5eeaef5" data-element_type="container">
                    <div className="elementor-element elementor-element-cfd1ba5 elementor-widget elementor-widget-wpo-aidus_address"
                        data-id="cfd1ba5" data-element_type="widget" data-widget_type="wpo-aidus_address.default">
                        <div className="elementor-widget-container">
                            <div className="topbar s1">
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-12">
                                            <ul className="contact-info">
                                                <li>
                                                    <i className="ti-email"></i><a href="#"
                                                        className="info-link"><span>support@sample.com</span></a>
                                                </li>
                                                <li>
                                                    <i className="fi flaticon-phone"></i><a href="#"
                                                        className="info-link"><span>+12 1234 5874 96</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-7 col-12">
                                            <div className="contact-into">
                                                <ul className="social-media">
                                                    <li><span>Follow Us :</span></li>
                                                    <li><a href="#" className="social-link"><i
                                                        className="fi flaticon-facebook-app-symbol"></i></a></li>
                                                    <li><a href="#" className="social-link"><i
                                                        className="fi flaticon-linkedin"></i></a></li>
                                                    <li><a href="#" className="social-link"><i
                                                        className="fi flaticon-camera"></i></a></li>
                                                    <li><a href="#" className="social-link"><i
                                                        className="fi flaticon-vimeo"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-21ed246 e-con-full e-flex e-con e-parent"
                    data-id="21ed246" data-element_type="container">
                    <div className="elementor-element elementor-element-f2b065f elementor-widget elementor-widget-wpo-aidus_middlebar"
                        data-id="f2b065f" data-element_type="widget"
                        data-settings="{&quot;header_logo&quot;:{&quot;url&quot;:&quot;https:\/\/aidus.wpolive.com\/wp-content\/uploads\/2024\/11\/logo.svg&quot;,&quot;id&quot;:35,&quot;size&quot;:&quot;&quot;,&quot;alt&quot;:&quot;logo&quot;,&quot;source&quot;:&quot;library&quot;}}"
                        data-widget_type="wpo-aidus_middlebar.default">
                        <div className="elementor-widget-container">
                            <div className="midbar">
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-12">
                                            <a className="navbar-brand logo-mid" href="#">
                                                <Image decoding="async" src="/assets/fonts/logo.svg" alt="http://logo" width={126} height={46} /> </a>
                                        </div>
                                        <div className="col-lg-9 col-12">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-clock"></i>
                                                    </div>
                                                    <div className="text">
                                                        <a href="#" className="info-link">
                                                            <h3>Opening Houres</h3>
                                                        </a><a href="#" className="info-link"><span>Mon _ Sat: 9.00 to
                                                            18.00</span></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fi flaticon-home-address"></i>
                                                    </div>
                                                    <div className="text">
                                                        <a href="#" className="info-link">
                                                            <h3>Our Address</h3>
                                                        </a><a href="#" className="info-link"><span>Bowery St, New York,
                                                            USA</span></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fi flaticon-phone-1"></i>
                                                    </div>
                                                    <div className="text">
                                                        <Link href="/contact" className="info-link">
                                                            <h3> Contact Us</h3>
                                                        </Link><a href="#" className="info-link"><span>(671)
                                                            555-0110</span></a>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-c0fcf7d e-con-full e-flex e-con e-parent"
                    data-id="c0fcf7d" data-element_type="container">
                    <div className="elementor-element elementor-element-350abb2 elementor-widget elementor-widget-wpo-aidus_header"
                        data-id="350abb2" data-element_type="widget"
                        data-settings="{&quot;header_logo&quot;:{&quot;url&quot;:&quot;https:\/\/aidus.wpolive.com\/wp-content\/uploads\/2024\/11\/logo-2.svg&quot;,&quot;id&quot;:351,&quot;size&quot;:&quot;&quot;,&quot;alt&quot;:&quot;logo-2&quot;,&quot;source&quot;:&quot;library&quot;}}"
                        data-widget_type="wpo-aidus_header.default">
                        <div className="elementor-widget-container">
                            <div className="s1">
                                <div className="wpo-custom-site-header wpo-site-header">
                                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                                        <div className="container-fluid">
                                            <div className="row align-items-center">
                                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                                    <div className="mobail-menu">
                                                        <button type="button" className="navbar-toggler open-btn">
                                                            <span className="sr-only">Toggle navigation</span>
                                                            <span className="icon-bar first-angle"></span>
                                                            <span className="icon-bar middle-angle"></span>
                                                            <span className="icon-bar last-angle"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-0 col-md-6 col-6">
                                                    <div className="navbar-header">
                                                        <a className="navbar-brand" href="#">
                                                            <Image decoding="async" src="/assets/fonts/logo-2.svg"
                                                                alt="http://logo-2" width={126} height={46} /> </a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-1 col-1">
                                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                                        <button className="menu-close"><i className="ti-close"></i></button>
                                                        <ul id="menu-1-350abb2" className="nav navbar-nav mb-2 mb-lg-0">
                                                            <li id="menu-item-23"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-childrenl menu-item-23">
                                                                <Link href="/">Home</Link>
                                                            </li>
                                                            <li id="menu-item-203"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-178 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-203">
                                                                <Link href="/about"
                                                                    aria-current="page">About Us</Link>

                                                            </li>
                                                            <li id="menu-item-213"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-213">
                                                                <Link
                                                                    href="/services/">Services</Link>

                                                            </li>
                                                            <li id="menu-item-2965"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2965">
                                                                <Link href="/events/">Events</Link>
                                                            </li>
                                                            <li id="menu-item-217"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-217">
                                                                <a href="/causes">Causes</a>
                                                            </li>
                                                            <li id="menu-item-221"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-221">
                                                                {/* <a href="/blog/">Blog</a> */}
                                                            </li>
                                                            <li id="menu-item-3050"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3050">
                                                                <a href="/contact/">Contact</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <!-- end of nav-collapse -->
                                                    <!-- end of nav-collapse --> */}
                                                </div>
                                                <div className="col-lg-5 col-md-2 col-2">
                                                    <div className="header-right">
                                                        <div className="header-search-form-wrapper">
                                                            <div className="cart-search-contact">
                                                                <button className="search-toggle-btn"><i
                                                                    className="fi ti-search"></i></button>
                                                                <div className="header-search-form">
                                                                    <form method="get"
                                                                        action="/"
                                                                        className="form">
                                                                        <div>
                                                                            <input type="text" name="s"
                                                                                className="form-control"
                                                                                placeholder="Search here" />
                                                                            <button type="submit">
                                                                                <i className="ti-search"></i>
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mini-cart">
                                                            <button className="cart-toggle-btn"><i
                                                                className="fi ti-shopping-cart"></i>
                                                                <span className="cart-count">
                                                                    0 </span>
                                                            </button>
                                                            <div className="mini-cart-content">
                                                                <button className="mini-cart-close"><i
                                                                    className="ti-close"></i></button>
                                                                <div className="mini-cart-title">
                                                                    <p>Shopping Cart</p>
                                                                </div>
                                                                <div className="mini-cart-items">
                                                                </div>
                                                                <div className="mini-cart-empty">
                                                                    <p className="no-products">Your basket is empty!.</p>
                                                                    <div className="cart-emty-icon">
                                                                        <i className="fi ti-shopping-cart"></i>
                                                                    </div>
                                                                    <a href="/shop/"
                                                                        className="view-cart-btn s2">
                                                                        Start Shopping </a>
                                                                </div>
                                                                <div className="mini-cart-action clearfix">
                                                                    <span className="mini-checkout-price">
                                                                        Subtotal: <span><span
                                                                            className="woocommerce-Price-amount amount"><bdi><span
                                                                                className="woocommerce-Price-currencySymbol">$</span>0.00</bdi></span></span>
                                                                    </span>

                                                                    <a href="/checkout/"
                                                                        className="view-cart-btn s1">
                                                                        Checkout </a>
                                                                    <a href="/cart/"
                                                                        className="view-cart-btn">
                                                                        View Cart </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="close-form">
                                                            <Link href="/donation"
                                                                className="theme-btn">Donate now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PublicHeader