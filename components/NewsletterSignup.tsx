import React, { useRef, useState } from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import styles from "./NewsletterSignup.module.css";

function NewsletterSignup({ status, message, subscribe }) {
  const formRef = useRef();
  const [emailAddress, setEmailAddress] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleChange = (e) => {
    setEmailAddress(e.target.value);
    setDisableSubmit(!e.target.validity.valid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe({
      EMAIL: emailAddress,
    });
  };

  const buttonStyles = disableSubmit
    ? [styles.formSubmitButton, styles.disabled].join(" ")
    : styles.formSubmitButton;

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formContainer}>
          <div id="mergeTable" className={styles.mergeTable}>
            <div id="mergeRow-0">
              <div className="field-group">
                <input
                  className={styles.emailInput}
                  type="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  placeholder="your email"
                  required={true}
                  name="MERGE0"
                  id="MERGE0"
                  value={emailAddress}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className={buttonStyles}
            name="submit"
            value="Subscribe"
          />
        </div>
      </form>
      {message && (
        <div className={styles.messageContainer}>
          <p
            className="minitext"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        </div>
      )}
    </div>
  );
}

const Wrapper = () => {
  return (
    <MailchimpSubscribe
      url="https://lynneyun.us19.list-manage.com/subscribe/post?u=84afb324647bc48ef01fbdbbb&amp;id=ec23de734c"
      render={({ subscribe, status, message }) => (
        <NewsletterSignup
          status={status}
          message={message}
          subscribe={subscribe}
        />
      )}
    />
  );
};

export default Wrapper;
