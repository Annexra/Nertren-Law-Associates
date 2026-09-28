"use client";
import { useEffect, useState } from "react";

// Bar Council of India compliance: visitor must accept before viewing the site.
export default function DisclaimerGate() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("nla-agree") === "1") setOpen(false);
    } catch (e) {}
    // Lets the hero drawing start only once the disclaimer is accepted.
    document.documentElement.dataset.gate =
      (() => { try { return sessionStorage.getItem("nla-agree") === "1" ? "closed" : "open"; } catch (e) { return "open"; } })();
  }, []);

  if (!open) return null;

  const agree = () => {
    setOpen(false);
    document.documentElement.dataset.gate = "closed";
    try { sessionStorage.setItem("nla-agree", "1"); } catch (e) {}
  };

  return (
    <div id="gate" role="dialog" aria-modal="true" aria-labelledby="gt">
      <div className="dlg">
        <h2 id="gt">Disclaimer</h2>
        <p>
          Under the rules of the Bar Council of India, advocates are prohibited from soliciting work or
          advertising, directly or indirectly. This website provides general information about Nertren Law
          Associates at the request of the visitor. It is not legal advice, solicitation, advertisement,
          invitation or inducement.
        </p>
        <p>
          By continuing, you confirm that you are seeking this information voluntarily, and that there has
          been no advertisement, personal communication, solicitation or inducement by the firm or its members.
        </p>
        <button className="btn" onClick={agree} autoFocus>I agree</button>
      </div>
    </div>
  );
}
