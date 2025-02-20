import PublicBanner from '@/app/_components/PublicBanner'
import EventsLists from './_components/EventsLists'
import EventsReview from './_components/EventsReview'

import "@/public/assets/css/woocommerce-smallscreen.css"
import "@/public/assets/css/post-182.css"
// import "@/public/assets/"


function EventsPage() {
  return (
    <>
      <PublicBanner title='Events' />
      <EventsLists />
      <EventsReview />
    </>
  )
}

export default EventsPage