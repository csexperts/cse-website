import { Metadata } from "next";
import Image from "next/image";
import { CasesOfNoteView } from "../Components/CasesOfNoteView";
import { OurTeamView } from "@/Components/OurTeamView";

export const metadata: Metadata = {
  title: "Computer Science Experts LLC - Team",
};

export default function Home() {
  return (<>
    <header>
      <div className="title">Computer Science Experts, LLC</div>
      <div className="summary">
        <span>Investigations and expert testimony&nbsp;</span>
        <span>performed&nbsp;</span>
        <span>with obsessive diligence</span>
      </div>
      <div className="contact">
        <a href="mailto:team@cse.llc?subject=New%20Case">team@cse.llc</a>
      </div>
    </header>
    <main>
      <section>
        <div className="full-pitch">
          <div>We are scientists trusted in consequential</div>
          <div>legal investigations and testimony,</div>
          <div>collaborating as a team to deliver exceptional results.</div>
        </div>
        <CasesOfNoteView/>
      </section>
      <OurTeamView/>
      <h1>Contact Us</h1>
      <section className="contact-us">
        <p>
          You can reach our four founding members directly by emailing <a href="mailto:team@cse.llc" target="_blank">team@cse.llc</a>.<br/>
          <i>Your message will not be held up by an admin, inspected by an AI, or otherwise treated inhumanely. Please do not send confidential information until we have
		  run a conflicts check and have a written engagement agreement.</i>
        </p>
      </section>
    </main>
    <footer>
      <div>Copyright 2026 Computer Science Experts, LLC</div>
      <div>Cambridge &mdash; Berkeley &mdash; New London &mdash; Toronto</div>
      <div><a href="tel:+18605587150">860-558-7150</a></div>
      <div>Registered in MA.</div>
	</footer>
  </>);
}
