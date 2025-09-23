import type { Metadata } from 'next';

import { mergeOpenGraph } from './mergeOpenGraph'

interface GenerateMetaArgs {
    title: string;
    description: string;
    image: string | { url?: string | null | undefined } | number;
    slug: string | string[];
}

export const generateMeta = async ({ title, description, image, slug }: GenerateMetaArgs): Promise<Metadata> => {

    const ogImage =
        typeof image === 'object' &&
        image !== null &&
        'url' in image &&
        image.url &&
        `${process.env.NEXT_PUBLIC_SERVER_URL}${image.url}` ||
        (typeof image === 'string' && image) ||
        undefined

    const titleMeta = title || 'Аврора';

    return {
        description: description,
        icons: {
            icon: '/favicon.png',
            shortcut: '/favicon.png',
            apple: '/favicon.png',
        },
        openGraph: mergeOpenGraph({
            description: description,
            images: ogImage
                ? [
                    {
                        url: ogImage,
                    },
                ]
                : undefined,
            title: titleMeta,
            url: Array.isArray(slug) ? slug.join('/') : '/',
        }),
        title: titleMeta,
    }
}