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
    setDisableSubmit(true);
    subscribe({
      EMAIL: emailAddress,
    });
  };

  const formContainerStyles = [
    styles.formContainer,
    "flex-h",
    "flex-v-xs",
  ].join(" ");

  const buttonStyles = disableSubmit
    ? [styles.formSubmitButton, styles.disabled].join(" ")
    : styles.formSubmitButton;

  const messageToShow =
    status === "success" ? "Thank you for subscribing! 🎉" : message;

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className={formContainerStyles}>
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
      {messageToShow && (
        <div className={styles.messageContainer}>
          <p
            className="minitext"
            dangerouslySetInnerHTML={{ __html: messageToShow }}
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
