import React from "react";
import styles from "../styles/Terms.module.scss";
import Link from "next/link";
import Image from "next/image";
import header__logo from "../public/static/home-page/header-logo.svg";
import phone__icon from "../public/static/home-page/phone.svg";

export default function Policy() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__inner}>
            <Link href="/">
              <a className={styles.header__logo}>
                <Image
                  src={header__logo}
                  height={54}
                  width={108}
                  priority
                  alt="home header logo"
                />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.button__planning}>înapoi</a>
            </Link>
            <Link href="tel:+37360044040">
              <a className={styles.header__phone_link}>
                <div className={styles.header__phone_icon}>
                  <Image
                    src={phone__icon}
                    height={19}
                    width={20}
                    alt="home header phone icon"
                  />
                </div>
                <span className={styles.header__phone_link_number}>
                  060 04 40 40
                </span>
              </a>
            </Link>
          </div>
        </div>
      </header>
      <section className={styles.terms__section}>
        <div className={styles.container}>
          <div className={styles.terms__inner}>
            <h2 className={styles.terms__title}>
              Privacy Policy for BINA-AGENCY S.R.L
            </h2>
            <p className={styles.terms__text}>
              At NEWTON HOUSE Grădina Botanică, accessible from
              botanica.newton.md, one of our main priorities is the privacy of
              our visitors. This Privacy Policy document contains types of
              information that is collected and recorded by NEWTON HOUSE Grădina
              Botanică and how we use it.
            </p>

            <p className={styles.terms__text}>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p className={styles.terms__text}>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in NEWTON HOUSE Grădina Botanică.
              This policy is not applicable to any information collected offline
              or via channels other than this website.
            </p>

            <h2 className={styles.terms__title}>Consent</h2>
            <p className={styles.terms__text}>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <h2 className={styles.terms__title}>Information we collect</h2>
            <p className={styles.terms__text}>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>

            <p className={styles.terms__text}>
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>

            <p className={styles.terms__text}>
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>

            <h2 className={styles.terms__title}>How we use your information</h2>
            <p className={styles.terms__text}>
              We use the information we collect in various ways, including to:
            </p>

            <ul>
              Provide, operate, and maintain our website Improve, personalize,
              and expand our website Understand and analyze how you use our
              website Develop new products, services, features, and
              functionality Communicate with you, either directly or through one
              of our partners, including for customer service, to provide you
              with updates and other information relating to the website, and
              for marketing and promotional purposes Send you emails Find and
              prevent fraud
            </ul>
            <h2 className={styles.terms__title}>Log Files</h2>
            <p className={styles.terms__text}>
              NEWTON HOUSE Grădina Botanică follows a standard procedure of
              using log files. These files log visitors when they visit
              websites. All hosting companies do this and a part of hosting
              services analytics. The information collected by log files include
              internet protocol (IP) addresses, browser type, Internet Service
              Provider (ISP), date and time stamp, referring/exit pages, and
              possibly the number of clicks. These are not linked to any
              information that is personally identifiable. The purpose of the
              information is for analyzing trends, administering the site,
              tracking users movement on the website, and gathering demographic
              information.
            </p>

            <h2 className={styles.terms__title}>Cookies and Web Beacons</h2>
            <p className={styles.terms__text}>
              Like any other website, NEWTON HOUSE Grădina Botanică uses
              {"'cookies'"}. These cookies are used to store information
              including visitors preferences, and the pages on the website that
              the visitor accessed or visited. The information is used to
              optimize the users experience by customizing our web page content
              based on visitors browser type and/or other information.
            </p>

            <h2 className={styles.terms__title}>
              Advertising Partners Privacy Policies
            </h2>
            <p className={styles.terms__text}>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of NEWTON HOUSE Grădina Botanică.
            </p>

            <p className={styles.terms__text}>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on NEWTON HOUSE
              Grădina Botanică, which are sent directly to users browser. They
              automatically receive your IP address when this occurs. These
              technologies are used to measure the effectiveness of their
              advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit.
            </p>

            <p className={styles.terms__text}>
              Note that NEWTON HOUSE Grădina Botanică has no access to or
              control over these cookies that are used by third-party
              advertisers.
            </p>

            <h2 className={styles.terms__title}>
              Third Party Privacy Policies
            </h2>
            <p className={styles.terms__text}>
              NEWTON HOUSE Grădina {"Botanică's"} Privacy Policy does not apply
              to other advertisers or websites. Thus, we are advising you to
              consult the respective Privacy Policies of these third-party ad
              servers for more detailed information. It may include their
              practices and instructions about how to opt-out of certain
              options.
            </p>

            <p className={styles.terms__text}>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers
              respective websites.
            </p>

            <h2 className={styles.terms__title}>
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h2>
            <p className={styles.terms__text}>
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>

            <p className={styles.terms__text}>
              Request that a business that collects a consumer{"'"}s personal
              data disclose the categories and specific pieces of personal data
              that a business has collected about consumers.
            </p>

            <p className={styles.terms__text}>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>

            <p className={styles.terms__text}>
              Request that a business that sells a consumer{"'"}s personal data,
              not sell the {"consumer's"} personal data.
            </p>

            <p className={styles.terms__text}>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2 className={styles.terms__title}>GDPR Data Protection Rights</h2>
            <p className={styles.terms__text}>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>

            <p className={styles.terms__text}>
              The right to access {"–"} You have the right to request copies of
              your personal data. We may charge you a small fee for this
              service.
            </p>

            <p className={styles.terms__text}>
              The right to rectification {"–"} You have the right to request
              that we correct any information you believe is inaccurate. You
              also have the right to request that we complete the information
              you believe is incomplete.
            </p>

            <p className={styles.terms__text}>
              The right to erasure {"–"} You have the right to request that we
              erase your personal data, under certain conditions.
            </p>

            <p className={styles.terms__text}>
              The right to restrict processing {"–"} You have the right to
              request that we restrict the processing of your personal data,
              under certain conditions.
            </p>

            <p className={styles.terms__text}>
              The right to object to processing {"–"} You have the right to
              object to our processing of your personal data, under certain
              conditions.
            </p>

            <p className={styles.terms__text}>
              The right to data portability {"–"} You have the right to request
              that we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>

            <p className={styles.terms__text}>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2 className={styles.terms__title}>{"Children's"} Information</h2>
            <p className={styles.terms__text}>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p className={styles.terms__text}>
              NEWTON HOUSE Grădina Botanică does not knowingly collect any
              Personal Identifiable Information from children under the age of
              13. If you think that your child provided this kind of information
              on our website, we strongly encourage you to contact us
              immediately and we will do our best efforts to promptly remove
              such information from our records.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
