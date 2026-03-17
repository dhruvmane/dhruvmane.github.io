<script>
    // Import Tech Stack Icons:
    import svelteIcon from '$lib/assets/tech_stack/svelte.svg';
    import viteIcon from '$lib/assets/tech_stack/vite.svg';
    import expressjsIcon from '$lib/assets/tech_stack/expressjs.svg';
    import pythonIcon from '$lib/assets/tech_stack/python.svg';
    import tauriIcon from '$lib/assets/tech_stack/tauri.svg';
    import reactIcon from '$lib/assets/tech_stack/react.svg';
    import electronIcon from '$lib/assets/tech_stack/electron.svg';
    import javascriptIcon from '$lib/assets/tech_stack/javascript.svg';
    import rustIcon from '$lib/assets/tech_stack/rust.svg';

    let { title, description, card, tech_stack } = $props()

</script>

<style>
    
    @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@0,100..900;1,100..900&display=swap');

    h1 {
        margin: 0;
        margin-left: 20px;
        text-align: left;
        color: rgb(255, 251, 217);

        font-family: 'Notable';
        font-size: 55px;
        z-index: 1;        
    }

    .talent-card {
        height: 125px;
        width: 400px;
        z-index: -1;
        border-radius: 3px;
    }

    p {
        margin: 0;
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
        color: rgb(255, 251, 217);

        font-family: 'Chivo Mono';
        z-index: 1;        
    }

    .talentCards {
        filter: hue-rotate(1deg);
        display: inline-block;
        margin: 0;
        padding: 0;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
        padding-bottom: 30px;
        text-align: center;
        background: linear-gradient(180deg,rgb(255, 245, 225) 0%, rgb(242, 255, 182) 100%);
        background: rgb(31, 31, 31);

        width: 400px;

        border-style: solid;
        border-color: rgb(255, 246, 222);
        border-radius: 5px;

        transition: 0.3s ease-in-out;
        z-index: 100;        
    }

    .tech-stack-field {
        text-align: left;
        margin: 0;
        padding: 0;
        margin-top: 50px;
        margin-left: 15px;
        margin-right: 15px;
    }

    .tech-stack {
        display: inline-block;
        background-color: rgb(27, 27, 27);

        margin: 0;
        margin-top: 10px;
        padding: 0;
        padding-bottom: 5px;
        padding-left: 2px;
        padding-right: 10px;

        height: 30px;
        border: 2px;
        border-style: solid;
        border-radius: 10px;
        transition: 0.2s ease-in-out;
    }

    .tech-stack:hover {
        background-color: antiquewhite;
        color: black;
        transition: 0.2s ease-in-out;
    }
    
    .tech-stack-icon {
        margin: 0;
        padding: 0;
        margin-top: -8px;
        margin-left: -1px;
        margin-right: -2px;
        height: 30px;
        width: 30px;
        transform: translate(0, 10px) scale(0.6);
    }

    .talentCards:hover {
        transition: 0.3s ease-in-out   
    }

</style>
<main>
    <div class="talentCards">
        <img class="talent-card" src={card} alt="talent-card">
        <h1>{title}</h1>
        <p>{description}</p>
        <div class="tech-stack-field">
            {#each tech_stack as stack}
                {#if stack == 'svelteIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={svelteIcon} alt="svelteIcon" />
                        <span>SvelteKit</span>
                    </div>
                {/if}
                {#if stack == 'viteIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={viteIcon} alt="viteIcon">
                        <span>Vite</span>
                    </div>
                {/if}
                {#if stack == 'expressjsIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={expressjsIcon} alt="expressjsIcon">
                        <span>ExpressJS</span>
                    </div>
                {/if}
                {#if stack == 'pythonIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={pythonIcon} alt="pythonIcon">
                        <span>Python</span>
                    </div>
                {/if}
                {#if stack == 'reactIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={reactIcon} alt="reactIcon">
                        <span>React</span>
                    </div>
                {/if}
                {#if stack == 'tauriIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={tauriIcon} alt="tauriIcon">
                        <span>Tauri</span>
                    </div>
                {/if}
                {#if stack == 'electronIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={electronIcon} alt="electronIcon">
                        <span>Electron</span>
                    </div>
                {/if}
                {#if stack == 'javascriptIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={javascriptIcon} alt="javascriptIcon">
                        <span>JS</span>
                    </div>
                {/if}
                {#if stack == 'rustIcon'}
                    <div class="tech-stack">
                        <img class="tech-stack-icon" src={rustIcon} alt="rustIcon">
                        <span>Rust</span>
                    </div>
                {/if}

            {/each}
        </div>
    </div>
</main>