import React from 'react'
import PublicBanner from '../../../_components/PublicBanner'
import ServiceDetailLeft from '../_components/ServiceDetailLeft'
import ServiceDetailRight from '../_components/ServiceDetailRight'

function ServiceDetailPage() {
    return (
        <>
            <PublicBanner title="Fund Raised & Donation" />

            <div className="service-single-section section-padding  right-sidebar">
                <div className="container">
                    <div className="row">
                        <ServiceDetailLeft />
                        <ServiceDetailRight />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDetailPage