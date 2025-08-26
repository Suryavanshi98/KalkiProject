export default function ContactForm() {
  return (
    <section>
      <h2>Join the Revolution</h2>
      <form name="kalki-contact" method="POST">
        <input type="hidden" name="form-name" value="kalki-contact" />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="role">Role / Collaboration</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Your role or collaboration"
          required
        />

        <label htmlFor="vision">Your Vision</label>
        <textarea
          id="vision"
          name="vision"
          rows="4"
          placeholder="Describe your vision"
          required
        ></textarea>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <button type="submit">Join Now</button>
      </form>
    </section>
  );
}
