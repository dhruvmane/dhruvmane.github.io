<style>
    @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap');

    * {
        text-align: center;
    }

    .title {
        font-size: 30px;
        margin: 0;
        margin-top: 10vh;
    }

    .talentCardsField {
        margin: 0;
        margin-left: 10%;
        margin-right: 10%;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .copyright {
        margin: 0;
        margin-top: 40px;
        padding: 0;
    }

    .search-bar-field {
        margin: 0;
        margin-bottom: 30px;
        padding: 0;
    }

    .search-bar {
        margin: 0;
        padding: 0;
        padding-left: 10px;
        height: 50px;
        width: 500px;
        text-align: left;
        font-size:25px;


        color: rgb(243, 247, 209);
        border-color: rgb(250, 248, 215);
        border-style: solid;
        background-color: rgb(250, 248, 215);
        background: none;
        border-radius: 10px;
    }

    input::placeholder {
        color: rgb(97, 96, 80);
    }

    .contacts-field {
        margin: 0;
        padding: 0;
        margin-top: 25px;
    }

    .contacts {
        margin: 2px;
        padding-top: 1px;
        transform: scale(1.4);
        background: none;
        border: 0;
    }

    @keyframes blinking {
        0% {opacity: 100%;}
        50% {opacity: 0%;}
        100% {opacity: 100%;}
    }
    .caret {
        opacity: 100%;
        animation: blinking 0.7s ease-in-out 3s infinite;
    }
    
    
    .notice {
        margin: 0;
        margin-top: 10vh;
        margin-left: 20px;
        text-align: left;
        color: rgb(255, 251, 217);
        
        font-family: 'Notable';
        font-size: 55px;
        z-index: 1;        
    }
    
    .subtitle {
        margin: 0;
        margin-bottom: 30vh;
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
        color: rgb(255, 251, 217);

        font-family: 'Chivo Mono';
        z-index: 1;        
    }

</style>
<script lang=ts>
    import '../app.css'
    import githubIcon from '$lib/assets/icons/github.svg';
    import Talents from '$lib/components/Talents.svelte'
    import talentOne from '$lib/assets/talents/1.png'
    import talentTwo from '$lib/assets/talents/2.png'
    

    let showTalents = true;
    let talents: any = $state([])
    
    if (showTalents){
        talents = [
            {title: "SESIM", description: "a Stock Exchange Simulator.", card: talentOne, tech_stack: ["svelteIcon", "viteIcon", "expressjsIcon"]},
            {title: "GRAPIFY", description: "Keep your Expenses in Check with GRAPIFY.", card: talentTwo, tech_stack: ["svelteIcon", "viteIcon", "tauriIcon", "rustIcon"]},
        ]
    }
    
    


    function clickGithubIcon() {
        window.location.href = "https://github.com/dhruvmane"
    }


    // Typewriter Animation
    let animated_title = $state(" ")

    function animate_typewriter(text: string, timeVar: number) {
        let index = 0;
        const animation = setInterval(() => {
            if ( index == text.length ) {
                clearInterval(animation);
            }

            if ( index < text.length) {
                animated_title += text[index]
                index++;
            }
        }, timeVar)
    }
    
    // Animate Title:
    animate_typewriter('dhruv mane\'s portfolio.', 100)
    
</script>
<main>
    <title>dhruv | Portfolio</title>
    <!--Introduction-->
    <div class="title">
        <p>{animated_title}<span class="caret">|</span></p>
    </div>
    <!--Search Bar (cuz im sigma)-->
    <div class="search-bar-field">
        <input class="search-bar" type="text" placeholder="🔍">
    </div>
    <!--Talents-->
    <div class="talentCardsField">
        {#if talents.length == 0}
            <div>
                <h1 class="notice">No Projects Found !</h1>
                <p class="subtitle">No Projects have been uploaded yet. Sorry!</p>
            </div>
        {/if}
        {#each talents as talent}
            <Talents title={talent.title} description={talent.description} card={talent.card} tech_stack={talent.tech_stack} />
        {/each}
    </div>

    <!--Copyright Text-->
    <p class="copyright">Copyright © 2026 dhruv. All rights reserved.</p>

    <!--Social Media / Contacts-->
    <div class="contacts-field">
        <button class="contacts" onclick={clickGithubIcon}><img class="contacts" alt="button" src={githubIcon}></button>
    </div>
</main>