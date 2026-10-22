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

const c = document.getElementById("stars");
const x = c.getContext("2d");
let s = [];
function rs() {
  c.width = innerWidth;
  c.height = innerHeight;
  s = Array.from({ length: Math.min(240, Math.floor(innerWidth / 4.5)) }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 1.5 + 0.2,
    v: Math.random() * 0.28 + 0.04,
    h: Math.random() < 0.55 ? "#2ef2ff" : "#d9b8ff",
  }));
}
rs();
addEventListener("resize", rs);
(function d() {
  x.clearRect(0, 0, c.width, c.height);
  for (const p of s) {
    p.y += p.v;
    if (p.y > c.height) p.y = 0;
    x.globalAlpha = 0.35 + Math.random() * 0.55;
    x.fillStyle = p.h;
    x.beginPath();
    x.arc(p.x, p.y, p.r, 0, 7);
    x.fill();
  }
  requestAnimationFrame(d);
})();

const t = document.getElementById("toast");
document.getElementById("copy").onclick = async () => {
  const v = document.getElementById("ca").textContent.trim();
  try {
    await navigator.clipboard.writeText(v);
  } catch (e) {}
  t.textContent = !hasCA ? "Copied! (CA drops at launch)" : "Copied!";
  t.classList.add("on");
  setTimeout(() => t.classList.remove("on"), 1800);
};

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
document.querySelectorAll(".tile img").forEach(
  (i) =>
    (i.onclick = () => {
      li.src = i.currentSrc || i.src;
      lb.classList.add("on");
    })
);
lb.onclick = () => lb.classList.remove("on");

const m = document.querySelector(".marquee div");
if (m) m.textContent += m.textContent;

const nav = document.querySelector(".nav");
const toggle = document.getElementById("navToggle");
if (toggle && nav) {
  toggle.onclick = () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };
  nav.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}
