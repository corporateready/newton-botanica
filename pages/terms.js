import React from "react";
import Link from "next/link";
import styles from "../styles/Terms.module.scss";
import Image from "next/image";
import header__logo from "../public/static/home-page/header-logo.svg";
import phone__icon from "../public/static/home-page/phone.svg";

export default function Terms() {
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
            <Link href="tel:+3736082020">
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
                  060 80 20 20
                </span>
              </a>
            </Link>
          </div>
        </div>
      </header>
      <section className={styles.terms__section}>
        <div className={styles.container}>
          <div className={styles.terms__inner}>
            <h2 className={styles.terms__title}>Terms and Conditions</h2>
            <p className={styles.terms__text}>
              Welcome to NEWTON HOUSE Grădina Botanică!
            </p>

            <p className={styles.terms__text}>
              These terms and conditions outline the rules and regulations for
              the use of BINA-AGENCY S.R.L{"'"}s Website, located at
              botanica.newton.md.
            </p>

            <p className={styles.terms__text}>
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use NEWTON HOUSE Grădina Botanică
              if you do not agree to take all of the terms and conditions stated
              on this page.
            </p>

            <p className={styles.terms__text}>
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:{" "}
              {'"Client"'},{'"You"'} and {'"Your"'} refers to you, the person
              log on this website and compliant to the Company{"’"}s terms and
              conditions. {'"The Company"'},{'"Ourselves"'}, {'"We"'},{" "}
              {'"Our" and "Us"'}, refers to our Company. {'"Party"'},
              {'"Parties", or "Us",'} refers to both the Client and ourselves.
              All terms refer to the offer, acceptance and consideration of
              payment necessary to undertake the process of our assistance to
              the Client in the most appropriate manner for the express purpose
              of meeting the Client{"’"}s needs in respect of provision of the
              Company{"’"}s stated services, in accordance with and subject to,
              prevailing law of Netherlands. Any use of the above terminology or
              other words in the singular, plural, capitalization and/or he/she
              or they, are taken as interchangeable and therefore as referring
              to same.
            </p>

            <h2 className={styles.title}>Cookies</h2>
            <p className={styles.terms__text}>
              We employ the use of cookies. By accessing NEWTON HOUSE Grădina
              Botanică, you agreed to use cookies in agreement with the
              BINA-AGENCY S.R.L{"'"}s Privacy Policy.
            </p>

            <p className={styles.terms__text}>
              Most interactive websites use cookies to let us retrieve the user
              {"’"}s details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </p>

            <h2 className={styles.terms__title}>License</h2>
            <p className={styles.terms__text}>
              Unless otherwise stated, BINA-AGENCY S.R.L and/or its licensors
              own the intellectual property rights for all material on NEWTON
              HOUSE Grădina Botanică. All intellectual property rights are
              reserved. You may access this from NEWTON HOUSE Grădina Botanică
              for your own personal use subjected to restrictions set in these
              terms and conditions.
            </p>

            <p className={styles.terms__text}>You must not:</p>

            <ul>
              Republish material from NEWTON HOUSE Grădina Botanică Sell, rent
              or sub-license material from NEWTON HOUSE Grădina Botanică
              Reproduce, duplicate or copy material from NEWTON HOUSE Grădina
              Botanică Redistribute content from NEWTON HOUSE Grădina Botanică
            </ul>
            <p className={styles.terms__text}>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              BINA-AGENCY S.R.L does not filter, edit, publish or review
              Comments prior to their presence on the website. Comments do not
              reflect the views and opinions of BINA-AGENCY S.R.L,its agents
              and/or affiliates. Comments reflect the views and opinions of the
              person who post their views and opinions. To the extent permitted
              by applicable laws, BINA-AGENCY S.R.L shall not be liable for the
              Comments or for any liability, damages or expenses caused and/or
              suffered as a result of any use of and/or posting of and/or
              appearance of the Comments on this website.
            </p>

            <p className={styles.terms__text}>
              BINA-AGENCY S.R.L reserves the right to monitor all Comments and
              to remove any Comments which can be considered inappropriate,
              offensive or causes breach of these Terms and Conditions.
            </p>

            <p className={styles.terms__text}>
              You warrant and represent that:
            </p>

            <ul>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so; The Comments do not
              invade any intellectual property right, including without
              limitation copyright, patent or trademark of any third party; The
              Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy The Comments will not be used to solicit or promote
              business or custom or present commercial activities or unlawful
              activity.
            </ul>
            <p className={styles.terms__text}>
              You hereby grant BINA-AGENCY S.R.L a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
            </p>

            <h2 className={styles.terms__title}>Hyperlinking to our Content</h2>
            <p className={styles.terms__text}>
              The following organizations may link to our Website without prior
              written approval:
            </p>

            <ul>
              Government agencies; Search engines; News organizations; Online
              directory distributors may link to our Website in the same manner
              as they hyperlink to the Websites of other listed businesses; and
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </ul>
            <p className={styles.terms__text}>
              These organizations may link to our home page, to publications or
              to other Website information so long as the link: (a) is not in
              any way deceptive; (b) does not falsely imply sponsorship,
              endorsement or approval of the linking party and its products
              and/or services; and (c) fits within the context of the linking
              party{"’"}s site.
            </p>

            <p className={styles.terms__text}>
              We may consider and approve other link requests from the following
              types of organizations:
            </p>

            <ul>
              commonly-known consumer and/or business information sources;
              dot.com community sites; associations or other groups representing
              charities; online directory distributors; internet portals;
              accounting, law and consulting firms; and educational institutions
              and trade associations.
            </ul>
            <p>
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavorably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              BINA-AGENCY S.R.L; and (d) the link is in the context of general
              resource information.
            </p>

            <p className={styles.terms__text}>
              These organizations may link to our home page so long as the link:
              (a) is not in any way deceptive; (b) does not falsely imply
              sponsorship, endorsement or approval of the linking party and its
              products or services; and (c) fits within the context of the
              linking party{"’"}s site.
            </p>

            <p className={styles.terms__text}>
              If you are one of the organizations listed in paragraph 2 above
              and are interested in linking to our website, you must inform us
              by sending an e-mail to BINA-AGENCY S.R.L. Please include your
              name, your organization name, contact information as well as the
              URL of your site, a list of any URLs from which you intend to link
              to our Website, and a list of the URLs on our site to which you
              would like to link. Wait 2-3 weeks for a response.
            </p>

            <p className={styles.terms__text}>
              Approved organizations may hyperlink to our Website as follows:
            </p>

            <ul>
              By use of our corporate name; or By use of the uniform resource
              locator being linked to; or By use of any other description of our
              Website being linked to that makes sense within the context and
              format of content on the linking party{"’"}s site.
            </ul>
            <p className={styles.terms__text}>
              No use of BINA-AGENCY S.R.L{"'"}s logo or other artwork will be
              allowed for linking absent a trademark license agreement.
            </p>

            <h2 className={styles.terms__title}>iFrames</h2>
            <p className={styles.terms__text}>
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter in any way the visual
              presentation or appearance of our Website.
            </p>

            <h2 className={styles.title}>Content Liability</h2>
            <p className={styles.terms__text}>
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>

            <h2 className={styles.terms__title}>Your Privacy</h2>
            <p className={styles.terms__text}>Please read Privacy Policy</p>

            <h2 className={styles.terms__title}>Reservation of Rights</h2>
            <p className={styles.terms__text}>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amen these terms and conditions and it{"’"}s linking policy at
              any time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>

            <h2 className={styles.terms__title}>
              Removal of links from our website
            </h2>
            <p className={styles.terms__text}>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly.
            </p>

            <p>
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>

            <h2 className={styles.terms__title}>Disclaimer</h2>
            <p className={styles.terms__text}>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties and conditions relating to our website
              and the use of this website. Nothing in this disclaimer will:
            </p>

            <ul>
              limit or exclude our or your liability for death or personal
              injury; limit or exclude our or your liability for fraud or
              fraudulent misrepresentation; limit any of our or your liabilities
              in any way that is not permitted under applicable law; or exclude
              any of our or your liabilities that may not be excluded under
              applicable law.
            </ul>
            <p className={styles.terms__text}>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty.
            </p>

            <p className={styles.terms__text}>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
