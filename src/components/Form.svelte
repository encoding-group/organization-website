<script>
  let button;

  function submit() {
    alert("Submit form");
  }
</script>

<aside>
  <form name="contact" method="POST">
    <input type="hidden" name="form-name" value="contact" />
    <div class="fields">
      <p>
        <label><span>To:</span><input type="text" name="to" value="mail@encoding.group" disabled /></label>
      </p>
      <p>
        <label><span>From:</span><input type="text" name="from" placeholder="Your name or email" /></label>
      </p>
      <p class="message">
        <textarea name="message" placeholder="Your message" />
      </p>
    </div>

    <p class="buttons"><button type="submit">Send</button></p>
  </form>
</aside>

<style>
  form {
    padding: 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
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
    min-width: 2.6em;
  }
  label > input {
    flex: 1;
  }
  .message {
    margin: 0.5rem 0;
    flex: 1;
  }
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    overflow-y: auto;
  }
  .buttons {
    text-align: center;
  }
  @media only screen and (min-width: 500px) {
    form {
      font-size: 1rem;
    }
  }
  @media only screen and (orientation: portrait) {
    form {
      padding: 0.5rem;
    }
    .message {
      margin: 0.2rem 0;
    }
  }
</style>