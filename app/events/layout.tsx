'use client'

import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import PublicFooter from "../_components/PublicFooter";
import PublicHeader from "../_components/PublicHeader";


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
import "@/public/assets/css/widget-image.min.css"
import "@/public/assets/css/post-182.css"
import "@/public/assets/css/css.css"
import Script from "next/script";




export default function EventLayout({
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
		window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/aidus.wpolive.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.7.2" } };
		/*! This file is auto-generated */
		!function (i, n) { var o, s, e; function c(e) { try { var t = { supportTests: e, timestamp: (new Date).valueOf() }; sessionStorage.setItem(o, JSON.stringify(t)) } catch (e) { } } function p(e, t, n) { e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0); var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data), r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data)); return t.every(function (e, t) { return e === r[t] }) } function u(e, t, n) { switch (t) { case "flag": return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b") }return !1 } function f(e, t, n) { var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"), a = r.getContext("2d", { willReadFrequently: !0 }), o = (a.textBaseline = "top", a.font = "600 32px Arial", {}); return e.forEach(function (e) { o[e] = t(a, e, n) }), o } function t(e) { var t = i.createElement("script"); t.src = e, t.defer = !0, i.head.appendChild(t) } "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = { everything: !0, everythingExceptFlag: !0 }, e = new Promise(function (e) { i.addEventListener("DOMContentLoaded", e, { once: !0 }) }), new Promise(function (t) { var n = function () { try { var e = JSON.parse(sessionStorage.getItem(o)); if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests } catch (e) { } return null }(); if (!n) { if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try { var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));", r = new Blob([e], { type: "text/javascript" }), a = new Worker(URL.createObjectURL(r), { name: "wpTestEmojiSupports" }); return void (a.onmessage = function (e) { c(n = e.data), a.terminate(), t(n) }) } catch (e) { } c(n = f(s, u, p)) } t(n) }).then(function (e) { for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]); n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function () { n.DOMReady = !0 } }).then(function () { return e }).then(function () { var e; n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji))) })) }((window, document), window._wpemojiSettings);
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
                    var give_global_vars = {"ajaxurl": "https:\/\/aidus.wpolive.com\/wp-admin\/admin-ajax.php", "checkout_nonce": "cbc1559de0", "currency": "USD", "currency_sign": "$", "currency_pos": "before", "thousands_separator": ",", "decimal_separator": ".", "no_gateway": "Please select a payment method.", "bad_minimum": "The minimum custom donation amount for this form is", "bad_maximum": "The maximum custom donation amount for this form is", "general_loading": "Loading...", "purchase_loading": "Please Wait...", "textForOverlayScreen": "<h3>Processing...<\/h3><p>This will only take a second!<\/p>", "number_decimals": "2", "is_test_mode": "1", "give_version": "3.19.4", "magnific_options": {"main_class": "give-modal", "close_on_bg_click": false }, "form_translation": {"payment-mode": "Please select payment mode.", "give_first": "Please enter your first name.", "give_last": "Please enter your last name.", "give_email": "Please enter a valid email address.", "give_user_login": "Invalid email address or username.", "give_user_pass": "Enter a password.", "give_user_pass_confirm": "Enter the password confirmation.", "give_agree_to_terms": "You must agree to the terms and conditions." }, "confirm_email_sent_message": "Please check your email and click on the link to access your complete donation history.", "ajax_vars": {"ajaxurl": "https:\/\/aidus.wpolive.com\/wp-admin\/admin-ajax.php", "ajaxNonce": "3550ae0c0b", "loading": "Loading", "select_option": "Please select an option", "default_gateway": "manual", "permalinks": "1", "number_decimals": 2 }, "cookie_hash": "66d3b0b7d6b0a21da36660482bd1b0dd", "session_nonce_cookie_name": "wp-give_session_reset_nonce_66d3b0b7d6b0a21da36660482bd1b0dd", "session_cookie_name": "wp-give_session_66d3b0b7d6b0a21da36660482bd1b0dd", "delete_session_nonce_cookie": "0" };
                        var giveApiSettings = {"root": "https:\/\/aidus.wpolive.com\/wp-json\/give-api\/v2\/", "rest_base": "give-api\/v2" };
                    /* ]]> */`}
                </script>
            </Head>
            <body
                className={`page-template page-template-elementor_header_footer page page-id-182 theme-aidus woocommerce-no-js give-test-mode give-page elementor-default elementor-template-full-width elementor-kit-7 elementor-page elementor-page-182`}
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

            </body>
        </html>
    );
}
