import PublicBanner from '@/app/_components/PublicBanner'
import EventsLists from './_components/EventsLists'
import EventsReview from './_components/EventsReview'

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