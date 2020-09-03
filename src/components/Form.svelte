<script>

    let button;

    function submit(){
        alert('Submit form');
    }

</script>

<aside>
    <form name="contact" method="POST" data-netlify="true">

        <div class="fields">
            <p>
                <label><span>To:</span><input type="text" name="to" value="mail@encoding.group" disabled/></label>
            </p>
            <p>
                <label><span>From:</span><input type="text" name="from" placeholder="Your name or email" /></label>
            </p>
            <p class="message">
                <textarea name="message" placeholder="Your message"></textarea>
            </p>
        </div>

        <p class="buttons">
            <button type="submit" bind:this={button} on:click={submit}>Send</button>
        </p>

    </form>
</aside>

<style>

    form {
        height: 100vh;
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }
    .fields {
        text-align: left;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    label {
        display: flex;
        width: 100%;
    }
    label > span {
        display: inline-block;
        margin-right: 0.5rem;
        min-width: 3rem;
    }
    label > input {
        flex: 1;
    }
    textarea {
        width: 100%;
        height: 100%;
        resize: none;
        overflow-y: auto;
    }
    .message {
        margin: 0.5rem 0;
        flex: 1;
    }
    .buttons {
        text-align: center;
    }

</style>
