// ===== CONFIG: set the contract address here once known =====
const CONTRACT_ADDRESS = "0xCommingSoon";
const X_LINK = "https://x.com/Groklet_Eth";
document.querySelectorAll("a.xbtn").forEach((a) => (a.href = X_LINK));
const TG_LINK = "https://t.me/grokletofficialcommunity";
document.querySelectorAll("a.tgbtn").forEach((a) => (a.href = TG_LINK));
const UNISWAP_BASE = "https://app.uniswap.org/swap?chain=mainnet";
const hasCA = /^0x[a-fA-F0-9]{40}$/.test(CONTRACT_ADDRESS);
document.getElementById("ca").textContent = CONTRACT_ADDRESS;
document.querySelectorAll("a.buy").forEach(
  (a) => (a.href = hasCA ? UNISWAP_BASE + "&outputCurrency=" + CONTRACT_ADDRESS : UNISWAP_BASE)
);

const t = document.getElementById("toast");
async function copyCA() {
  const v = document.getElementById("ca").textContent.trim();
  try {
    await navigator.clipboard.writeText(v);
  } catch (e) {}
  t.textContent = !hasCA ? "Copied! (CA drops at launch)" : "Copied!";
  t.classList.add("on");
  setTimeout(() => t.classList.remove("on"), 1800);
}
document.querySelectorAll(".copy-btn").forEach((btn) => (btn.onclick = copyCA));

const io = new IntersectionObserver(
  (e) =>
    e.forEach((i) => {
      if (i.isIntersecting) {
        i.target.classList.add("in");
        io.unobserve(i.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((e) => io.observe(e));

const lb = document.getElementById("lb");
const li = lb.querySelector("img");
document.querySelectorAll(".panel img").forEach(
  (i) =>
    (i.onclick = () => {
      li.src = i.currentSrc || i.src;
      lb.classList.add("on");
    })
);
lb.onclick = () => lb.classList.remove("on");
