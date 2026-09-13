/* ============================================================
   JST BD Crockeries — Frontend Store Engine (No backend needed)
   সব সেটিং এক জায়গায় — নিচের STORE অংশে আপনার তথ্য বসান
   ============================================================ */

const STORE = {
  name: "জেএসটি বিডি ক্রোকারিজ",
  nameEn: "JST BD Crockeries",
  tagline: "বাংলাদেশের বিশ্বস্ত অনলাইন ক্রোকারিজ শপ",

  // ★★★ আপনার হোয়াটসঅ্যাপ নম্বর এখানে বসান (88 সহ, স্পেস/ড্যাশ ছাড়া) ★★★
  whatsapp: "8801712345678",

  hotlineHours: "সকাল ৯টা – রাত ১০টা (প্রতিদিন)",
  address: "ঢাকা, বাংলাদেশ",
  email: "support@jstbd.com",

  deliveryInside: 60,      // ঢাকার ভিতরে ডেলিভারি চার্জ (টাকা)
  deliveryOutside: 120,    // ঢাকার বাইরে ডেলিভারি চার্জ (টাকা)
  freeDeliveryOver: 5000,  // এত টাকার বেশি অর্ডারে ডেলিভারি ফ্রি
};

/* ------------------------- ক্যাটাগরি ------------------------- */
const CATEGORIES = [
  { id: "mixer",      name: "মিক্সার ও ব্লেন্ডার",   emoji: "🥤", desc: "শক্তিশালী মোটরের মিক্সার গ্রাইন্ডার" },
  { id: "cookware",   name: "কুকওয়্যার সেট",        emoji: "🍳", desc: "প্রিমিয়াম হানিকম্ব কুকওয়্যার" },
  { id: "electronic", name: "কিচেন ইলেকট্রনিক্স",    emoji: "🔪", desc: "আধুনিক কিচেন গ্যাজেট" },
];

/* ------------------------- পণ্যের তালিকা ------------------------- */
const PRODUCTS = [
  {
    id: "disnie-mixer-grinder-2000w",
    name: "ডিজনি ইটালি মিক্সার গ্রাইন্ডার",
    brand: "ডিজনি (Disnie Italy)",
    category: "mixer",
    price: 8250,
    oldPrice: 9500,
    badge: "বেস্ট সেলার",
    rating: 4.8,
    reviewsCount: 132,
    stock: 14,
    unit: "পিস",
    images: ["assets/img/product-mixer-grinder.jpg", "assets/img/product-mixer-grinder-2.jpg"],
    short: "২০০০ ওয়াট পাওয়ারফুল মোটর, ৫০০ গ্রাম গ্রাইন্ডিং ক্যাপাসিটি",
    description: [
      "ডিজনি ইটালির শক্তিশালী ২০০০ ওয়াট মিক্সার গ্রাইন্ডার — মসলা গুঁড়া, ডাল বাটা, জুস, লাচ্ছি, আদা-রসুন পেস্ট সবকিছু এখন মিনিটেই তৈরি করুন।",
      "হেভি-ডিউটি কপার মোটর ও ধারালো স্টেইনলেস স্টিল ব্লেড দীর্ঘদিন ব্যবহারের নিশ্চয়তা দেয়। বাসা ও ছোট রেস্টুরেন্ট — দুই জায়গার জন্যই পারফেক্ট।",
    ],
    specs: [
      ["ব্র্যান্ড", "ডিজনি (Disnie Italy)"],
      ["মোটর পাওয়ার", "২০০০ ওয়াট"],
      ["গ্রাইন্ডিং ক্যাপাসিটি", "৫০০ গ্রাম"],
      ["জার", "১ পিস (মাল্টি-পারপাস)"],
      ["ব্লেড", "স্টেইনলেস স্টিল"],
      ["ভোল্টেজ", "২২০V (বাংলাদেশ উপযোগী)"],
      ["ওয়ারেন্টি", "৬ মাসের সার্ভিস ওয়ারেন্টি"],
    ],
    features: ["মসলা, ডাল, চাল গুঁড়া করার জন্য পারফেক্ট", "ওভারহিট প্রোটেকশন সিস্টেম", "সহজে পরিষ্কারযোগ্য জার", "কম শব্দে শক্তিশালী পারফরম্যান্স"],
    reviewsList: [
      { name: "রহিমা খাতুন", area: "ঢাকা", rating: 5, date: "২ সপ্তাহ আগে", text: "মসলা গুঁড়া করতে একদম পারফেক্ট। মোটরের পাওয়ার দেখে অবাক হয়েছি। ডেলিভারিও পেয়েছি ২ দিনে।" },
      { name: "করিম উদ্দিন", area: "চট্টগ্রাম", rating: 5, date: "১ মাস আগে", text: "অরিজিনাল পণ্য পেয়েছি। প্যাকেজিং খুব ভালো ছিল। দোকানের জন্য নিয়েছি, প্রতিদিন ব্যবহার করছি।" },
    ],
  },
  {
    id: "disnie-honeycomb-7pcs-set",
    name: "ডিজনি ৭ পিস হানিকম্ব কুকওয়্যার সেট",
    brand: "ডিজনি (Disnie)",
    category: "cookware",
    price: 8300,
    oldPrice: 9800,
    badge: "প্রিমিয়াম",
    rating: 4.9,
    reviewsCount: 96,
    stock: 9,
    unit: "সেট",
    images: ["assets/img/product-honeycomb-set.jpg", "assets/img/product-honeycomb-set-2.jpg"],
    short: "৭ পিসের সেট, হানিকম্ব নন-স্টিক কোটিং, ইন্ডাকশন + গ্যাস উপযোগী",
    description: [
      "ডিজনির প্রিমিয়াম ৭ পিস হানিকম্ব কুকওয়্যার সেট — আধুনিক হানিকম্ব (মৌচাক) টেক্সচারের নন-স্টিক কোটিংয়ে রান্না হবে দ্রুত, তেল লাগবে কম, আর পরিষ্কার হবে এক ধোয়াতেই।",
      "ফুড-গ্রেড স্টেইনলেস স্টিল বডি, হিট-রেজিস্ট্যান্ট গ্লাস ঢাকনা — গ্যাসের চুলা ও ইন্ডাকশন কুকার দুটোতেই ব্যবহার করা যায়।",
    ],
    specs: [
      ["ব্র্যান্ড", "ডিজনি (Disnie)"],
      ["সেটে আছে", "৭ পিস (পাতিল, কড়াই, সসপ্যান + ঢাকনা)"],
      ["কোটিং", "হানিকম্ব নন-স্টিক"],
      ["ম্যাটেরিয়াল", "ফুড-গ্রেড স্টেইনলেস স্টিল"],
      ["ঢাকনা", "টেম্পার্ড গ্লাস"],
      ["চুলা", "গ্যাস + ইন্ডাকশন দুটোতেই চলে"],
      ["ওয়ারেন্টি", "৬ মাসের সার্ভিস ওয়ারেন্টি"],
    ],
    features: ["কম তেলে স্বাস্থ্যকর রান্না", "খাবার লেগে যায় না, পোড়ে না", "সমানভাবে তাপ ছড়ায়", "ডিশওয়াশার সেফ ও সহজে পরিষ্কার"],
    reviewsList: [
      { name: "নাসরিন আক্তার", area: "সিলেট", rating: 5, date: "১ সপ্তাহ আগে", text: "সেটটা দেখতে যেমন সুন্দর, ব্যবহারেও তেমন ভালো। মাছ ভাজতে একটুও লাগে না। ধন্যবাদ জেএসটি!" },
      { name: "তানিয়া সুলতানা", area: "ঢাকা", rating: 5, date: "৩ সপ্তাহ আগে", text: "ইন্ডাকশনে ব্যবহার করছি, কোনো সমস্যা হয়নি। প্যাকেজিং প্রিমিয়াম ছিল।" },
    ],
  },
  {
    id: "disnie-salad-cutter-808",
    name: "ডিজনি ইলেকট্রিক সালাদ কাটার — মডেল ৮০৮",
    brand: "ডিজনি (Disnie)",
    category: "electronic",
    price: 3250,
    oldPrice: 4200,
    badge: "হট ডিল",
    rating: 4.7,
    reviewsCount: 158,
    stock: 22,
    unit: "পিস",
    images: ["assets/img/product-salad-cutter.jpg", "assets/img/product-salad-cutter-2.jpg"],
    short: "৩.৫ লিটার ক্যাপাসিটি, ৩ স্পিড, ১৪০০ ওয়াট — মডেল ৮০৮",
    description: [
      "ডিজনি ইলেকট্রিক সালাদ কাটার (মডেল ৮০৮) — পেঁয়াজ, মরিচ, সবজি, সালাদ কাটা এখন কয়েক সেকেন্ডের কাজ। বড় ৩.৫ লিটার বাটি, একবারে বেশি পরিমাণে কাটা যায়।",
      "৩ ধাপের স্পিড কন্ট্রোল ও ১৪০০ ওয়াট মোটর — কিমা, পেঁয়াজ কুচি, আদা-রসুন পেস্ট, বাচ্চাদের খাবার সবকিছু সহজেই তৈরি করুন।",
    ],
    specs: [
      ["ব্র্যান্ড", "ডিজনি (Disnie)"],
      ["মডেল", "৮০৮"],
      ["ক্যাপাসিটি", "৩.৫ লিটার"],
      ["মোটর পাওয়ার", "১৪০০ ওয়াট"],
      ["স্পিড", "৩ ধাপ"],
      ["বাটি", "ফুড-গ্রেড ট্রান্সপারেন্ট বাটি"],
      ["ওয়ারেন্টি", "৬ মাসের সার্ভিস ওয়ারেন্টি"],
    ],
    features: ["কয়েক সেকেন্ডে সবজি কুচি", "সহজে খোলা ও পরিষ্কার করা যায়", "নন-স্লিপ বেস — ব্যবহারে নিরাপদ", "কিমা ও পেস্ট বানানো যায়"],
    reviewsList: [
      { name: "শারমিন আরা", area: "রাজশাহী", rating: 5, date: "৪ দিন আগে", text: "পেঁয়াজ কাটতে এখন চোখে পানি আসে না! ৩.৫ লিটার বাটিটা অনেক বড়, একবারে অনেক কাটা যায়।" },
      { name: "মাহমুদা বেগম", area: "খুলনা", rating: 4, date: "২ সপ্তাহ আগে", text: "দাম অনুযায়ী খুব ভালো পণ্য। স্পিড ৩টা থাকায় সুবিধা হয়। ডেলিভারি পেয়েছি ৩ দিনে।" },
    ],
  },
];

/* কাস্টমার রিভিউ (হোমপেজের জন্য) */
const TESTIMONIALS = [
  { name: "ফাতেমা বেগম", area: "ঢাকা", rating: 5, text: "ক্যাশ অন ডেলিভারিতে অর্ডার করেছিলাম, পণ্য হাতে পেয়ে টাকা দিয়েছি। হানিকম্ব সেটটা একদম অরিজিনাল।" },
  { name: "আব্দুল মালেক", area: "কুমিল্লা", rating: 5, text: "হোয়াটসঅ্যাপে অর্ডার করা এত সহজ! মিক্সার গ্রাইন্ডারটা দোকানের জন্য নিয়েছি, দারুণ চলছে।" },
  { name: "সুমি আক্তার", area: "বরিশাল", rating: 5, text: "সালাদ কাটারটা আমার রান্নাঘরের কাজ অর্ধেক কমিয়ে দিয়েছে। সাপোর্টেও সাথে সাথে উত্তর পেয়েছি।" },
];

/* ============================================================
   হেলপার ফাংশন
   ============================================================ */
const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
function bn(value) {
  return String(value).replace(/[0-9]/g, (d) => BN_DIGITS[+d]);
}
function taka(n) {
  return "৳" + bn(Number(n).toLocaleString("en-US"));
}
function discountPct(p) {
  if (!p.oldPrice || p.oldPrice <= p.price) return 0;
  return Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
}
function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}
function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id);
}
function waNumber() {
  return STORE.whatsapp.replace(/[^0-9]/g, "");
}
function displayPhone() {
  // 8801712345678 -> ০১৭১২-৩৪৫৬৭৮
  let n = waNumber();
  if (n.startsWith("880")) n = "0" + n.slice(3);
  const pretty = n.length === 11 ? n.slice(0, 5) + "-" + n.slice(5) : n;
  return bn(pretty);
}
function waLink(message) {
  return "https://wa.me/" + waNumber() + "?text=" + encodeURIComponent(message);
}
function waOrderLink(p, qty = 1) {
  const msg =
    "🛍️ *পণ্য অর্ডার — " + STORE.name + "*\n\n" +
    "পণ্য: " + p.name + "\n" +
    "দাম: " + taka(p.price) + " (" + bn(qty) + " " + p.unit + ")\n" +
    "💵 পেমেন্ট: ক্যাশ অন ডেলিভারি\n\n" +
    "আমি পণ্যটি অর্ডার করতে চাই। বিস্তারিত জানাবেন। 🙏";
  return waLink(msg);
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ============================================================
   কার্ট (লোকাল স্টোরেজ)
   ============================================================ */
const Cart = {
  key: "jst_cart_v1",
  load() {
    try { return JSON.parse(localStorage.getItem(this.key)) || {}; }
    catch (e) { return {}; }
  },
  save(items) {
    localStorage.setItem(this.key, JSON.stringify(items));
    updateCartBadge();
  },
  add(id, qty = 1) {
    const items = this.load();
    const p = getProduct(id);
    if (!p) return;
    items[id] = Math.min((items[id] || 0) + qty, p.stock);
    this.save(items);
  },
  setQty(id, qty) {
    const items = this.load();
    const p = getProduct(id);
    if (!p) return;
    if (qty <= 0) delete items[id];
    else items[id] = Math.min(qty, p.stock);
    this.save(items);
  },
  remove(id) {
    const items = this.load();
    delete items[id];
    this.save(items);
  },
  clear() { this.save({}); },
  count() {
    const items = this.load();
    return Object.values(items).reduce((a, b) => a + b, 0);
  },
  detailed() {
    const items = this.load();
    return Object.keys(items)
      .map((id) => ({ product: getProduct(id), qty: items[id] }))
      .filter((x) => x.product && x.qty > 0);
  },
  subtotal() {
    return this.detailed().reduce((s, x) => s + x.product.price * x.qty, 0);
  },
};

function updateCartBadge() {
  const n = Cart.count();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = bn(n);
    el.style.display = n > 0 ? "flex" : "none";
  });
}

/* ============================================================
   অ্যাকাউন্ট (লোকাল স্টোরেজ — ডেমো)
   ============================================================ */
const Account = {
  usersKey: "jst_users_v1",
  sessionKey: "jst_session_v1",
  loadUsers() {
    try { return JSON.parse(localStorage.getItem(this.usersKey)) || []; }
    catch (e) { return []; }
  },
  saveUsers(u) { localStorage.setItem(this.usersKey, JSON.stringify(u)); },
  current() {
    try { return JSON.parse(localStorage.getItem(this.sessionKey)); }
    catch (e) { return null; }
  },
  register({ name, phone, password, address }) {
    const users = this.loadUsers();
    if (users.find((u) => u.phone === phone)) return { ok: false, msg: "এই মোবাইল নম্বর দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে। লগইন করুন।" };
    const user = { name, phone, password, address: address || "", createdAt: Date.now() };
    users.push(user);
    this.saveUsers(users);
    localStorage.setItem(this.sessionKey, JSON.stringify({ name, phone, address: user.address }));
    return { ok: true };
  },
  login(phone, password) {
    const u = this.loadUsers().find((x) => x.phone === phone && x.password === password);
    if (!u) return { ok: false, msg: "মোবাইল নম্বর বা পাসওয়ার্ড ভুল হয়েছে।" };
    localStorage.setItem(this.sessionKey, JSON.stringify({ name: u.name, phone: u.phone, address: u.address || "" }));
    return { ok: true };
  },
  logout() { localStorage.removeItem(this.sessionKey); },
  updateAddress(phone, address) {
    const users = this.loadUsers();
    const u = users.find((x) => x.phone === phone);
    if (u) { u.address = address; this.saveUsers(users); }
    const s = this.current();
    if (s && s.phone === phone) {
      s.address = address;
      localStorage.setItem(this.sessionKey, JSON.stringify(s));
    }
  },
};

/* ============================================================
   টোস্ট নোটিফিকেশন
   ============================================================ */
function toast(msg, type = "success") {
  let box = document.getElementById("toast-box");
  if (!box) {
    box = document.createElement("div");
    box.id = "toast-box";
    document.body.appendChild(box);
  }
  const el = document.createElement("div");
  el.className = "toast toast-" + type;
  el.innerHTML = "<span>" + escapeHtml(msg) + "</span>";
  box.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 350);
  }, 2600);
}

/* ============================================================
   শেয়ার্ড UI: হেডার / ফুটার / বটম নেভ / ফ্লোটিং বাটন
   ============================================================ */
function starRow(rating) {
  const full = Math.round(rating);
  let s = "";
  for (let i = 1; i <= 5; i++) s += i <= full ? "★" : "☆";
  return '<span class="stars" aria-label="রেটিং">' + s + "</span>";
}

function productCard(p) {
  const pct = discountPct(p);
  const cat = getCategory(p.category);
  return (
    '<article class="p-card">' +
      '<a class="p-media" href="product.html?id=' + p.id + '" aria-label="' + escapeHtml(p.name) + '">' +
        '<img src="' + p.images[0] + '" alt="' + escapeHtml(p.name) + '" loading="lazy">' +
        (p.badge ? '<span class="p-badge">' + escapeHtml(p.badge) + "</span>" : "") +
        (pct > 0 ? '<span class="p-off">-' + bn(pct) + "%</span>" : "") +
      "</a>" +
      '<div class="p-body">' +
        '<div class="p-cat">' + cat.emoji + " " + escapeHtml(cat.name) + "</div>" +
        '<a class="p-name" href="product.html?id=' + p.id + '">' + escapeHtml(p.name) + "</a>" +
        '<div class="p-short">' + escapeHtml(p.short) + "</div>" +
        '<div class="p-rating">' + starRow(p.rating) +
          '<span class="p-rating-num">' + bn(p.rating) + " (" + bn(p.reviewsCount) + ")</span></div>" +
        '<div class="p-price-row"><span class="p-price">' + taka(p.price) + "</span>" +
          (p.oldPrice > p.price ? '<del class="p-old">' + taka(p.oldPrice) + "</del>" : "") +
        "</div>" +
        '<div class="p-stock">' + (p.stock > 0 ? "✅ স্টকে আছে" : "❌ স্টক শেষ") + "</div>" +
        '<div class="p-actions">' +
          '<button class="btn btn-cart" data-add="' + p.id + '">🛒 কার্টে যোগ করুন</button>' +
          '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + waOrderLink(p) + '">' +
            waIcon() + " অর্ডার" +
          "</a>" +
        "</div>" +
      "</div>" +
    "</article>"
  );
}

function waIcon() {
  return (
    '<svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">' +
    '<path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.8c1.8 1 3.9 1.5 4.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22.2c-1.1 0-2.2-.3-3.1-.9l-.2-.1-4.5 1.1 1.2-4.4-.2-.2c-.6-1-1-2.1-1-3.3 0-5.1 4.1-9.2 9.2-9.2 5.1 0 9.2 4.1 9.2 9.2 0 5.1-4.1 7.8-10.6 7.8zm5-6.9c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.9-1.3.3-.6.3-1.2.2-1.3 0-.1-.2-.2-.5-.3z"/>' +
    "</svg>"
  );
}

function renderChrome(active) {
  const user = Account.current();

  /* ---- হেডার ---- */
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML =
    '<div class="top-strip">🚚 ক্যাশ অন ডেলিভারি — সারাদেশে হোম ডেলিভারি <span class="top-strip-call">📞 হটলাইন: ' + displayPhone() + "</span></div>" +
    '<div class="header-main container">' +
      '<a class="logo" href="index.html">' +
        '<img src="assets/img/logo.svg" alt="' + STORE.name + ' লোগো">' +
        '<span class="logo-text"><strong>' + STORE.name + "</strong><small>" + STORE.tagline + "</small></span>" +
      "</a>" +
      '<form class="search-bar" id="search-form" action="products.html" method="get" role="search">' +
        '<input type="search" name="q" id="search-input" placeholder="পণ্য খুঁজুন… (যেমন: মিক্সার, কুকওয়্যার)" autocomplete="off">' +
        '<button type="submit" aria-label="খুঁজুন">🔍</button>' +
      "</form>" +
      '<div class="header-actions">' +
        '<a class="h-action" href="account.html" aria-label="অ্যাকাউন্ট">' +
          '<span class="h-ico">👤</span>' +
          '<span class="h-label">' + (user ? escapeHtml(user.name.split(" ")[0]) : "অ্যাকাউন্ট") + "</span>" +
        "</a>" +
        '<a class="h-action cart-link" href="cart.html" aria-label="কার্ট">' +
          '<span class="h-ico">🛒<span class="cart-count" data-cart-count style="display:none">০</span></span>' +
          '<span class="h-label">কার্ট</span>' +
        "</a>" +
      "</div>" +
    "</div>" +
    '<nav class="header-nav"><div class="container nav-inner">' +
      navLink("index.html", "🏠 হোম", active === "home") +
      navLink("products.html", "🛍️ সব পণ্য", active === "products") +
      CATEGORIES.map((c) => navLink("products.html?category=" + c.id, c.emoji + " " + c.name, false)).join("") +
      navLink("cart.html", "🛒 কার্ট", active === "cart") +
      navLink("account.html", user ? "👤 " + escapeHtml(user.name.split(" ")[0]) : "👤 অ্যাকাউন্ট", active === "account") +
    "</div></nav>";
  document.body.prepend(header);

  /* ---- ফুটার ---- */
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    '<div class="container footer-grid">' +
      '<div class="f-col f-brand">' +
        '<div class="f-logo"><img src="assets/img/logo.svg" alt="লোগো"><strong>' + STORE.name + "</strong></div>" +
        "<p>" + STORE.tagline + "। ১০০% অরিজিনাল পণ্য, সাশ্রয়ী দাম আর দ্রুত ডেলিভারি — সবকিছু এক জায়গায়।</p>" +
        '<div class="f-badges"><span>💵 ক্যাশ অন ডেলিভারি</span><span>🚚 সারাদেশে ডেলিভারি</span><span>✅ ১০০% অরিজিনাল</span></div>' +
      "</div>" +
      '<div class="f-col"><h4>দ্রুত লিংক</h4>' +
        '<a href="index.html">🏠 হোম</a>' +
        '<a href="products.html">🛍️ সব পণ্য</a>' +
        '<a href="cart.html">🛒 আমার কার্ট</a>' +
        '<a href="account.html">👤 অ্যাকাউন্ট তৈরি করুন</a>' +
      "</div>" +
      '<div class="f-col"><h4>ক্যাটাগরি</h4>' +
        CATEGORIES.map((c) => '<a href="products.html?category=' + c.id + '">' + c.emoji + " " + c.name + "</a>").join("") +
      "</div>" +
      '<div class="f-col"><h4>যোগাযোগ</h4>' +
        '<p>📞 হটলাইন: <a class="f-tel" href="tel:+' + waNumber() + '">' + displayPhone() + "</a></p>" +
        "<p>🕘 " + STORE.hotlineHours + "</p>" +
        "<p>📍 " + STORE.address + "</p>" +
        '<a class="btn btn-wa f-wa" target="_blank" rel="noopener" href="' + waLink("আসসালামু আলাইকুম! 👋\nআমি *" + STORE.name + "* থেকে পণ্য সম্পর্কে জানতে চাই।") + '">' + waIcon() + " হোয়াটসঅ্যাপে মেসেজ করুন</a>" +
      "</div>" +
    "</div>" +
    '<div class="footer-bottom">© ' + bn(new Date().getFullYear()) + " " + STORE.name + " (" + STORE.nameEn + ") — সর্বস্বত্ব সংরক্ষিত।</div>";
  document.body.appendChild(footer);

  /* ---- মোবাইল বটম নেভ ---- */
  const bottomNav = document.createElement("nav");
  bottomNav.className = "bottom-nav";
  bottomNav.innerHTML =
    bottomNavLink("index.html", "🏠", "হোম", active === "home") +
    bottomNavLink("products.html", "🛍️", "পণ্য", active === "products") +
    bottomNavLink("cart.html", "🛒", "কার্ট", active === "cart", true) +
    bottomNavLink("account.html", "👤", "অ্যাকাউন্ট", active === "account");
  document.body.appendChild(bottomNav);

  /* ---- ফ্লোটিং হোয়াটসঅ্যাপ অর্ডার বাটন ---- */
  const fab = document.createElement("a");
  fab.className = "wa-fab";
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.href = waLink("আসসালামু আলাইকুম! 👋\nআমি *" + STORE.name + "* থেকে অর্ডার করতে চাই। 🛒");
  fab.setAttribute("aria-label", "হোয়াটসঅ্যাপে অর্ডার করুন");
  fab.innerHTML = waIcon() + "<span>অর্ডার করুন</span>";
  document.body.appendChild(fab);

  updateCartBadge();
}

function navLink(href, label, isActive) {
  return '<a class="nav-link' + (isActive ? " active" : "") + '" href="' + href + '">' + label + "</a>";
}
function bottomNavLink(href, ico, label, isActive, isCart) {
  return (
    '<a class="bn-link' + (isActive ? " active" : "") + '" href="' + href + '">' +
      '<span class="bn-ico">' + ico +
        (isCart ? '<span class="cart-count" data-cart-count style="display:none">০</span>' : "") +
      "</span><span>" + label + "</span>" +
    "</a>"
  );
}

/* ============================================================
   গ্লোবাল ক্লিক হ্যান্ডলার (কার্টে যোগ + পরিমাণ)
   ============================================================ */
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add]");
  if (addBtn) {
    const id = addBtn.getAttribute("data-add");
    const p = getProduct(id);
    if (!p) return;
    Cart.add(id, 1);
    toast("✅ " + p.name + " কার্টে যোগ হয়েছে!");
    return;
  }
  const buyBtn = e.target.closest("[data-buy]");
  if (buyBtn) {
    const id = buyBtn.getAttribute("data-buy");
    const p = getProduct(id);
    if (!p) return;
    const qtyEl = document.getElementById("pd-qty");
    const qty = qtyEl ? Math.max(1, parseInt(qtyEl.textContent || "1", 10)) : 1;
    window.open(waOrderLink(p, qty), "_blank");
    return;
  }
  const addQty = e.target.closest("[data-addqty]");
  if (addQty) {
    const id = addQty.getAttribute("data-addqty");
    const qtyEl = document.getElementById("pd-qty");
    const qty = qtyEl ? Math.max(1, parseInt(qtyEl.textContent || "1", 10)) : 1;
    Cart.add(id, qty);
    toast("✅ কার্টে " + bn(qty) + "টি যোগ হয়েছে!");
    return;
  }
});

/* ============================================================
   পেজ ইনিশিয়ালাইজার
   ============================================================ */
function initCountdown() {
  const el = document.getElementById("deal-countdown");
  if (!el) return;
  function tick() {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    let d = Math.max(0, Math.floor((end - now) / 1000));
    const h = String(Math.floor(d / 3600)).padStart(2, "0");
    const m = String(Math.floor((d % 3600) / 60)).padStart(2, "0");
    const s = String(d % 60).padStart(2, "0");
    el.innerHTML =
      '<span class="cd-box"><b>' + bn(h) + "</b><small>ঘণ্টা</small></span>:" +
      '<span class="cd-box"><b>' + bn(m) + "</b><small>মিনিট</small></span>:" +
      '<span class="cd-box"><b>' + bn(s) + "</b><small>সেকেন্ড</small></span>";
  }
  tick();
  setInterval(tick, 1000);
}

function initFaq() {
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((x) => x.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* ---- হোমপেজ ---- */
function initHome() {
  renderChrome("home");

  // আজকের ডিল
  const deals = [...PRODUCTS].sort((a, b) => discountPct(b) - discountPct(a));
  document.getElementById("deal-grid").innerHTML = deals.map(productCard).join("");
  document.getElementById("stat-products").textContent = bn(PRODUCTS.length) + "+";

  // ক্যাটাগরি
  document.getElementById("cat-grid").innerHTML = CATEGORIES.map((c) => {
    const n = PRODUCTS.filter((p) => p.category === c.id).length;
    return (
      '<a class="cat-card" href="products.html?category=' + c.id + '">' +
        '<span class="cat-emoji">' + c.emoji + "</span>" +
        '<span class="cat-name">' + c.name + "</span>" +
        '<span class="cat-count">' + bn(n) + "টি পণ্য</span>" +
      "</a>"
    );
  }).join("");

  // ফিচার্ড পণ্য
  document.getElementById("featured-grid").innerHTML = PRODUCTS.map(productCard).join("");

  // রিভিউ
  document.getElementById("review-grid").innerHTML = TESTIMONIALS.map((t) => (
    '<div class="review-card">' + starRow(t.rating) +
      "<p>“" + escapeHtml(t.text) + "”</p>" +
      '<div class="review-who"><span class="review-avatar">' + escapeHtml(t.name[0]) + "</span>" +
      "<div><b>" + escapeHtml(t.name) + "</b><small>📍 " + escapeHtml(t.area) + " • ✅ যাচাইকৃত ক্রেতা</small></div></div>" +
    "</div>"
  )).join("");

  initCountdown();
  initFaq();
}

/* ---- সব পণ্য পেজ ---- */
function initProducts() {
  renderChrome("products");
  const params = new URLSearchParams(location.search);

  const sortSel = document.getElementById("sort-select");
  const pillsBox = document.getElementById("cat-pills");
  const stockToggle = document.getElementById("stock-only");
  const grid = document.getElementById("products-grid");
  const countEl = document.getElementById("products-count");
  const emptyBox = document.getElementById("products-empty");
  const searchNote = document.getElementById("search-note");

  let activeCat = params.get("category") || "all";
  if (params.get("sort")) sortSel.value = params.get("sort");
  if (params.get("stock") === "1") stockToggle.checked = true;
  const q = (params.get("q") || "").trim().toLowerCase();
  if (q) {
    searchNote.style.display = "flex";
    searchNote.querySelector("span").innerHTML = "🔍 “<b>" + escapeHtml(params.get("q")) + "</b>” এর ফলাফল";
    const si = document.getElementById("search-input");
    if (si) si.value = params.get("q");
  }

  function drawPills() {
    const all = [{ id: "all", name: "সব", emoji: "🛍️" }, ...CATEGORIES];
    pillsBox.innerHTML = all.map((c) =>
      '<button class="pill' + (activeCat === c.id ? " active" : "") + '" data-cat="' + c.id + '">' + c.emoji + " " + c.name + "</button>"
    ).join("");
  }

  function draw() {
    let list = PRODUCTS.filter((p) => {
      if (activeCat !== "all" && p.category !== activeCat) return false;
      if (stockToggle.checked && p.stock <= 0) return false;
      if (q && !(p.name + " " + p.short + " " + p.brand).toLowerCase().includes(q)) return false;
      return true;
    });
    const sort = sortSel.value;
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "discount") list.sort((a, b) => discountPct(b) - discountPct(a));

    countEl.textContent = bn(list.length) + "টি পণ্য";
    grid.innerHTML = list.map(productCard).join("");
    emptyBox.style.display = list.length ? "none" : "block";

    const url = new URL(location.href);
    if (activeCat === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", activeCat);
    url.searchParams.set("sort", sort);
    if (stockToggle.checked) url.searchParams.set("stock", "1");
    else url.searchParams.delete("stock");
    history.replaceState(null, "", url);
  }

  pillsBox.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    activeCat = b.getAttribute("data-cat");
    drawPills();
    draw();
  });
  sortSel.addEventListener("change", draw);
  stockToggle.addEventListener("change", draw);
  drawPills();
  draw();
}

/* ---- পণ্যের বিস্তারিত পেজ ---- */
function initProduct() {
  renderChrome("products");
  const id = new URLSearchParams(location.search).get("id");
  const p = getProduct(id);
  const box = document.getElementById("product-detail");

  if (!p) {
    box.innerHTML =
      '<div class="not-found">😕<h2>দুঃখিত! পণ্যটি পাওয়া যায়নি</h2>' +
      '<a class="btn btn-primary" href="products.html">সব পণ্য দেখুন</a></div>';
    document.getElementById("related-wrap").style.display = "none";
    return;
  }

  document.title = p.name + " — " + STORE.name;
  const pct = discountPct(p);
  const cat = getCategory(p.category);

  box.innerHTML =
    '<div class="pd-layout">' +
      '<div class="pd-gallery">' +
        '<div class="pd-main"><img id="pd-img" src="' + p.images[0] + '" alt="' + escapeHtml(p.name) + '">' +
          (p.badge ? '<span class="p-badge">' + escapeHtml(p.badge) + "</span>" : "") +
          (pct > 0 ? '<span class="p-off">-' + bn(pct) + "% ছাড়</span>" : "") +
        "</div>" +
        '<div class="pd-thumbs">' + p.images.map((src, i) =>
          '<button class="pd-thumb' + (i === 0 ? " active" : "") + '" data-src="' + src + '"><img src="' + src + '" alt="ছবি ' + bn(i + 1) + '"></button>'
        ).join("") + "</div>" +
      "</div>" +
      '<div class="pd-info">' +
        '<div class="pd-cat">' + cat.emoji + " " + escapeHtml(cat.name) + " • " + escapeHtml(p.brand) + "</div>" +
        "<h1>" + escapeHtml(p.name) + "</h1>" +
        '<div class="pd-rating">' + starRow(p.rating) + "<span>" + bn(p.rating) + " • " + bn(p.reviewsCount) + "টি রিভিউ</span></div>" +
        '<div class="pd-price-box"><span class="pd-price">' + taka(p.price) + "</span>" +
          (p.oldPrice > p.price ? '<del>' + taka(p.oldPrice) + "</del>" : "") +
          (pct > 0 ? '<span class="pd-save">সাশ্রয় ' + taka(p.oldPrice - p.price) + "</span>" : "") +
        "</div>" +
        '<p class="pd-short">📌 ' + escapeHtml(p.short) + "</p>" +
        '<div class="pd-stock">' + (p.stock > 0 ? "✅ স্টকে আছে (মাত্র " + bn(p.stock) + " " + p.unit + " বাকি — দ্রুত অর্ডার করুন!)" : "❌ স্টক শেষ") + "</div>" +
        '<div class="pd-qty-row"><span>পরিমাণ:</span>' +
          '<div class="qty-stepper"><button id="qty-minus" aria-label="কমান">−</button><span id="pd-qty">১</span><button id="qty-plus" aria-label="বাড়ান">+</button></div>' +
          "<span>(" + p.unit + ")</span>" +
        "</div>" +
        '<div class="pd-cta">' +
          '<button class="btn btn-cart btn-big" data-addqty="' + p.id + '">🛒 কার্টে যোগ করুন</button>' +
          '<button class="btn btn-wa btn-big" data-buy="' + p.id + '">' + waIcon() + " এখনই অর্ডার করুন</button>" +
        "</div>" +
        '<div class="pd-trust">' +
          '<span>💵 ক্যাশ অন ডেলিভারি</span><span>🚚 সারাদেশে ডেলিভারি</span>' +
          "<span>✅ ১০০% অরিজিনাল</span><span>🔄 সহজ রিটার্ন</span>" +
        "</div>" +
        '<div class="pd-delivery">🚚 ঢাকার ভিতরে: <b>' + taka(STORE.deliveryInside) + "</b> • ঢাকার বাইরে: <b>" + taka(STORE.deliveryOutside) + "</b> • " + taka(STORE.freeDeliveryOver) + "+ অর্ডারে <b>ডেলিভারি ফ্রি! 🎉</b></div>" +
      "</div>" +
    "</div>" +
    '<div class="pd-tabs">' +
      '<div class="pd-tab"><h3>📝 পণ্যের বিবরণ</h3>' + p.description.map((d) => "<p>" + escapeHtml(d) + "</p>").join("") +
        '<ul class="pd-features">' + p.features.map((f) => "<li>✔️ " + escapeHtml(f) + "</li>").join("") + "</ul></div>" +
      '<div class="pd-tab"><h3>📋 স্পেসিফিকেশন</h3><table class="spec-table">' +
        p.specs.map((s) => "<tr><th>" + escapeHtml(s[0]) + "</th><td>" + escapeHtml(s[1]) + "</td></tr>").join("") +
      "</table></div>" +
      '<div class="pd-tab"><h3>⭐ ক্রেতাদের রিভিউ (' + bn(p.reviewsCount) + ")</h3><div class=\"pd-reviews\">" +
        p.reviewsList.map((r) => (
          '<div class="review-card">' + starRow(r.rating) +
            "<p>“" + escapeHtml(r.text) + "”</p>" +
            '<div class="review-who"><span class="review-avatar">' + escapeHtml(r.name[0]) + "</span>" +
            "<div><b>" + escapeHtml(r.name) + "</b><small>📍 " + escapeHtml(r.area) + " • " + escapeHtml(r.date) + " • ✅ যাচাইকৃত ক্রেতা</small></div></div>" +
          "</div>"
        )).join("") + "</div></div>" +
    "</div>";

  // গ্যালারি
  box.querySelectorAll(".pd-thumb").forEach((t) => {
    t.addEventListener("click", () => {
      box.querySelectorAll(".pd-thumb").forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      document.getElementById("pd-img").src = t.getAttribute("data-src");
    });
  });

  // পরিমাণ
  let qty = 1;
  const qtyEl = document.getElementById("pd-qty");
  document.getElementById("qty-minus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qtyEl.textContent = bn(qty);
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    qty = Math.min(p.stock, qty + 1);
    qtyEl.textContent = bn(qty);
  });

  // সম্পর্কিত পণ্য
  const related = PRODUCTS.filter((x) => x.id !== p.id);
  document.getElementById("related-grid").innerHTML = related.map(productCard).join("");
}

/* ---- কার্ট + চেকআউট পেজ ---- */
function initCart() {
  renderChrome("cart");
  const user = Account.current();
  if (user) {
    const set = (id, v) => { const el = document.getElementById(id); if (el && v) el.value = v; };
    set("co-name", user.name);
    set("co-phone", user.phone);
    set("co-address", user.address);
  }
  drawCart();
  document.querySelectorAll('input[name="area"]').forEach((r) => r.addEventListener("change", drawCart));
  document.getElementById("checkout-form").addEventListener("submit", submitOrder);
}

function cartDeliveryFee(subtotal) {
  if (subtotal <= 0) return 0;
  if (subtotal >= STORE.freeDeliveryOver) return 0;
  const area = document.querySelector('input[name="area"]:checked');
  return area && area.value === "outside" ? STORE.deliveryOutside : STORE.deliveryInside;
}

function drawCart() {
  const items = Cart.detailed();
  const listBox = document.getElementById("cart-items");
  const emptyBox = document.getElementById("cart-empty");
  const summaryBox = document.getElementById("cart-summary");
  const checkoutBox = document.getElementById("checkout-box");

  if (!items.length) {
    listBox.innerHTML = "";
    emptyBox.style.display = "block";
    summaryBox.style.display = "none";
    checkoutBox.style.display = "none";
    return;
  }
  emptyBox.style.display = "none";
  summaryBox.style.display = "block";
  checkoutBox.style.display = "block";

  listBox.innerHTML = items.map(({ product: p, qty }) => (
    '<div class="cart-item">' +
      '<a href="product.html?id=' + p.id + '"><img src="' + p.images[0] + '" alt="' + escapeHtml(p.name) + '"></a>' +
      '<div class="ci-info">' +
        '<a class="ci-name" href="product.html?id=' + p.id + '">' + escapeHtml(p.name) + "</a>" +
        '<div class="ci-price">' + taka(p.price) + " × " + bn(qty) + " = <b>" + taka(p.price * qty) + "</b></div>" +
        '<div class="ci-row"><div class="qty-stepper small">' +
          '<button data-dec="' + p.id + '" aria-label="কমান">−</button><span>' + bn(qty) + "</span>" +
          '<button data-inc="' + p.id + '" aria-label="বাড়ান">+</button>' +
        '</div><button class="ci-remove" data-rem="' + p.id + '">🗑️ মুছুন</button></div>' +
      "</div>" +
    "</div>"
  )).join("");

  const sub = Cart.subtotal();
  const fee = cartDeliveryFee(sub);
  document.getElementById("sum-subtotal").textContent = taka(sub);
  document.getElementById("sum-delivery").textContent = fee === 0 ? "ফ্রি! 🎉" : taka(fee);
  document.getElementById("sum-total").textContent = taka(sub + fee);

  const note = document.getElementById("free-del-note");
  if (sub >= STORE.freeDeliveryOver) {
    note.style.display = "block";
    note.innerHTML = "🎉 অভিনন্দন! " + taka(STORE.freeDeliveryOver) + "+ অর্ডারে আপনার <b>ডেলিভারি সম্পূর্ণ ফ্রি!</b>";
  } else {
    note.style.display = "block";
    note.innerHTML = "🚚 আর <b>" + taka(STORE.freeDeliveryOver - sub) + "</b> টাকার পণ্য কিনলেই <b>ডেলিভারি ফ্রি!</b>";
  }
}

document.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  const rem = e.target.closest("[data-rem]");
  if (inc) {
    const p = getProduct(inc.getAttribute("data-inc"));
    Cart.setQty(p.id, Math.min(p.stock, (Cart.load()[p.id] || 0) + 1));
    if (document.getElementById("cart-items")) drawCart();
  } else if (dec) {
    const id = dec.getAttribute("data-dec");
    Cart.setQty(id, (Cart.load()[id] || 0) - 1);
    if (document.getElementById("cart-items")) drawCart();
  } else if (rem) {
    Cart.remove(rem.getAttribute("data-rem"));
    toast("🗑️ পণ্যটি কার্ট থেকে মুছে ফেলা হয়েছে");
    if (document.getElementById("cart-items")) drawCart();
  }
});

function submitOrder(e) {
  e.preventDefault();
  const items = Cart.detailed();
  if (!items.length) return;

  const name = document.getElementById("co-name").value.trim();
  const phone = document.getElementById("co-phone").value.trim();
  const address = document.getElementById("co-address").value.trim();
  const note = document.getElementById("co-note").value.trim();
  const areaEl = document.querySelector('input[name="area"]:checked');
  const area = areaEl && areaEl.value === "outside" ? "ঢাকার বাইরে" : "ঢাকার ভিতরে";

  if (name.length < 3) { toast("⚠️ আপনার সঠিক নাম লিখুন", "error"); return; }
  if (!/^01[3-9]\d{8}$/.test(phone)) { toast("⚠️ সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন (01 দিয়ে শুরু)", "error"); return; }
  if (address.length < 8) { toast("⚠️ সম্পূর্ণ ডেলিভারি ঠিকানা লিখুন", "error"); return; }

  const sub = Cart.subtotal();
  const fee = cartDeliveryFee(sub);
  const lines = items.map((x, i) =>
    bn(i + 1) + ". " + x.product.name + "\n   " + bn(x.qty) + " " + x.product.unit + " × " + taka(x.product.price) + " = " + taka(x.product.price * x.qty)
  );

  const msg =
    "🛍️ *নতুন অর্ডার — " + STORE.name + "*\n" +
    "━━━━━━━━━━━━\n" + lines.join("\n") + "\n━━━━━━━━━━━━\n" +
    "সাবটোটাল: " + taka(sub) + "\n" +
    "ডেলিভারি চার্জ (" + area + "): " + (fee === 0 ? "ফ্রি! 🎉" : taka(fee)) + "\n" +
    "*সর্বমোট: " + taka(sub + fee) + "*\n" +
    "💵 পেমেন্ট: ক্যাশ অন ডেলিভারি\n━━━━━━━━━━━━\n" +
    "👤 নাম: " + name + "\n📞 মোবাইল: " + phone + "\n📍 ঠিকানা: " + address +
    (note ? "\n📝 নোট: " + note : "") +
    "\n\nঅর্ডারটি কনফার্ম করবেন। ধন্যবাদ! 🙏";

  const user = Account.current();
  if (user) Account.updateAddress(user.phone, address);

  window.open(waLink(msg), "_blank");
  toast("✅ হোয়াটসঅ্যাপে অর্ডার পাঠানো হচ্ছে…");
}

/* ---- অ্যাকাউন্ট পেজ ---- */
function initAccount() {
  renderChrome("account");
  const user = Account.current();
  const guestBox = document.getElementById("account-guest");
  const userBox = document.getElementById("account-user");

  if (user) {
    guestBox.style.display = "none";
    userBox.style.display = "block";
    document.getElementById("acc-name").textContent = user.name;
    document.getElementById("acc-phone").textContent = bn(user.phone);
    document.getElementById("acc-address").textContent = user.address || "ঠিকানা দেওয়া হয়নি";
    document.getElementById("acc-avatar").textContent = user.name.trim()[0] || "👤";
    document.getElementById("logout-btn").addEventListener("click", () => {
      Account.logout();
      toast("👋 সফলভাবে লগআউট হয়েছে");
      setTimeout(() => location.reload(), 800);
    });
    return;
  }

  guestBox.style.display = "block";
  userBox.style.display = "none";

  // ট্যাব
  const tabLogin = document.getElementById("tab-login");
  const tabReg = document.getElementById("tab-register");
  const formLogin = document.getElementById("form-login");
  const formReg = document.getElementById("form-register");
  tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active"); tabReg.classList.remove("active");
    formLogin.style.display = "block"; formReg.style.display = "none";
  });
  tabReg.addEventListener("click", () => {
    tabReg.classList.add("active"); tabLogin.classList.remove("active");
    formReg.style.display = "block"; formLogin.style.display = "none";
  });

  formReg.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const phone = document.getElementById("reg-phone").value.trim();
    const address = document.getElementById("reg-address").value.trim();
    const pass = document.getElementById("reg-pass").value;
    const pass2 = document.getElementById("reg-pass2").value;
    if (name.length < 3) { toast("⚠️ আপনার সঠিক নাম লিখুন", "error"); return; }
    if (!/^01[3-9]\d{8}$/.test(phone)) { toast("⚠️ সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন", "error"); return; }
    if (pass.length < 4) { toast("⚠️ পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে", "error"); return; }
    if (pass !== pass2) { toast("⚠️ দুটি পাসওয়ার্ড মিলছে না", "error"); return; }
    const r = Account.register({ name, phone, password: pass, address });
    if (!r.ok) { toast("⚠️ " + r.msg, "error"); return; }
    toast("🎉 অ্যাকাউন্ট তৈরি সফল! স্বাগতম, " + name.split(" ")[0]);
    setTimeout(() => location.reload(), 900);
  });

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const phone = document.getElementById("login-phone").value.trim();
    const pass = document.getElementById("login-pass").value;
    const r = Account.login(phone, pass);
    if (!r.ok) { toast("⚠️ " + r.msg, "error"); return; }
    toast("👋 স্বাগতম! লগইন সফল হয়েছে");
    setTimeout(() => location.reload(), 900);
  });
}
