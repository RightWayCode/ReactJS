const Contact = () => {
    return (
      <div className="page">
        <h1>Contact Us</h1>
        <p>Get in touch with our team.</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    )
  }
  
  export default Contact