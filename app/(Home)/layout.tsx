'use client'

import Head from "next/head";
import Script from "next/script";
// import "./globals.css";


import "@/public/assets/css/aidus-elementor.css"
import "@/public/assets/css/styles.css"
import "@/public/assets/css/woocommerce-layout.css"
import "@/public/assets/css/woocommerce-smallscreen.css"
import "@/public/assets/css/woocommerce.css"
import "@/public/assets/css/give.css"
import "@/public/assets/css/give-donation-summary.css"
import "@/public/assets/css/brands.css"
import "@/public/assets/css/themify-icons.css"
import "@/public/assets/css/flaticon.css"
import "@/public/assets/css/bootstrap.min.css"
import "@/public/assets/css/animate.css"
import "@/public/assets/css/odometer.css"
import "@/public/assets/css/progresscircle.css"
import "@/public/assets/css/owl.carousel.css"
import "@/public/assets/css/owl.theme.css"
import "@/public/assets/css/slick.css"
import "@/public/assets/css/swiper.min.css"
import "@/public/assets/css/slick-theme.css"
import "@/public/assets/css/owl.transitions.css"
import "@/public/assets/css/fancybox.css"
import "@/public/assets/css/styles_1.css"
import "@/public/assets/css/elements.css"
import "@/public/assets/css/css2_1.css#038;display=swap"
import "@/public/assets/css/css2.css#038;display=swap"
import "@/public/assets/css/css2_2.css#038;display=swap"
import "@/public/assets/css/responsive.css"
import "@/public/assets/css/style.css"
import "@/public/assets/css/frontend.min.css"
import "@/public/assets/css/post-7.css"
import "@/public/assets/css/all.min.css"
import "@/public/assets/css/v4-shims.min.css"
import "@/public/assets/css/post-14.css"
import "@/public/assets/css/css.css"
import "@/public/assets/css/flaticon_1.css"
import "@/public/assets/css/flaticon_1.css"
import "@/public/assets/css/wc-blocks.css"
import "@/public/assets/css/post-16.css"
import PublicHeader from "../(Public)/_components/PublicHeader";
import PublicFooter from "../(Public)/_components/PublicFooter";
import Image from "next/image";
import { useEffect } from "react";


export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    useEffect(() => {
        const preloader: HTMLDivElement | null = document.querySelector(".preloader");


        if (preloader && (document.readyState)) {
            console.log(document.readyState);

            preloader.style.display = 'none';
            // preloader.classList.add('hide')
            console.log("Done Loading", preloader.classList);
        }
    }, []);

    return (
        <html lang="en">
            <Head>
                <script type="text/javascript">
                    {`/* <![CDATA[ */
                    window._wpemojiSettings = {"baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/", "svgExt": ".svg", "source": {"concatemoji": "https:\/\/aidus.wpolive.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.7.2" } };
                    /*! This file is auto-generated */
                    !function (i, n) { var o, s, e; function c(e) { try { var t = {supportTests: e, timestamp: (new Date).valueOf() }; sessionStorage.setItem(o, JSON.stringify(t)) } catch (e) { } } function p(e, t, n) {e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0); var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data), r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data)); return t.every(function (e, t) { return e === r[t] }) } function u(e, t, n) { switch (t) { case "flag": return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b") }return !1 } function f(e, t, n) { var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"), a = r.getContext("2d", {willReadFrequently: !0 }), o = (a.textBaseline = "top", a.font = "600 32px Arial", { }); return e.forEach(function (e) {o[e] = t(a, e, n)}), o } function t(e) { var t = i.createElement("script"); t.src = e, t.defer = !0, i.head.appendChild(t) } "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = {everything: !0, everythingExceptFlag: !0 }, e = new Promise(function (e) {i.addEventListener("DOMContentLoaded", e, { once: !0 })}), new Promise(function (t) { var n = function () { try { var e = JSON.parse(sessionStorage.getItem(o)); if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests } catch (e) { } return null }(); if (!n) { if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try { var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));", r = new Blob([e], {type: "text/javascript" }), a = new Worker(URL.createObjectURL(r), {name: "wpTestEmojiSupports" }); return void (a.onmessage = function (e) {c(n = e.data), a.terminate(), t(n)}) } catch (e) { } c(n = f(s, u, p)) } t(n) }).then(function (e) { for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]); n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function () {n.DOMReady = !0} }).then(function () { return e }).then(function () { var e; n.supports.everything || (n.readyCallback(), (e = n.source || { }).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji))) })) }((window, document), window._wpemojiSettings);
                /* ]]> */`}
                </script>
                <script type="text/javascript" id="wp-i18n-js-after">
                    {`/* <![CDATA[ */
                    wp.i18n.setLocaleData({'text direction\u0004ltr': ['ltr'] });
                /* ]]> */`}
                </script>

                <script type="text/javascript" id="wc-add-to-cart-js-extra">
                    {`/* <![CDATA[ */
                    var wc_add_to_cart_params = {"ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/?wc-ajax=%%endpoint%%", "i18n_view_cart": "View cart", "cart_url": "https:\/\/aidus.wpolive.com\/cart\/", "is_cart": "", "cart_redirect_after_add": "no" };
                /* ]]> */`}
                </script>

                <script type="text/javascript" id="woocommerce-js-extra">
                    {`/* <![CDATA[ */
                    var woocommerce_params = {"ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/?wc-ajax=%%endpoint%%" };
                /* ]]> */`}
                </script>

                <script type="text/javascript" id="give-js-extra">
                    {`/* <![CDATA[ */
                    var give_global_vars = {"ajaxurl": "https:\/\/aidus.wpolive.com\/wp-admin\/admin-ajax.php", "checkout_nonce": "f639da2d69", "currency": "USD", "currency_sign": "$", "currency_pos": "before", "thousands_separator": ",", "decimal_separator": ".", "no_gateway": "Please select a payment method.", "bad_minimum": "The minimum custom donation amount for this form is", "bad_maximum": "The maximum custom donation amount for this form is", "general_loading": "Loading...", "purchase_loading": "Please Wait...", "textForOverlayScreen": "<h3>Processing...<\/h3><p>This will only take a second!<\/p>", "number_decimals": "2", "is_test_mode": "1", "give_version": "3.21.1", "magnific_options": {"main_class": "give-modal", "close_on_bg_click": false }, "form_translation": {"payment-mode": "Please select payment mode.", "give_first": "Please enter your first name.", "give_last": "Please enter your last name.", "give_email": "Please enter a valid email address.", "give_user_login": "Invalid email address or username.", "give_user_pass": "Enter a password.", "give_user_pass_confirm": "Enter the password confirmation.", "give_agree_to_terms": "You must agree to the terms and conditions." }, "confirm_email_sent_message": "Please check your email and click on the link to access your complete donation history.", "ajax_vars": {"ajaxurl": "https:\/\/aidus.wpolive.com\/wp-admin\/admin-ajax.php", "ajaxNonce": "cc25019b1f", "loading": "Loading", "select_option": "Please select an option", "default_gateway": "manual", "permalinks": "1", "number_decimals": 2 }, "cookie_hash": "66d3b0b7d6b0a21da36660482bd1b0dd", "session_nonce_cookie_name": "wp-give_session_reset_nonce_66d3b0b7d6b0a21da36660482bd1b0dd", "session_cookie_name": "wp-give_session_66d3b0b7d6b0a21da36660482bd1b0dd", "delete_session_nonce_cookie": "0" };
                        var giveApiSettings = {"root": "https:\/\/aidus.wpolive.com\/wp-json\/give-api\/v2\/", "rest_base": "give-api\/v2" };
                    /* ]]> */`}
                </script>
            </Head>
            <body
                className={`home page-template page-template-elementor_header_footer page page-id-14 theme-aidus woocommerce-no-js give-test-mode give-page elementor-default elementor-template-full-width elementor-kit-7 elementor-page elementor-page-14`}
            >

                <div className="page-wrapper layout-full">

                    <div className="preloader">
                        <div className="vertical-centered-box">
                            <div className="content">
                                <div className="loader-circle"></div>
                                <div className="loader-line-mask">
                                    <div className="loader-line"></div>
                                </div>
                                <Image src="/assets/images/preloader.png" alt="" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <PublicHeader />
                    {children}
                    <PublicFooter />
                </div>




                <Script type="text/javascript" src="/assets/js/jquery.min.js" id="jquery-core-js"></Script>
                <Script type="text/javascript" src="/assets/js/jquery-migrate.min.js" id="jquery-migrate-js"></Script>
                <Script type="text/javascript" src="/assets/js/hooks.min.js" id="wp-hooks-js"></Script>
                <Script type="text/javascript" src="/assets/js/i18n.min.js" id="wp-i18n-js"></Script>
                <Script type="text/javascript" src="/assets/js/give.js" id="give-js"></Script>
                <Script type="text/javascript" src="/assets/js/v4-shims.min.js" id="font-awesome-4-shim-js"></Script>

                <script>
                    {`
                (function () {
			function maybePrefixUrlField() {
				const value = this.value.trim()
				if (value !== '' && value.indexOf('http') !== 0) {
					this.value = 'http://' + value
				}
			}

			const urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]')
			for (let j = 0; j < urlFields.length; j++) {
				urlFields[j].addEventListener('blur', maybePrefixUrlField)
			}
		})();`}
                </script>
                <script>
                    {`const lazyloadRunObserver = () => {
			const lazyloadBackgrounds = document.querySelectorAll('.e - con.e - parent:not(.e-lazyloaded)');
			const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                let lazyloadBackground = entry.target;
                                if (lazyloadBackground) {
                                    lazyloadBackground.classList.add('e-lazyloaded');
                                }
                                lazyloadBackgroundObserver.unobserve(entry.target);
                            }
                        });
			}, {rootMargin: '200px 0px 200px 0px' });
			lazyloadBackgrounds.forEach((lazyloadBackground) => {
                        lazyloadBackgroundObserver.observe(lazyloadBackground);
			});
		};
                    const events = [
                    'DOMContentLoaded',
                    'elementor/lazyload/observe',
                    ];
		events.forEach((event) => {
                        document.addEventListener(event, lazyloadRunObserver);
		});`}
                </script>
                <script type="text/javascript">
                    {` (function () {
			var c = document.body.className;
                    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
                    document.body.className = c;
		})();`}
                </script>
                <Script type="text/javascript" src="/assets/js/plugin-scripts.js" id="plugin-scripts-js"></Script>
                <Script type="text/javascript" src="/assets/js/index.js" id="swv-js"></Script>
                <script type="text/javascript" id="contact-form-7-js-before">
                    {`/* <![CDATA[ */
                    var wpcf7 = {
                        "api": {
                        "root": "https:\/\/aidus.wpolive.com\/wp-json\/",
                    "namespace": "contact-form-7\/v1"
			}
		};
                /* ]]> */`}
                </script>
                <Script type="text/javascript" src="/assets/js/index_1.js" id="contact-form-7-js"></Script>
                <Script type="text/javascript" id="give-donation-summary-script-frontend-js-extra">
                    {`/* <![CDATA[ */
                    var GiveDonationSummaryData = {"currencyPrecisionLookup": {"USD": 2, "EUR": 2, "GBP": 2, "AUD": 2, "BRL": 2, "CAD": 2, "CZK": 2, "DKK": 2, "HKD": 2, "HUF": 2, "ILS": 2, "JPY": 0, "MYR": 2, "MXN": 2, "MAD": 2, "NZD": 2, "NOK": 2, "PHP": 2, "PLN": 2, "SGD": 2, "KRW": 0, "ZAR": 2, "SEK": 2, "CHF": 2, "TWD": 2, "THB": 2, "INR": 2, "TRY": 2, "IRR": 2, "RUB": 2, "AED": 2, "AMD": 2, "ANG": 2, "ARS": 2, "AWG": 2, "BAM": 2, "BDT": 2, "BHD": 3, "BMD": 2, "BND": 2, "BOB": 2, "BSD": 2, "BWP": 2, "BZD": 2, "CLP": 0, "CNY": 2, "COP": 2, "CRC": 2, "CUC": 2, "CUP": 2, "DOP": 2, "EGP": 2, "GIP": 2, "GTQ": 2, "HNL": 2, "HRK": 2, "IDR": 2, "ISK": 0, "JMD": 2, "JOD": 2, "KES": 2, "KWD": 2, "KYD": 2, "MKD": 2, "NPR": 2, "OMR": 3, "PEN": 2, "PKR": 2, "RON": 2, "SAR": 2, "SZL": 2, "TOP": 2, "TZS": 2, "UAH": 2, "UYU": 2, "VEF": 2, "XCD": 2, "AFN": 2, "ALL": 2, "AOA": 2, "AZN": 2, "BBD": 2, "BGN": 2, "BIF": 0, "XBT": 8, "BTN": 1, "BYR": 2, "BYN": 2, "CDF": 2, "CVE": 2, "DJF": 0, "DZD": 2, "ERN": 2, "ETB": 2, "FJD": 2, "FKP": 2, "GEL": 2, "GGP": 2, "GHS": 2, "GMD": 2, "GNF": 0, "GYD": 2, "HTG": 2, "IMP": 2, "IQD": 2, "IRT": 2, "JEP": 2, "KGS": 2, "KHR": 0, "KMF": 2, "KPW": 0, "KZT": 2, "LAK": 0, "LBP": 2, "LKR": 0, "LRD": 2, "LSL": 2, "LYD": 3, "MDL": 2, "MGA": 0, "MMK": 2, "MNT": 2, "MOP": 2, "MRO": 2, "MUR": 2, "MVR": 1, "MWK": 2, "MZN": 0, "NAD": 2, "NGN": 2, "NIO": 2, "PAB": 2, "PGK": 2, "PRB": 2, "PYG": 2, "QAR": 2, "RSD": 2, "RWF": 2, "SBD": 2, "SCR": 2, "SDG": 2, "SHP": 2, "SLL": 2, "SOS": 2, "SRD": 2, "SSP": 2, "STD": 2, "SYP": 2, "TJS": 2, "TMT": 2, "TND": 3, "TTD": 2, "UGX": 2, "UZS": 2, "VND": 1, "VUV": 0, "WST": 2, "XAF": 2, "XOF": 2, "XPF": 2, "YER": 2, "ZMW": 2 }, "recurringLabelLookup": [] };
                /* ]]> */`}
                </Script>
                <Script type="text/javascript" src="/assets/js/give-donation-summary.js"
                    id="give-donation-summary-script-frontend-js"></Script>
                <Script type="text/javascript" src="/assets/js/bootstrap.min.js" id="bootstrap-js"></Script>
                <Script type="text/javascript" src="/assets/js/imagesloaded.min.js" id="imagesloaded-js"></Script>
                <Script type="text/javascript" src="/assets/js/isotope.min.js" id="isotope-js"></Script>
                <Script type="text/javascript" src="/assets/js/fancybox.min.js" id="fancybox-js"></Script>
                <Script type="text/javascript" src="/assets/js/instafeed.min.js" id="instafeed-js"></Script>
                <Script type="text/javascript" src="/assets/js/progresscircle.js" id="circle-progress-js"></Script>
                <Script type="text/javascript" src="/assets/js/masonry.min.js" id="masonry-js"></Script>
                <Script type="text/javascript" src="/assets/js/circle.js" id="circle-js"></Script>
                <Script type="text/javascript" src="/assets/js/owl-carousel.js" id="owl-carousel-js"></Script>
                <Script type="text/javascript" src="/assets/js/jquery-easing.js" id="jquery-easing-js"></Script>
                <Script type="text/javascript" src="/assets/js/wow.min.js" id="wow-js"></Script>
                <Script type="text/javascript" src="/assets/js/odometer.min.js" id="odometer-js"></Script>
                <Script type="text/javascript" src="/assets/js/magnific-popup.js" id="magnific-popup-js"></Script>
                <Script type="text/javascript" src="/assets/js/slick-slider.js" id="slick-slider-js"></Script>
                <Script type="text/javascript" src="/assets/js/slick-animation.min.js" id="slick-animation-js"></Script>
                <Script type="text/javascript" src="/assets/js/moving-animation.js" id="moving-animation-js"></Script>
                <Script type="text/javascript" src="/assets/js/swiper.min.js" id="swiper-js"></Script>
                <Script type="text/javascript" src="/assets/js/wc-quantity-increment.js" id="wc-quantity-increment-js"></Script>
                <Script type="text/javascript" src="/assets/js/scripts.js" id="aidus-scripts-js"></Script>
                <Script type="text/javascript" src="/assets/js/jquery.validate.min.js" id="aidus-inline-validate-js"></Script>
                <Script type="text/javascript" src="/assets/js/sourcebuster.min.js" id="sourcebuster-js-js"></Script>
                <Script type="text/javascript" id="wc-order-attribution-js-extra">
                    {`/* <![CDATA[ */
                    var wc_order_attribution = {"params": {"lifetime": 1.0e-5, "session": 30, "base64": false, "ajaxurl": "https:\/\/aidus.wpolive.com\/wp-admin\/admin-ajax.php", "prefix": "wc_order_attribution_", "allowTracking": true }, "fields": {"source_type": "current.typ", "referrer": "current_add.rf", "utm_campaign": "current.cmp", "utm_source": "current.src", "utm_medium": "current.mdm", "utm_content": "current.cnt", "utm_id": "current.id", "utm_term": "current.trm", "utm_source_platform": "current.plt", "utm_creative_format": "current.fmt", "utm_marketing_tactic": "current.tct", "session_entry": "current_add.ep", "session_start_time": "current_add.fd", "session_pages": "session.pgs", "session_count": "udata.vst", "user_agent": "udata.uag" } };
                /* ]]> */`}
                </Script>
                <Script type="text/javascript" src="/assets/js/order-attribution.min.js" id="wc-order-attribution-js"></Script>
                <Script type="text/javascript" defer src="/assets/js/forms.js" id="mc4wp-forms-api-js"></Script>
                <Script type="text/javascript" src="/assets/js/webpack.runtime.min.js" id="elementor-webpack-runtime-js"></Script>
                <Script type="text/javascript" src="/assets/js/frontend-modules.min.js" id="elementor-frontend-modules-js"></Script>
                <Script type="text/javascript" src="/assets/js/core.min.js" id="jquery-ui-core-js"></Script>
                <Script type="text/javascript" id="elementor-frontend-js-before">
                    {`/* <![CDATA[ */
                    var elementorFrontendConfig = {"environmentMode": {"edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": {"shareOnFacebook": "Share on Facebook", "shareOnTwitter": "Share on Twitter", "pinIt": "Pin it", "download": "Download", "downloadImage": "Download image", "fullscreen": "Fullscreen", "zoom": "Zoom", "share": "Share", "playVideo": "Play Video", "previous": "Previous", "next": "Next", "close": "Close", "a11yCarouselPrevSlideMessage": "Previous slide", "a11yCarouselNextSlideMessage": "Next slide", "a11yCarouselFirstSlideMessage": "This is the first slide", "a11yCarouselLastSlideMessage": "This is the last slide", "a11yCarouselPaginationBulletMessage": "Go to slide" }, "is_rtl": false, "breakpoints": {"xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": {"breakpoints": {"mobile": {"label": "Mobile Portrait", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": {"label": "Mobile Landscape", "value": 880, "default_value": 880, "direction": "max", "is_enabled": false }, "tablet": {"label": "Tablet Portrait", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": {"label": "Tablet Landscape", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": false }, "laptop": {"label": "Laptop", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": false }, "widescreen": {"label": "Widescreen", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } }, "hasCustomBreakpoints": false }, "version": "3.27.5", "is_static": false, "experimentalFeatures": {"e_font_icon_svg": true, "additional_custom_breakpoints": true, "container": true, "e_swiper_latest": true, "e_onboarding": true, "home_screen": true, "nested-elements": true, "editor_v2": true, "e_element_cache": true, "link-in-bio": true, "floating-buttons": true }, "urls": {"assets": "https:\/\/aidus.wpolive.com\/wp-content\/plugins\/elementor\/assets\/", "ajaxurl": "https:\/\/aidus.wpolive.com\/wp-admin\/admin-ajax.php", "uploadUrl": "https:\/\/aidus.wpolive.com\/wp-content\/uploads" }, "nonces": {"floatingButtonsClickTracking": "95a68ebffe" }, "swiperClass": "swiper", "settings": {"page": [], "editorPreferences": [] }, "kit": {"active_breakpoints": ["viewport_mobile", "viewport_tablet"], "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": {"id": 14, "title": "AidUs%20%E2%80%93%20Fundraising%20%26%20Charity%20WordPress%20Theme", "excerpt": "", "featuredImage": false } };
                /* ]]> */`}
                </Script>
                <Script type="text/javascript" src="/assets/js/frontend.min.js" id="elementor-frontend-js"></Script>
                <Script type="text/javascript" src="/assets/js/aidus-elementor.js" id="aidus-elementor-js"></Script>



            </body>
        </html>
    );
}
