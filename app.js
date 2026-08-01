/* ==========================================================================
   DR. PANKAJ SAINI — PANKAJ HOSPITAL WEBSITE & BLOG CMS LOGIC
   Vanilla JS • Ponytail standard library first • YAGNI (Concise & Efficient)
   ========================================================================== */

const PRESEEDED_ARTICLES = [
  {
    id: "post-1",
    title: "Hair Fall vs. Hair Loss: When Should You See a Specialist?",
    category: "Hair Care",
    readTime: "4 min read",
    date: "July 28, 2026",
    image: "doctor_photo.jpg",
    excerpt: "Losing 50-100 hairs a day is normal. Here's how to tell the difference between everyday shedding and a condition that needs treatment.",
    content: `It's normal to shed some hair every day — most people lose between 50 and 100 strands as part of the natural growth cycle. Problems start when shedding increases noticeably, or when you notice thinning patches, a receding hairline, or visible scalp.\n\nCommon causes we see at the clinic include nutritional deficiencies, stress, thyroid issues, hormonal changes, and pattern baldness (androgenetic alopecia), which tends to run in families.\n\nWhat you can do:\n• Get an early evaluation — earlier treatment generally gives better results.\n• Depending on the cause, options range from topical treatment and PRP therapy to hair transplant for more advanced hair loss.\n• Avoid tight hairstyles, harsh chemical treatments, and excessive heat styling, which can worsen hair damage.\n\nIf you've noticed a clear change in your hair over the last few months, it's worth getting it looked at rather than waiting.`,
    createdAt: 1785283200000
  },
  {
    id: "post-2",
    title: "Skin Allergies & Chronic Rosacea: Finding the Root Cause",
    category: "Skin Care",
    readTime: "5 min read",
    date: "July 22, 2026",
    image: "doctor_photo.jpg",
    excerpt: "Redness and irritation that keep coming back are usually a sign of an underlying trigger, not just 'sensitive skin'.",
    content: `A lot of patients come in after trying several creams on their own for redness, itching, or recurring rashes, without lasting relief. Often that's because the underlying trigger was never identified.\n\nSkin allergies and chronic rosacea can be caused by a range of triggers — certain skincare products, weather changes, food sensitivities, or an overreactive immune response. Treating only the symptoms, without finding the cause, usually means the problem keeps coming back.\n\nOur approach:\n1. A detailed history to identify possible triggers (products, environment, diet, medications).\n2. Calming the current flare-up with the right topical or oral treatment.\n3. A longer-term plan to reduce recurrence — including simple changes to your daily skincare routine.\n\nIf your skin reacts often or a rash keeps returning, it's worth getting a proper diagnosis instead of cycling through over-the-counter creams.`,
    createdAt: 1784764800000
  },
  {
    id: "post-3",
    title: "Fungal Skin Infections: Why They Keep Coming Back",
    category: "Skin Care",
    readTime: "3 min read",
    date: "July 15, 2026",
    image: "doctor_photo.jpg",
    excerpt: "Fungal infections are common, especially in humid weather — but stopping treatment too early is the most common reason they return.",
    content: `Fungal skin infections (ringworm, athlete's foot, and similar conditions) are extremely common, especially during humid months. The itchy, ring-shaped rash is easy to recognize, but many patients stop treatment as soon as symptoms improve — which is the main reason the infection comes back.\n\nA few important points:\n• Complete the full course of treatment prescribed, even after the itching and visible rash clear up.\n• Keep the affected area clean and dry, and avoid sharing towels, clothing, or bedding during treatment.\n• Wash and sun-dry clothes, towels, and bedsheets regularly to prevent reinfection.\n\nIf an infection isn't improving after a week or two of treatment, or keeps returning, it's a good idea to get it reassessed — sometimes a different or combination treatment is needed.`,
    createdAt: 1784160000000
  },
  {
    id: "post-4",
    title: "Dermal Fillers Explained: Who They're For and What to Expect",
    category: "Cosmetology",
    readTime: "3 min read",
    date: "July 30, 2026",
    image: "doctor_photo.jpg",
    excerpt: "A non-surgical way to restore lost facial volume and smooth fine lines — here's what dermal fillers actually do.",
    content: `Dermal fillers are a non-surgical aesthetic treatment used to reduce fine lines and wrinkles, restore volume the face loses over time, and enhance features like the lips, chin and jawline. It's a quick, in-clinic procedure with minimal downtime.\n\nDermal fillers may be worth considering if you're noticing smile lines or fine lines, a loss of volume in the face, or want to enhance your lips or facial features without going under the knife.\n\nThat said, every patient's skin is different. The right treatment — filler type, amount, and placement — is decided only after an in-person consultation, so we can plan something that looks natural and suits your face.`,
    createdAt: 1785715200000
  }
];

const SERVICE_DETAILS = {
  "Hair Transplant": { icon: "💇", subtitle: "Permanent Hair Restoration", text: `We help patients dealing with hair thinning, receding hairlines, or pattern baldness, with a treatment plan matched to the stage and cause of hair loss — from PRP therapy to FUE hair transplant.`, highlights: ["FUE (Follicular Unit Extraction) hair transplant.", "PRP (Platelet-Rich Plasma) therapy for hair fall and thinning.", "One-on-one consultation to assess the cause of hair loss before recommending treatment."] },
  "Skin & Allergy Care": { icon: "🧴", subtitle: "Diagnosis-First Skin Treatment", text: `We diagnose and treat skin allergies, chronic rosacea, fungal infections and other recurring skin conditions — focusing on finding the trigger, not just calming the symptoms.`, highlights: ["Skin allergy testing and treatment.", "Chronic rosacea and rash management.", "Fungal infection treatment with guidance to prevent recurrence."] },
  "Cosmetology & Laser": { icon: "✨", subtitle: "Modern, Minimally Invasive Aesthetic Care", text: `Our cosmetology treatments are aimed at improving skin texture, tone and appearance using safe, well-established methods.`, highlights: ["Laser hair reduction.", "Acne scar and pigmentation treatment.", "General skin rejuvenation and care plans."] },
  "Dermal Fillers": { icon: "💉", subtitle: "Non-Surgical Facial Rejuvenation", text: `Dermal fillers are a non-surgical aesthetic treatment that restores lost facial volume and smooths fine lines — a quick procedure with minimal downtime. The right treatment is always decided after an in-person consultation, since every patient's skin is different.`, highlights: ["Reduces fine lines and wrinkles, restoring youthful volume.", "Enhances lips, chin and jawline contouring.", "Suitable for those wanting facial rejuvenation without surgery."] },
  "General Medicine": { icon: "🩺", subtitle: "Everyday Medical Care, Alongside Specialist Treatment", text: `Beyond skin and hair, we also see patients for general allergies and common infections — so you don't need to go elsewhere for routine care.`, highlights: ["Allergy diagnosis and treatment.", "Common infectious disease care.", "General health consultations."] }
};

const TECH_DETAILS = {
  "MNRF (Microneedling Radio Frequency)": {
    category: "Advanced Clinical Equipment",
    icon: "⚡",
    content: "Microneedling Radio Frequency (MNRF) combines tiny needles with radiofrequency energy to stimulate collagen and elastin production deep in the skin. It treats acne scars, enlarged pores, wrinkles, fine lines, skin laxity, and stretch marks. The treatment improves skin texture, firmness, and overall rejuvenation with minimal downtime and long-lasting results."
  },
  "Hydrafacial": {
    category: "Advanced Clinical Equipment",
    icon: "💧",
    content: "Hydrafacial is a non-invasive facial treatment that cleanses, exfoliates, extracts impurities, and infuses the skin with hydrating serums. It is used for dull skin, clogged pores, acne, pigmentation, dehydration, and fine lines. The treatment leaves the skin refreshed, glowing, deeply hydrated, and suitable for all skin types."
  },
  "LHR (Laser Hair Reduction)": {
    category: "Advanced Clinical Equipment",
    icon: "✨",
    content: "Laser Hair Reduction (LHR) uses concentrated light energy to target hair follicles, reducing unwanted hair growth safely and effectively. It treats facial and body hair on areas like the legs, arms, underarms, bikini line, and back. Multiple sessions provide long-term hair reduction with smoother skin and minimal discomfort."
  },
  "Omega Light": {
    category: "Advanced Clinical Equipment",
    icon: "💡",
    content: "Omega Light Therapy uses LED lights of different wavelengths to promote skin healing and rejuvenation. It helps reduce acne, inflammation, redness, pigmentation, and signs of aging. The treatment stimulates collagen production, improves circulation, accelerates wound healing, and leaves the skin brighter, healthier, and more radiant."
  },
  "Mesogun": {
    category: "Advanced Clinical Equipment",
    icon: "💉",
    content: "A Mesogun is an advanced device that delivers vitamins, hyaluronic acid, peptides, and other nutrients into the skin through precise microinjections. It treats skin aging, pigmentation, dehydration, and hair loss. The procedure improves hydration, elasticity, collagen production, and overall skin and scalp health."
  },
  "Oxygen Facial": {
    category: "Advanced Clinical Equipment",
    icon: "🫧",
    content: "An Oxygen Facial delivers purified oxygen along with nourishing serums into the skin to hydrate and revitalize it. It is used for dry, tired, and dull skin, fine lines, and uneven complexion. The treatment enhances skin brightness, hydration, elasticity, and provides an instant healthy glow."
  },
  "Q-Switched Nd:YAG Laser": {
    category: "Advanced Clinical Equipment",
    icon: "🌟",
    content: "The Q-Switched Nd:YAG Laser delivers high-energy laser pulses to break down unwanted pigment without damaging surrounding skin. It treats melasma, freckles, sunspots, tattoos, acne marks, and pigmentation. The treatment improves skin tone, reduces discoloration, stimulates collagen, and gives a clearer, more even complexion."
  },
  "CO₂ Laser": {
    category: "Advanced Clinical Equipment",
    icon: "🔬",
    content: "CO₂ Laser is an advanced fractional laser treatment that creates microscopic channels in the skin to stimulate collagen production and skin renewal. It is commonly used for acne scars, surgical scars, wrinkles, fine lines, enlarged pores, sun damage, warts, and some benign skin growths. The treatment improves skin texture, firmness, and overall appearance. Mild redness and peeling are expected for a few days, with results improving over several weeks as new collagen forms."
  }
};

const $ = id => document.getElementById(id);
let adminEmail = "punitlohan09@gmail.com", adminPassword = "password123";
let isAdmin = localStorage.getItem("isAdmin") === "true", articles = [], currentFilter = "all";

// Modal System Helper
function toggleModal(id, show = true) {
  const m = $(id);
  if (!m) return;
  m.classList.toggle("active", show);
  m.setAttribute("aria-hidden", String(!show));
  document.body.style.overflow = show ? "hidden" : "";
}
const openModal = id => toggleModal(id, true);
const closeModal = id => toggleModal(id, false);

// Toast Helper
function showToast(msg) {
  const t = $("toast"), m = $("toast-message");
  if (!t || !m) return;
  m.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 4000);
}

// Admin UI & Auth
function updateAdminUI() {
  $("open-cms-btn")?.classList.toggle("hidden", !isAdmin);
  if ($("admin-login-btn")) $("admin-login-btn").textContent = isAdmin ? "Admin Logout" : "Admin Login";
  renderBlogFeed();
}

function handleAdminAuth() {
  if (isAdmin) {
    localStorage.removeItem("isAdmin");
    location.reload();
  } else openModal("login-modal");
}

$("login-form")?.addEventListener("submit", e => {
  e.preventDefault();
  if ($("login-email").value.trim().toLowerCase() === adminEmail.toLowerCase() && $("login-password").value.trim() === adminPassword) {
    localStorage.setItem("isAdmin", "true");
    location.reload();
  } else alert("Invalid admin email or password.");
});

// CMS & Articles
function initCMS() {
  const saved = localStorage.getItem("blog_posts");
  articles = saved ? JSON.parse(saved) : [...PRESEEDED_ARTICLES];
  renderBlogFeed();
}

function saveArticles() {
  if (!isAdmin) return alert("Access Denied: You must be logged in as admin to modify blog posts.");
  localStorage.setItem("blog_posts", JSON.stringify(articles));
}

function deleteArticle(id) {
  if (!isAdmin) return alert("Access Denied: You must be logged in as admin to delete blog posts.");
  if (!confirm("Are you sure you want to delete this article from the clinical blog feed?")) return;
  articles = articles.filter(a => a.id !== id);
  saveArticles();
  renderBlogFeed();
  showToast("Article deleted successfully.");
}

function setFilter(cat) {
  currentFilter = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-filter") === cat));
  renderBlogFeed();
}

function renderBlogFeed() {
  const feed = $("blog-feed");
  if (!feed) return;
  const filtered = currentFilter === "all" ? articles : articles.filter(a => a.category.toLowerCase() === currentFilter.toLowerCase());
  if (!filtered.length) {
    feed.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--color-bg); border-radius: var(--radius-md); border: 1px dashed var(--color-border);"><p>No articles found in this category.</p><button class="btn btn-outline-primary" onclick="setFilter('all')">Show All Articles</button></div>`;
    return;
  }
  feed.innerHTML = filtered.map(p => `
    <article class="blog-card" data-id="${p.id}">
      <div style="padding: 1.25rem 1.75rem 0;"><span class="section-tag" style="margin-bottom:0;">${p.category}</span></div>
      <div class="blog-body">
        <div class="blog-meta"><span>📅 ${p.date}</span><span>⏱️ ${p.readTime}</span></div>
        <h3 class="blog-title">${p.title}</h3>
        <p class="blog-excerpt">${p.excerpt}</p>
        <div class="blog-footer">
          <button class="read-btn" onclick="openArticle('${p.id}')">Read Full Post →</button>
          <div class="cms-card-actions ${isAdmin ? '' : 'hidden'}">
            <button class="btn-mini" onclick="editArticle('${p.id}')" title="Edit Article">✏️ Edit</button>
            <button class="btn-mini btn-delete" onclick="deleteArticle('${p.id}')" title="Delete Article">🗑️</button>
          </div>
        </div>
      </div>
    </article>`).join("");
}

function openArticle(id) {
  const p = articles.find(a => a.id === id);
  if (!p) return;
  $("post-reader-body").innerHTML = `
    <header class="post-reader-header">
      <span class="post-reader-tag">${p.category}</span>
      <h1 class="post-reader-title">${p.title}</h1>
      <div class="post-reader-meta"><span>By Dr. Pankaj Saini</span> • <span>${p.date}</span> • <span>${p.readTime}</span></div>
    </header>
    <div class="post-reader-text">${p.content.split("\n").map(l => l.trim()).filter(Boolean).map(l => `<p>${l}</p>`).join("")}</div>`;
  openModal("post-modal");
}

function openCMSModal(id = null) {
  const p = id && articles.find(a => a.id === id);
  $("cms-modal-title").textContent = p ? "✏️ Edit CMS Article" : "✏️ Create New Article (CMS)";
  $("cms-form").reset();
  const fields = { "cms-post-id": p?.id || "", "cms-title": p?.title || "", "cms-category": p?.category || "Hair Care", "cms-read-time": p?.readTime || "4 min read", "cms-thumbnail": p?.image || "doctor_photo.jpg", "cms-excerpt": p?.excerpt || "", "cms-content": p?.content || "" };
  Object.entries(fields).forEach(([k, v]) => $(k).value = v);
  openModal("cms-modal");
}
const editArticle = id => openCMSModal(id);

function openServiceModal(title) {
  const info = SERVICE_DETAILS[title];
  if (!info) return;
  $("service-modal-body").innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <span style="font-size: 3rem; display: inline-block; margin-bottom: 0.5rem;">${info.icon}</span>
      <h2 style="font-size: 1.85rem;">${title}</h2>
      <p style="color: var(--color-accent); font-weight: 600;">${info.subtitle}</p>
    </div>
    <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text); margin-bottom: 1.5rem;">${info.text}</p>
    <h4 style="font-size: 1rem; margin-bottom: 0.75rem;">Key Clinical Capabilities:</h4>
    <ul class="service-list" style="margin-bottom: 0;">${info.highlights.map(h => `<li>${h}</li>`).join("")}</ul>`;
  openModal("service-modal");
}

// # ponytail: reuse blog modal (#post-modal) for technology read-more pop-up
function openTechModal(title) {
  const t = TECH_DETAILS[title];
  if (!t) return;
  $("post-reader-body").innerHTML = `
    <header class="post-reader-header">
      <span class="post-reader-tag">${t.category}</span>
      <h1 class="post-reader-title">${t.icon} ${title}</h1>
      <div class="post-reader-meta"><span>Dr. Pankaj Saini</span> • <span>Pankaj Hospital, Jind</span></div>
    </header>
    <div class="post-reader-text"><p>${t.content}</p></div>`;
  openModal("post-modal");
}

// Global Event Listeners & Delegation
document.addEventListener("click", e => {
  if (e.target.matches(".modal-close")) closeModal(e.target.closest(".modal-overlay")?.id);
  else if (e.target.classList.contains("modal-overlay")) closeModal(e.target.id);
  else if (e.target.closest(".filter-btn")) setFilter(e.target.closest(".filter-btn").dataset.filter);
});

$("theme-toggle")?.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  $("theme-toggle").textContent = next === "dark" ? "☀️" : "🌙";
});

$("menu-toggle")?.addEventListener("click", () => $("nav-links")?.classList.toggle("active"));
["nav-book-btn", "hero-book-btn"].forEach(id => $(id)?.addEventListener("click", () => openModal("phone-modal")));
$("admin-login-btn")?.addEventListener("click", handleAdminAuth);
$("open-cms-btn")?.addEventListener("click", () => openCMSModal());

$("cms-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const id = $("cms-post-id").value, title = $("cms-title").value.trim(), category = $("cms-category").value;
  const readTime = $("cms-read-time").value.trim(), image = $("cms-thumbnail").value;
  const excerpt = $("cms-excerpt").value.trim(), content = $("cms-content").value.trim();
  if (!title || !excerpt || !content) return alert("Please fill in all required fields.");

  const data = { title, category, readTime, image, excerpt, content };
  if (id) {
    const idx = articles.findIndex(a => a.id === id);
    if (idx !== -1) articles[idx] = { ...articles[idx], ...data };
    showToast("Article updated successfully!");
  } else {
    articles.unshift({ ...data, id: "post-" + Date.now(), date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }), createdAt: Date.now() });
    showToast("New article published to blog!");
  }
  saveArticles();
  renderBlogFeed();
  closeModal("cms-modal");
});

// # ponytail: DOM reordering circular carousel (one-way leftward slide, no rewind animation)
function initCircularSlider(id) {
  const grid = document.getElementById(id);
  if (!grid) return;
  setInterval(() => {
    const cards = grid.querySelectorAll(".service-card");
    if (cards.length <= 1) return;
    cards.forEach(c => c.style.transform = "translateX(-100%)");
    setTimeout(() => {
      cards.forEach(c => {
        c.style.transition = "none";
        c.style.transform = "translateX(0%)";
      });
      grid.appendChild(grid.firstElementChild);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          cards.forEach(c => c.style.transition = "");
        });
      });
    }, 750);
  }, 5000);
}

// Init
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("config.json"), config = await res.json();
    if (config.adminEmail) adminEmail = config.adminEmail;
    if (config.adminPassword) adminPassword = config.adminPassword;
  } catch (e) { console.error("Failed to load config.json:", e); }
  updateAdminUI();
  initCMS();
  initCircularSlider("services-grid");
  initCircularSlider("technologies-grid");
});
