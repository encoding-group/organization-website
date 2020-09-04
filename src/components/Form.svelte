<script>
  let button;

  function submit() {
    alert("Submit form");
  }
</script>

<style>
  form {
    padding: 1rem;
    height: 100vh;
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
