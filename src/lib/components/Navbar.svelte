<style>

    :global(:root) {
        --font-weight: 100;
    }

    .container {
        text-align: center;
        margin: 0;
        margin-top: 40px;
        margin-bottom: -40px;
        padding: 0;
        div {
            display: inline-block;
        }
    }

    
    button {
        color: inherit;
        background: linear-gradient(180deg,rgba(20, 20, 20, 1) 0%, rgba(26, 23, 23, 1) 100%);
        font-family: 'Google Sans Code';
        font-weight: var(--font-weight);
        border-radius: var(--ui-curvature);

        min-height: 40px;
        min-width: 100px;
        transition: 0.1s ease-in-out;
    }

    button:hover {
        transition: 0.1s ease-in-out;
        filter: invert(100%);
    }

</style>

<script lang=ts>
    import { goto } from "$app/navigation";

    function Navigate(href: String): undefined {
        goto(`${href}`)
    }

</script>

<div class="container">
    
    <!--About Me-->
    <div>
        <button onclick={Navigate("/about-me")}>ABOUT ME</button>
    </div>
    
    <!--Projects-->
    <div>
        <button onclick={Navigate("/projects")}>PROJECTS</button>
    </div>
    
    <!--Contact Me-->
    <div>
        <button onclick={Navigate("/contact-me")}>CONTACT ME</button>
    </div>
    

</div>