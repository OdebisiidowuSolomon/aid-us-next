import React from 'react'
import PublicBanner from '../../_components/PublicBanner'

function NotFoundPage() {
    return (
        <>
            <PublicBanner title='404 Error' />

            <section className="error-404-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="content clearfix">
                                <div className="error">
                                    <h2>404</h2>
                                </div>
                                <div className="error-message">
                                    <h3>Oops! Page Not Found!!</h3>
                                    <p>We are sorry but we can not seem to find the page you requested. This might be
                                        because you have typed the web address incorrectly.</p>
                                    <a href="https://aidus.wpolive.com/" className="theme-btn">
                                        BACK TO HOME </a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- end row --> */}
                </div> 
                {/* <!-- end container --> */}
            </section>

        </>
    )
}

export default NotFoundPage