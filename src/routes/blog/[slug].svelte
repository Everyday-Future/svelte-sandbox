<script context="module">
    import {getBlog} from "../../lib/api";

    export async function load({page}) {
        try {
            const post = await getBlog(page.params.slug);
            const title = post.title;
            return {
                props: {
                    post,
                },
            }
        } catch (e) {
            return {
                status: 404,
                error: 'Post not found'
            };
        }
    }
</script>

<script>
    export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  <h1>{post.title}</h1>
  {@html post.body_html}
</article>