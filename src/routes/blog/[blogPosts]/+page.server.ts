import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
    if (params.blogPosts === 'hello-world') {
        return {
            post: {
                title: 'Hello-World',
                content: 'Welcome to our blog. Lorem Ipsum dolor sit amet...'
            }
        };
    }
    if (params.blogPosts === 'well') {
        return {
            post: {
                title: 'Well Well',
                content: `
                    <h2>Have you ever felt un well?</h2>
                    <p>well I have :)</p>
                `
            }
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;