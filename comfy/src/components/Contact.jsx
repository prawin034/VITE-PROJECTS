import React from 'react';

const Contact = () => {
  return (
    <section className="contacts">
      <div className="contacts_content">
        <h1 className="contacts_content_title">
          Join our newsletter and get 20% off
        </h1>
        <p className="contacts_content_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore
        </p>
      </div>

      <form
        action="https://formspree.io/f/xqkoypkk"
        method="POST"
        className="contacts_form"
      >
        <input
          required
          type="email"
          name="_replyto"
          className="contacts_form_input"
        />
        <button className="contacts_form_button" type="submit">
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default Contact;
