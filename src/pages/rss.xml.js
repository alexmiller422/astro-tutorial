import rss, { pagesGlobToRssItems } from '@astrojs/rss';

const base = import.meta.env.BASE_URL

export async function GET(context) {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: `${context.site}/${base}`,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}