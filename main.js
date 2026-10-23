// ===== CONFIG =====
const CONTRACT_ADDRESS = "0xCommingSoon";
const X_LINK = "https://x.com/GrokletOnE";
const TG_LINK = "https://t.me/grokletofficialcommunity";
const SOCIAL_LINK = "https://x.com/grok/status/2110471512679395342";
const UNISWAP_BASE = "https://app.uniswap.org/swap?chain=mainnet";

document.querySelectorAll("a.xbtn").forEach((a) => (a.href = X_LINK));
document.querySelectorAll("a.tgbtn").forEach((a) => (a.href = TG_LINK));
document.querySelectorAll("a.social").forEach((a) => (a.href = SOCIAL_LINK));

const hasCA = /^0x[a-fA-F0-9]{40}$/.test(CONTRACT_ADDRESS);
const caEl = document.getElementById("ca");
if (caEl) caEl.textContent = CONTRACT_ADDRESS;
document.querySelectorAll("a.buy").forEach(
  (a) => (a.href = hasCA ? UNISWAP_BASE + "&outputCurrency=" + CONTRACT_ADDRESS : UNISWAP_BASE)
);

const toast = document.getElementById("toast");
async function copyCA() {
  const v = (caEl && caEl.textContent.trim()) || CONTRACT_ADDRESS;
  try {
    await navigator.clipboard.writeText(v);
  } catch (e) {}
  if (toast) {
    toast.textContent = !hasCA ? "Copied! (CA drops at launch)" : "Copied!";
    toast.classList.add("on");
    setTimeout(() => toast.classList.remove("on"), 1800);
  }
}
document.querySelectorAll(".copy-btn").forEach((btn) => (btn.onclick = copyCA));

const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((i) => {
      if (i.isIntersecting) {
        i.target.classList.add("in");
        io.unobserve(i.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const lb = document.getElementById("lb");
if (lb) {
  const li = lb.querySelector("img");
  document.querySelectorAll(".gallery-grid img").forEach((img) => {
    img.onclick = () => {
      li.src = img.currentSrc || img.src;
      li.alt = img.alt || "";
      lb.hidden = false;
      lb.classList.add("on");
    };
  });
  lb.onclick = () => {
    lb.classList.remove("on");
    lb.hidden = true;
  };
}
