import Image from 'next/image'
import React from 'react'

function ServiceDetailRight() {
    return (
        <div className="col-lg-4  col-lg-4 col-md-8 ">
            <div className="service-sidebar blog-sidebar">
                <div id="search-3" className=" widget widget_search">
                    <div className="search-widget">
                        <form method="get" action="#" className="searchform">
                            <div>
                                <input type="text" name="s" id="search-form-1" placeholder="Search..." />
                                <button type="submit"><i className="ti-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- end widget --> */}
                <div id="-navigation-widget-4" className=" widget link-widget">
                    <h3 className="widget-title">Services</h3>
                    <div className=" nav-notenabled-child">
                        <div className="menu-service-menu-container">
                            <ul id="menu-service-menu" className="menu -sidenav">
                                <li id="menu-item-2565"
                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2565">
                                    <a href="#">Medical
                                        Treatment Help</a></li>
                                <li id="menu-item-2562"
                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2562">
                                    <a href="#">Corporate
                                        Gifts donate</a></li>
                                <li id="menu-item-2563"
                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2563">
                                    <a href="#">Child
                                        medical research</a></li>
                                <li id="menu-item-2564"
                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2564">
                                    <a href="#">development
                                        programs</a></li>
                                <li id="menu-item-2561"
                                    className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2561">
                                    <a href="#">They get
                                        new home</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end widget --> */}
                <div id="media_gallery-2" className=" widget widget_media_gallery">
                    <h3 className="widget-title">Gallery</h3>
                    <div id="gallery-1"
                        className="gallery galleryid-1225 gallery-columns-3 gallery-size-thumbnail">
                        <figure className="gallery-item">
                            <div className="gallery-icon landscape">
                                <Image width="150" height="89" src="/assets/images/list-post-2.jpg"
                                    className="attachment-thumbnail size-thumbnail" alt="list-post-2"
                                    decoding="async" />
                            </div>
                        </figure>
                        <figure className="gallery-item">
                            <div className="gallery-icon landscape">
                                <Image width="150" height="89" src="/assets/images/list-post-1.jpg"
                                    className="attachment-thumbnail size-thumbnail" alt="list-post-1"
                                    decoding="async" />
                            </div>
                        </figure>
                        <figure className="gallery-item">
                            <div className="gallery-icon landscape">
                                <Image width="150" height="89" src="/assets/images/list-post-3.jpg"
                                    className="attachment-thumbnail size-thumbnail" alt="list-post-3"
                                    decoding="async" />
                            </div>
                        </figure>
                        <figure className="gallery-item">
                            <div className="gallery-icon landscape">
                                <Image width="150" height="89" src="/assets/images/list-post-5.jpg"
                                    className="attachment-thumbnail size-thumbnail" alt="list-post-5"
                                    decoding="async" />
                            </div>
                        </figure>
                        <figure className="gallery-item">
                            <div className="gallery-icon landscape">
                                <Image width="150" height="89" src="/assets/images/list-post-4.jpg"
                                    className="attachment-thumbnail size-thumbnail" alt="list-post-4"
                                    decoding="async" />
                            </div>
                        </figure>
                        <figure className="gallery-item">
                            <div className="gallery-icon landscape">
                                <Image width="150" height="89" src="/assets/images/list-post-6.jpg"
                                    className="attachment-thumbnail size-thumbnail" alt="list-post-6"
                                    decoding="async" />
                            </div>
                        </figure>
                    </div>
                </div>
                {/* <!-- end widget --> */}
            </div>
        </div>
    )
}

export default ServiceDetailRight