import { format } from 'date-fns'

export const formatPublishedAt = (publishedAt: string | Date) => {
    const date = new Date(publishedAt)

    return format(date, "MMMM dd, yyyy.")
}