import { Link } from "react-router-dom";

export const termsData = [
  {
    title: "Applicability",
    header: 
      "These Terms apply to all visits to and all use of this Website of Arkhos Oil & Gas, located at Plot 500 East West Road, Rumudara Port Harcourt, Rivers State, NG, as well as to all information, recommendations and/or services provided you on or through this Website (the Information).",
    listData: [],
    footerData:
      "By using this Website you agree to the applicability of these Terms. We note that these Terms may be changed over time. Such changes shall be effective immediately upon the posting of the modified Terms. Users of the Website are advised to regularly read the Terms for possible changes",
  },
  {
    title: "Disclaimer",
    header:
      "The Information is for general information purposes only and does not constitute advice. ARKHOS shall not be liable for any damages resulting from the use (or inability to make use) of this Website, including any incorrectness or incompleteness of the Information, unless such damage is the result of any wilful misconduct or gross negligence on the part of ARKHOS.",
    listData: [
      <>
        All information or advice provided as part of this web site is intended
        to be general in nature and you should not rely on it in connection with
        the making of any decision. Arkhos Oil & Gas Ltd tries to ensure that
        all information provided as part of this web site is correct at the time
        of inclusion on the web site but does not guarantee the accuracy of such
        information. Arkhos Oil & Gas Ltd is not liable for any action you may
        take as a result of relying on such information or advice or for any
        loss or damage suffered by you as a result of you taking this action.
        <br />
        <br />
      </>,
      <>
        Arkhos reserves the right to monitor any information transmitted or
        received through any Forum provided. Arkhos, at its sole discretion and
        without prior notice, may at any time review, remove or otherwise block
        any material posted.
        <br />
        <br />
      </>,
      <>
        Should any part of this site offer you the opportunity to join in or
        read from a forum, please be aware that any communications posted on the
        forum represent the views of the individual who posted such
        communication and are not to be taken as the views of Arkhos. Arkhos
        accepts no responsibility or liability for anything posted on the forum
        by any user of the forum and you must not use the forum to post, upload,
        or otherwise transmit information or pictures that are defamatory, a
        breach of privacy or otherwise unlawful.
        <br />
        <br />
      </>,
    ],
    footerData: "",
  },
  {
    title: "Intellectual property rights",
    header:
      "The Website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by Arkhos, its licensors or other providers of such material and are protected by copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.",
    listData: [],
    footerData:
      "You can use the Website only for purposes in line with these Terms. You are permitted to make copies of (parts of) the Website for personal use. You must not use any part of the content on our Website for other purposes without obtaining a written licence from us.",
  },
  {
    title: "Changes to Terms and Conditions",
    header:
      " Arkhos Oil & Gas Ltd may change the terms and conditions and disclaimer set out above from time to time. By browsing this web site you are accepting that you are bound by the current terms and conditions and disclaimer and so you should check these each time you revisit the site.",
    listData: [],
    footerData: "",
  },
  {
    title: "Changes to/Operation of Web Site",
    header: (
      <>
        Arkhos Oil & Gas Ltd may change the format and content of this web site
        at any time.
        <br />
        <br />
        Arkhos Oil & Gas Ltd may suspend the operation of this web site for
        support or maintenance work, in order to update the content or for any
        other reason.
        <br />
        <br />
        Arkhos Oil & Gas Ltd reserves the right to terminate access to this web
        site at any time and without notice.
      </>
    ),
    listData: [],
    footerData: "",
  },
  {
    title: "Data Protection",
    header: (
      <>
        Personal details provided to Arkhos Oil & Gas Ltd through this web site
        will only be used in accordance with our privacy policy. Please read
        this carefully before going on. By providing your personal details to us
        you are consenting to its use in accordance with our{" "}
        <Link to="/privacy-policy">privacy policy</Link>.
      </>
    ),
    listData: [],
    footerData: "",
  },
  {
    title: "Complaints Procedure",
    header: (
      <>
        If you have a question or complaint about this web site, please contact
        the <Link to="/report-bug">Arkhos webmaster.</Link>
      </>
    ),
    listData: [],
    footerData: "",
  },
  {
    title: "Miscellaneous",
    header:
      "Each of the paragraphs of these Terms operates separately. If any court or relevant authority decides that any of them are unlawful or unenforceable, the remaining paragraphs will remain in full force and effect.",
    listData: [],
    footerData: "",
    // "These Terms are governed by Dutch law. Any dispute or claim arising out of or in connection to the use of the Website will be settled by the courts of Amsterdam, the Netherlands.",
  },
];
