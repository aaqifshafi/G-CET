import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaLink = () => {
  return (
    <>
      <a
        className="mx-3"
        href="https://www.facebook.com/p/Govt-College-of-Engineering-and-Technology-Kashmir-100063905081736/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className="mx-3" href="http://www.twitter.com/" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </>
  );
};

export default SocialMediaLink;
