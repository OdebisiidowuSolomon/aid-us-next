import Image from 'next/image'
import React from 'react'

function DonationDetailContent() {
    return (
        <div className="case-single-section wpo-case-details-wrap section-padding">
            <div className="donate-area-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="donate-area-wrapper">
                                <div className="img-holder featured-img big-img">
                                    <Image src="/assets/images/case-single2.jpg" alt="" width={678} height={394} />
                                </div>
                                <h1 itemProp="name" className="give-form-title entry-title">Let&apos;s be Kind For The Poor
                                    Children</h1>
                                <div id="give-form-3441-wrap" className="give-form-wrap give-display-onpage">
                                    <div className="give-goal-progress">
                                        <div className="raised">
                                            <span className="income" data-amounts="{
&quot;USD&quot;: 73527
}">$73,527</span> of <span className="goal-text" data-amounts="{
&quot;USD&quot;: 100000
}">$100,000</span> raised
                                        </div>

                                        <div className="progress-bar">
                                            <div className="give-progress-bar" role="progressbar" aria-valuemin={0}
                                                aria-valuemax={100} aria-valuenow={73.53}>
                                                <span
                                                    style={{ width: "73.53%", background: "linear-gradient(180deg, #2bc253 0%, #2bc253 100%), linear-gradient(180deg, #fff 0%, #ccc 100%)", backgroundBlendMode: "multiply" }}></span>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- /.goal-progress --> */}

                                    <div className="give_error give_warning" id="give_error_test_mode">
                                        <p><strong>Notice:</strong> Test mode is enabled. While in test mode no live
                                            donations are processed.</p>
                                    </div>
                                    <div id="give-form-content-3441"
                                        className="give-form-content-wrap give_pre_form-content"></div>
                                    <form id="give-form-3441-1" className="give-form give-form-3441 give-form-type-multi"
                                        action="#?payment-mode=manual&amp;form-id=3441"
                                        data-id="3441-1" data-currency_symbol="$" data-currency_code="USD"
                                        data-currency_position="before" data-thousands_separator=","
                                        data-decimal_separator="." data-number_decimals="2" method="post">
                                        {/* <!-- The following field is for robots only, invisible to humans: --> */}
                                        <span className="give-hidden" style={{ display: "none !important" }}>
                                            <label htmlFor="give-form-honeypot-3441"></label>
                                            <input id="give-form-honeypot-3441" type="text" name="give-honeypot"
                                                className="give-honeypot give-hidden" />
                                        </span>


                                        <div className="give-total-wrap">
                                            <div className="give-donation-amount form-row-wide">
                                                <span
                                                    className="give-currency-symbol give-currency-position-before">$</span>
                                                <label className="give-hidden" htmlFor="give-amount">Donation Amount:</label>
                                                <input className="give-text-input give-amount-top" id="give-amount"
                                                    name="give-amount" type="text" inputMode="decimal" placeholder=""
                                                    autoComplete='' />
                                            </div>
                                        </div>
                                        <ul id="give-donation-level-button-wrap"
                                            className="give-donation-levels-wrap give-list-inline">
                                            <li><button type="button" data-price-id="0"
                                                className="give-donation-level-btn give-btn give-btn-level-0 "
                                                data-default="0">Education</button></li>
                                            <li><button type="button" data-price-id="1"
                                                className="give-donation-level-btn give-btn give-btn-level-1 "
                                                data-default="0">Water</button></li>
                                            <li><button type="button" data-price-id="2"
                                                className="give-donation-level-btn give-btn give-btn-level-2 "
                                                data-default="0">Gaza</button></li>
                                            <li><button type="button" data-price-id="3"
                                                className="give-donation-level-btn give-btn give-btn-level-3 give-default-level"
                                                data-default="1">Africa</button></li>
                                            <li><button type="button" data-price-id="5"
                                                className="give-donation-level-btn give-btn give-btn-level-5 "
                                                data-default="0">$250.00</button></li>
                                            <li><button type="button" data-price-id="custom"
                                                className="give-donation-level-btn give-btn give-btn-level-custom"
                                            >Custom Amount</button></li>
                                        </ul>
                                        <fieldset id="give-payment-mode-select">
                                            <legend className="give-payment-mode-label">Select Payment Method <span
                                                className="give-loading-text"><span
                                                    className="give-loading-animation"></span>
                                            </span>
                                            </legend>

                                            <div id="give-payment-mode-wrap">
                                                <ul id="give-gateway-radio-list">
                                                    <li className="give-gateway-option-selected">
                                                        <input type="radio" name="payment-mode" className="give-gateway"
                                                            id="give-gateway-manual-3441-1"
                                                            defaultChecked />
                                                        <label htmlFor="give-gateway-manual-3441-1"
                                                            className="give-gateway-option" id="give-gateway-option-manual">
                                                            Test Donation</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" name="payment-mode" className="give-gateway"
                                                            id="give-gateway-offline-3441-1" disabled />
                                                        <label htmlFor="give-gateway-offline-3441-1"
                                                            className="give-gateway-option"
                                                            id="give-gateway-option-offline"> Offline Donation</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </fieldset>


                                        <div id="give_purchase_form_wrap">

                                            <fieldset id="give_checkout_user_info" className="">
                                                <legend>
                                                    Personal Info </legend>


                                                <p id="give-first-name-wrap"
                                                    className="form-row form-row-first form-row-responsive">
                                                    <label className="give-label" htmlFor="give-first">
                                                        First Name <span className="give-required-indicator">*</span>
                                                        <span className="give-tooltip hint--top hint--medium hint--bounce"
                                                            aria-label="First Name is used to personalize your donation record."
                                                            rel="tooltip"><i
                                                                className="give-icon give-icon-question"></i></span>
                                                    </label>
                                                    <input className="give-input required" type="text" name="give_first"
                                                        autoComplete="given-name" placeholder="First Name"
                                                        id="give-first" required aria-required="true" />
                                                </p>

                                                <p id="give-last-name-wrap"
                                                    className="form-row form-row-last form-row-responsive">
                                                    <label className="give-label" htmlFor="give-last">
                                                        Last Name <span
                                                            className="give-tooltip hint--top hint--medium hint--bounce"
                                                            aria-label="Last Name is used to personalize your donation record."
                                                            rel="tooltip"><i
                                                                className="give-icon give-icon-question"></i></span>
                                                    </label>

                                                    <input className="give-input" type="text" name="give_last"
                                                        autoComplete="family-name" id="give-last"
                                                        placeholder="Last Name" />
                                                </p>


                                                <p id="give-email-wrap" className="form-row form-row-wide">
                                                    <label className="give-label" htmlFor="give-email">
                                                        Email Address <span className="give-required-indicator">*</span>
                                                        <span className="give-tooltip hint--top hint--medium hint--bounce"
                                                            aria-label="We will send the donation receipt to this address."
                                                            rel="tooltip"><i
                                                                className="give-icon give-icon-question"></i></span>
                                                    </label>
                                                    <input className="give-input required" type="email" name="give_email"
                                                        autoComplete="email" placeholder="Email Address" id="give-email"
                                                        aria-required="true" />

                                                </p>


                                            </fieldset>
                                            <fieldset id="give_purchase_submit" className="give-donation-submit">
                                                <p id="give-final-total-wrap" className="form-wrap ">
                                                    <span className="give-donation-total-label">
                                                        Donation Total: </span>
                                                    <span className="give-final-total-amount" data-total="100.00">
                                                        $100.00 </span>
                                                </p>
                                                <input type="hidden" name="give_action" />
                                                <input type="hidden" name="give-gateway" />
                                                <div className="give-submit-button-wrap give-clearfix">
                                                    <input type="submit" className="give-submit give-btn"
                                                        id="give-purchase-button" name="give-purchase"
                                                        data-before-validation-label="Donate Now" />
                                                    <span className="give-loading-animation"></span>
                                                </div>
                                            </fieldset>

                                        </div>

                                    </form>


                                </div>
                                {/* <!--end #give-form-3441--> */}
                            </div>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="case-single-sidebar blog-sidebar">
                                <div id="search-5" className=" widget_search widget widget_search">
                                    <div className="search-widget">
                                        <form method="get" action="https://aidus.wpolive.com/" className="searchform">
                                            <div>
                                                <input type="text" name="s" id="search-form-1" placeholder="Search..." />
                                                <button type="submit"><i className="ti-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div id="-causes-blog-3" className="recent-post-widget widget recent-post-widget">
                                    <h3 className="widgettitle widget-title">Causes Posts</h3>
                                    <div className="posts">
                                        <div className="post">
                                            <div className="img-holder">
                                                <Image src="/assets/images/causes4.jpg" alt="causes4" width={100} height={90} />
                                            </div>
                                            <div className="details">
                                                <h4><a
                                                    href="#">Bringing
                                                    Clean Water to Rural Communities</a></h4>
                                                <span className="give_goal_raised"><span className="goal"> Goal: </span>$2.04
                                                    million </span>
                                            </div>
                                        </div>

                                        <div className="post">
                                            <div className="img-holder">
                                                <Image src="/assets/images/causes1.jpg" alt="causes1" width={100} height={90} />
                                            </div>
                                            <div className="details">
                                                <h4><a
                                                    href="#">Lifeskills
                                                    for Children in South Africa</a></h4>
                                                <span className="give_goal_raised"><span className="goal"> Goal:
                                                </span>$6,080.00 </span>
                                            </div>
                                        </div>

                                        <div className="post">
                                            <div className="img-holder">
                                                <Image src="/assets/images/causes2.jpg" alt="causes2" width={100} height={90} />
                                            </div>
                                            <div className="details">
                                                <h4><a
                                                    href="#">Let&apos;s
                                                    be Kind For The Poor Children</a></h4>
                                                <span className="give_goal_raised"><span className="goal"> Goal:
                                                </span>$73,527.00 </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div id="tag_cloud-4" className="widget widget_tag_cloud">
                                    <h3 className="widgettitle widget-title">Tags</h3>
                                    <div className="tagcloud"><a href="#"
                                        className="tag-cloud-link tag-link-30 tag-link-position-1"
                                        style={{ fontSize: "8pt" }} aria-label="Care (1 item)">Care</a>
                                        <a href="#"
                                            className="tag-cloud-link tag-link-22 tag-link-position-2"
                                            style={{ fontSize: "22pt" }} aria-label="Giving Back (3 items)">Giving Back</a>
                                        <a href="#"
                                            className="tag-cloud-link tag-link-29 tag-link-position-3"
                                            style={{ fontSize: "8pt" }} aria-label="Helping (1 item)">Helping</a>
                                        <a href="#"
                                            className="tag-cloud-link tag-link-26 tag-link-position-4"
                                            style={{ fontSize: "16.4pt" }} aria-label="Kindness (2 items)">Kindness</a>
                                        <a href="#"
                                            className="tag-cloud-link tag-link-31 tag-link-position-5"
                                            style={{ fontSize: "8pt" }} aria-label="Poor (1 item)">Poor</a>
                                        <a href="#"
                                            className="tag-cloud-link tag-link-25 tag-link-position-6"
                                            style={{ fontSize: "16.4pt" }} aria-label="Positive Impact (2 items)">Positive
                                            Impact</a>
                                        <a href="#"
                                            className="tag-cloud-link tag-link-23 tag-link-position-7"
                                            style={{ fontSize: "22pt" }} aria-label="Relief Effort (3 items)">Relief
                                            Effort</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end container --> */}
        </div>
    )
}

export default DonationDetailContent