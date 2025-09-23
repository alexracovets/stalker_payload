import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
    type: 'website',
    description: 'Волонтерство | Аврора',
    images: [
        {
            url: process.env.NEXT_PUBLIC_SERVER_URL
                ? `${process.env.NEXT_PUBLIC_SERVER_URL}/default-og.webp`
                : '/default-og.webp',
        },
    ],
    siteName: 'Волонтерство | Аврора',
    title: 'Волонтерство | Аврора',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
    return {
        ...defaultOpenGraph,
        ...og,
        images: og?.images ? og.images : defaultOpenGraph.images,
    }
}