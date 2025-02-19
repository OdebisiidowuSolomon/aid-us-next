import { redirect } from 'next/navigation'

function NotFoundPage() {
    redirect('/404')

}

export default NotFoundPage