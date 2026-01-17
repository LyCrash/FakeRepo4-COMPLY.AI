// Cookie banner (INTENTIONALLY NON-COMPLIANT)

export function initCookies() {
  // Analytics loaded immediately
  gtag("js", new Date());
  gtag("config", "GA-TRACKING-ID");

  // Consent stored without choice
  localStorage.setItem("cookiesAccepted", true);
}
