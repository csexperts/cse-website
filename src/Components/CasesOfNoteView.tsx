import { TeamPhotoPaths } from "./TeamMembers/TeamPhotoPaths";

export const ExpertEgelman = () => (
  <a href="#SergeEgelman" className="expert-label">
  <img src={TeamPhotoPaths.SergeEgelman} />
    Egelman
  </a>
);

export const ExpertSchechter = () => (
  <a href="#StuartSchechter" className="expert-label">
    <img src={TeamPhotoPaths.StuartSchechter} />
    Schechter
  </a>
);

export const ExpertHochman = () => (
  <a href="#JonathanHochman" className="expert-label">
    <img src={TeamPhotoPaths.JonathanHochman} />
    Hochman
  </a>
);

export const ExpertSchneier = () => (
  <a href="#BruceSchneier" className="expert-label">
    <img src={TeamPhotoPaths.BruceSchneier} />
    Schneier
  </a>
);

export const CasesOfNoteView = () => (<>
  <h1>Cases of Note</h1>
  <div className="subsection">
    <table className="law">
      <thead>
        <tr>
          <th className="law-name" colSpan={3}>California Invasion of Privacy Act (CIPA), Federal Wiretap Act</th>
        </tr>
      </thead>
      <tbody>
        <tr className="case">{
          /*
          State of New Mexico v. Facebook, Inc. D-101-CV-2021-00132 New Mexico Unfair Practices Act (NMSA 1978, §§ 57-12-1 to -26)
          */
        }
          <td className="case-name">
            <a target="_blank" href="https://nmdoj.gov/press-release/jury-finds-facebook-violated-new-mexico-consumer-protection-law-faces-billions-in-potential-civil-penalties/">
              <span className="plaintiff our-client">State of New Mexico</span>
              <span className="vs">v.</span>
              <span className="defendant adverse-party">Facebook, Inc.</span>
            </a>
            <a href="#footnote-outside-cases" className="footnote external-case">1</a>
          </td>
          <td className="outcome-column">
            <span className="outcome settled">Verdict</span>
          </td>
          <td className="case-experts">
            <ExpertEgelman />
          </td>
        </tr>
        <tr className="case">
          <td className="case-name">
            <a target="_blank" href="https://www.courtlistener.com/docket/17216783/brown-v-google-llc">
              <span className="plaintiff our-client">Brown</span>
              <span className="vs">v.</span>
              <span className="defendant adverse-party">Google LLC</span>
            </a>
            <a href="#footnote-outside-cases" className="footnote external-case">1</a>
          </td>
          <td className="outcome-column">
            <span className="outcome settled">Settled</span>
          </td>
          <td className="case-experts">
            <ExpertHochman />
            <ExpertSchneier />
          </td>
        </tr>
        <tr className="case">
          <td className="case-name">
            <a target="_blank" href="https://www.courtlistener.com/docket/55370837/frasco-v-flo-health-inc/?page=4">
              <span className="victor">✓</span>
              <span className="plaintiff our-client">Frasco</span>
              <span className="vs">v.</span>
              <span className="defendant adverse-party">Flo Health, Inc.</span>
            </a>
            <a href="#footnote-outside-cases" className="footnote external-case">1</a>
          </td>
          <td className="outcome-column">
            <span className="outcome verdict">Verdict</span>
          </td>
          <td className="case-experts">
            <ExpertEgelman />
          </td>
        </tr>
        <tr className="case">
          <td className="case-name">
            <a target="_blank" href="https://www.courtlistener.com/docket/17348463/rodriguez-v-google-llc/">
              <span className="victor">✓</span>
              <span className="plaintiff our-client">Rodriguez</span>
              <span className="vs">v.</span>
              <span className="defendant adverse-party">Google LLC</span>
            </a>
            <a href="#footnote-outside-cases" className="footnote external-case">1</a>
          </td>
          <td className="outcome-column">
            <span className="outcome verdict">Verdict</span>
          </td>
          <td className="case-experts">
            <ExpertHochman />
            <ExpertSchneier />
          </td>
        </tr>
        <tr className="case">
          <td className="case-name">
            <a target="_blank" href="https://www.courtlistener.com/docket/55370837/frasco-v-flo-health-inc/?page=4">
              <span className="victor">✓</span>
              <span className="plaintiff our-client">Lopez</span>
              <span className="vs">v.</span>
              <span className="defendant adverse-party">Apple, Inc.</span>
            </a>
            <a href="#footnote-outside-cases" className="footnote external-case">1</a>
          </td>
          <td className="outcome-column">
            <span className="outcome settled">Settled</span>
          </td>
          <td className="case-experts">
            <ExpertEgelman />
          </td>
        </tr>
      </tbody>
    </table>
    <table className="law">
      <thead>
        <tr>
          <th className="law-name" colSpan={3}>Pennsylvania Wiretapping and Electronic Surveillance Control Act (WESCA)</th>
        </tr>
      </thead>
      <tbody>
      <tr className="case">
        <td className="case-name">
          <a target="_blank" href="https://www.courtlistener.com/docket/66676587/young-v-salesforce-inc/">
            <span className="plaintiff our-client">Young, et al</span>
            <span className="vs">v.</span>
            <span className="defendant adverse-party">Salesforce, Inc.</span>
          </a>
          <a href="#footnote-outside-cases" className="footnote external-case">1</a>
        </td>
        <td className="outcome-column">
          <span className="outcome pending">Pending</span>
        </td>
        <td className="case-experts">
          <ExpertSchechter />
        </td>
      </tr>
      </tbody>
    </table>
    <table className="law">
      <thead>
        <tr>
          <th className="law-name" colSpan={3}>FTC Act</th>
        </tr>
      </thead>
      <tbody>
      <tr className="case">
        <td className="case-name">
          <a target="_blank" href="https://www.ftc.gov/system/files/documents/cases/160427amazonorder.pdf">
            <span className="victor">✓</span>
            <span className="plaintiff our-client">Federal Trade Commission</span>
            <span className="vs">v.</span>
            <span className="defendant adverse-party">Amazon.com, Inc.</span>
            <span className="case-number">(C14-1038-JCC)</span>
          </a>
          <a href="#footnote-outside-cases" className="footnote external-case">1</a>
        </td>
        <td className="outcome-column">
          <span className="outcome verdict">Verdict</span>
        </td>
        <td className="case-experts">
          <ExpertEgelman />
        </td>
      </tr>
      </tbody>
    </table>
    <table className="law">
      <thead>
        <tr>
          <th className="law-name" colSpan={4}>US Intellectual Property Law</th>
        </tr>
      </thead>
      <tbody>
      <tr className="case">
        <td className="law-type">Copyright</td>
        <td className="case-name">
          <a target="_blank" href="#">
            <span className="victor">✓</span>
            <span className="plaintiff adverse-party">Mon Cheri Bridals, LLC</span>
            <span className="vs">v.</span>
            <span className="defendant our-client">Cloudflare, Inc</span>
            <span className="case-number">(2:18-cv-09453-MWF-AS)</span>
          </a>
          <a href="#footnote-outside-cases" className="footnote external-case">1</a>
        </td>
        <td className="outcome-column">
        </td>
        <td className="case-experts">
          <ExpertSchneier />
        </td>
      </tr>
      <tr className="case">
        <td className="law-type">Patent</td>
        <td className="case-name">
          <a target="_blank" href="#">
            <span className="victor">✓</span>
            <span className="plaintiff our-client">Epicor Software Corp.</span>
            <span className="vs">v.</span>
            <span className="defendant adverse-party">Protegrity Corp.</span>
            <span className="case-number">(CBM2015-00002)</span>
          </a>
          <a href="#footnote-outside-cases" className="footnote external-case">1</a>
        </td>
        <td className="outcome-column">
        </td>
        <td className="case-experts">
          <ExpertSchneier />
        </td>
      </tr>
      <tr className="case">
        <td className="law-type">Patent</td>
        <td className="case-name">
          <a target="_blank" href="#">
            <span className="victor">✓</span>
            <span className="plaintiff our-client">Apple, Inc.</span>
            <span className="vs">v.</span>
            <span className="defendant adverse-party">Achates Reference Publishing, Inc.</span>
            <span className="case-number">(IPR 13-00080)</span>
          </a>
          <a href="#footnote-outside-cases" className="footnote external-case">1</a>
        </td>
        <td className="outcome-column">
        </td>
        <td className="case-experts">
          <ExpertSchneier />
        </td>
      </tr>
      </tbody>
    </table>
    <div className="note">Underlines represent the parties our clients have represented. Our cases of note include work our experts performed prior to, or outside of, CSE.
    </div>
  </div>
</>);
