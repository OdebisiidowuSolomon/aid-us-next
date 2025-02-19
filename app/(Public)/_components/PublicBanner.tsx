import React from 'react'

function PublicBanner({ title, breadCrumbs }: { title: string, breadCrumbs?: { title: string, href?: string }[] }) {

    const mappable = breadCrumbs && breadCrumbs?.length > 1 ? breadCrumbs?.slice(0, -1) : []

    return (
        <section className="wpo-page-title page-title-67b0c5ef5dfdd default-title"
            style={{ backgroundImage: "url('/assets/images/page-title.jpg')" }}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{title}</h2>
                            <nav role="navigation" aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="breadcrumb wpo-breadcumb-wrap trail-items">
                                    <li className="trail-item trail-begin"><a href=""
                                        rel="home"><span>Home</span></a></li>
                                    {mappable?.map(item => (
                                        <li className="trail-item trail-begin" key={item.title}><a href={item.href}
                                            rel="home"><span>{item.title}</span></a></li>
                                    ))}
                                    <li className="trail-item trail-end"><span>{title}</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </section>
    )
}

export default PublicBanner