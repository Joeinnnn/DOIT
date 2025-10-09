// Configuration: paste your Pump.fun coin URL below
// Example: "https://pump.fun/coin/EXAMPLE_ADDRESS"
const PUMPFUN_URL = "";

// X community link
const X_COMMUNITY_URL = "https://x.com/i/communities/1976288672443138094";

document.addEventListener("DOMContentLoaded", () => {
  const pumpBtn = document.getElementById("pumpfunBtn");
  const xBtn = document.getElementById("xBtn");

  if (xBtn) {
    xBtn.href = X_COMMUNITY_URL;
  }

  if (pumpBtn) {
    const urlLooksValid = typeof PUMPFUN_URL === "string" && /^https?:\/\//i.test(PUMPFUN_URL);
    if (urlLooksValid) {
      pumpBtn.href = PUMPFUN_URL;
    } else {
      pumpBtn.classList.add("btn-disabled");
      pumpBtn.setAttribute("aria-disabled", "true");
      pumpBtn.href = "#";
      pumpBtn.title = "Set your Pump.fun URL in app.js";
      pumpBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        alert("Paste your Pump.fun URL at the top of app.js and refresh.");
      });
    }
  }
});


