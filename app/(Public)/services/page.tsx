import PublicBanner from '../../_components/PublicBanner'
import ServicesCompassionInAction from './_components/ServicesCompassionInAction'
import ServicesList from './_components/ServicesList'

function ServicesPage() {
    return (
        <>
            <PublicBanner title='Services' />
            <div data-elementor-type="wp-page" data-elementor-id="190" className="elementor elementor-190">
                <ServicesList />
                <ServicesCompassionInAction />
                {/* <ServicesGallery /> */}
            </div>
        </>
    )
}

export default ServicesPage