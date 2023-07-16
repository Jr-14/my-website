<script>
    import Heading from "./Heading.svelte";
</script>

<Heading />

<h1>Hello World</h1>

<p>Programmer</p>

<style>
    :global(body) {
        background-color: #1a1b26;
    }

    :global(p) {
        color: #73daca;
    }

    :global(h1) {
        color: #c0caf5;
    }
</style>
