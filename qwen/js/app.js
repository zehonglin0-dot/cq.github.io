function buildList(el, items) {
  if (!el) return;
  el.innerHTML = (items || []).map(item => `<li>${item}</li>`).join("");
}

function buildFlow(el, items) {
  if (!el) return;
  let html = "";
  (items || []).forEach((item, index) => {
    html += `<span class="node">${item}</span>`;
    if (index < items.length - 1) {
      html += `<span class="arrow">↓</span>`;
    }
  });
  el.innerHTML = html;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined) el.innerHTML = value;
}

function getCurrentLang() {
  return localStorage.getItem("lang") || "zh";
}

function getImagePath(fileName, lang) {
  return `./images/${lang}/${fileName}`;
}

function updateLocalizedImages(lang) {
  document.querySelectorAll(".doc-image").forEach(img => {
    const fileName = img.dataset.img;
    if (fileName) {
      img.src = getImagePath(fileName, lang);
    }
  });
}

function applyLanguage(lang) {
  const t = window.i18n?.[lang];
  if (!t) return;

  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  setText("brandTitle", t.brandTitle);
  setText("brandSub", t.brandSub);
  setHTML("heroTitle", t.heroTitleHtml);

  setText("btnTop", t.btnTop);
  setText("btnPdf", t.btnPdf);
  setText("btnHtml", t.btnHtml);

  setText("tocTitle", t.tocTitle);
  setText("tocPill", t.tocPill);
  setText("toc-files", t.tocFiles);
  setText("toc-1", t.toc1);
  setText("toc-2", t.toc2);
  setText("toc-3", t.toc3);
  setText("toc-4", t.toc4);
  setText("toc-5", t.toc5);
  setText("toc-6", t.toc6);
  setText("toc-7", t.toc7);
  setText("toc-8", t.toc8);
  setText("toc-errors", t.tocErrors);
  setText("toc-flow", t.tocFlow);

  setText("sec-files-title", t.secFilesTitle);
  setText("sec-files-desc", t.secFilesDesc);
  buildList(document.getElementById("sec-files-list"), t.secFilesList);

  setText("sec-1-title", t.sec1Title);
  setText("sec-1-sub1", t.sec1Sub1);
  setText("sec-1-desc", t.sec1Desc);
  setText("f1-label-1", t.f1Label1);
  setText("f1-label-2", t.f1Label2);
  setText("f1-value-2", t.f1Value2);
  setText("f1-label-3", t.f1Label3);
  setText("sec-1-note", t.sec1Note);
  setText("sec-1-sub2", t.sec1Sub2);
  buildList(document.getElementById("sec-1-steps"), t.sec1Steps);

  setText("sec-2-title", t.sec2Title);
  setText("sec-2-sub1", t.sec2Sub1);
  setText("sec-2-desc", t.sec2Desc);
  setText("sec-2-sub2", t.sec2Sub2);
  setText("sec-2-path", t.sec2Path);
  buildList(document.getElementById("sec-2-steps"), t.sec2Steps);
  setText("sec-2-sub3", t.sec2Sub3);
  buildList(document.getElementById("sec-2-status"), t.sec2Status);
  setText("sec-2-note", t.sec2Note);
  buildList(document.getElementById("sec-2-pages"), t.sec2Pages);

  setText("sec-3-title", t.sec3Title);
  setText("sec-3-note-top", t.sec3NoteTop);
  setText("sec-3-sub1", t.sec3Sub1);
  setText("sec-3-path1", t.sec3Path1);
  setText("sec-3-th1", t.sec3Th1);
  setText("sec-3-th2", t.sec3Th2);
  setText("sec-3-r1c1", t.sec3r1c1);
  setText("sec-3-r1c2", t.sec3r1c2);
  setText("sec-3-r2c1", t.sec3r2c1);
  setText("sec-3-r2c2", t.sec3r2c2);
  setText("sec-3-r3c1", t.sec3r3c1);
  setText("sec-3-r3c2", t.sec3r3c2);
  setText("sec-3-r4c1", t.sec3r4c1);
  setText("sec-3-r4c2", t.sec3r4c2);
  setText("sec-3-r5c1", t.sec3r5c1);
  setText("sec-3-r5c2", t.sec3r5c2);
  setText("sec-3-r6c1", t.sec3r6c1);
  setText("sec-3-r6c2", t.sec3r6c2);
  setText("sec-3-note1", t.sec3Note1);
  setText("sec-3-sub2", t.sec3Sub2);
  setText("sec-3-desc2", t.sec3Desc2);
  buildList(document.getElementById("sec-3-steps2"), t.sec3Steps2);
  setText("sec-3-path2", t.sec3Path2);
  setText("sec-3-note2", t.sec3Note2);

  setText("sec-4-title", t.sec4Title);
  setText("sec-4-sub1", t.sec4Sub1);
  setText("sec-4-desc", t.sec4Desc);
  setText("sec-4-sub2", t.sec4Sub2);
  setText("sec-4-path", t.sec4Path);
  buildList(document.getElementById("sec-4-steps"), t.sec4Steps);
  setText("sec-4-note", t.sec4Note);

  setText("sec-5-title", t.sec5Title);
  setText("sec-5-sub1", t.sec5Sub1);
  setText("sec-5-path1", t.sec5Path1);
  buildList(document.getElementById("sec-5-steps1"), t.sec5Steps1);
  setText("sec-5-sub2", t.sec5Sub2);
  buildList(document.getElementById("sec-5-steps2"), t.sec5Steps2);
  setHTML("sec-5-note1", t.sec5Note1);
  setHTML("sec-5-note2", t.sec5Note2);
  setText("sec-5-sub3", t.sec5Sub3);
  if (t.sec5Steps3 && t.sec5Steps3.length >= 4) {
  setText("sec-5-step3-1", t.sec5Steps3[0]);
  setText("sec-5-step3-2", t.sec5Steps3[1]);
  setText("sec-5-step3-3", t.sec5Steps3[2]);
  setText("sec-5-step3-4", t.sec5Steps3[3]);
}

  setText("sec-6-title", t.sec6Title);
  setText("sec-6-sub1", t.sec6Sub1);
  buildList(document.getElementById("sec-6-steps1"), t.sec6Steps1);
  setText("sec-6-sub2", t.sec6Sub2);
  setText("sec-6-f1", t.sec6f1);
  setText("sec-6-v1", t.sec6v1);
  setText("sec-6-f2", t.sec6f2);
  setText("sec-6-v2", t.sec6v2);
  setText("sec-6-f3", t.sec6f3);
  setText("sec-6-v3", t.sec6v3);
  setText("sec-6-f4", t.sec6f4);
  setText("sec-6-v4", t.sec6v4);
  setText("sec-6-note", t.sec6Note);

  setText("sec-7-title", t.sec7Title);
  setText("sec-7-sub1", t.sec7Sub1);
  setText("sec-7-path1", t.sec7Path1);
  buildList(document.getElementById("sec-7-steps1"), t.sec7Steps1);
  setText("sec-7-sub2", t.sec7Sub2);
  setText("sec-7-path2", t.sec7Path2);
  buildList(document.getElementById("sec-7-steps2"), t.sec7Steps2);

  setText("sec-8-title", t.sec8Title);
  setText("sec-8-sub1", t.sec8Sub1);
  buildList(document.getElementById("sec-8-steps1"), t.sec8Steps1);
  setText("sec-8-sub2", t.sec8Sub2);
  setText("sec-8-path1", t.sec8Path1);
  buildList(document.getElementById("sec-8-steps2"), t.sec8Steps2);
  setText("sec-8-sub3", t.sec8Sub3);
  setText("sec-8-path2", t.sec8Path2);
  buildList(document.getElementById("sec-8-steps3"), t.sec8Steps3);

  setText("sec-errors-title", t.secErrorsTitle);
  setText("sec-errors-th1", t.secErrorsTh1);
  setText("sec-errors-th2", t.secErrorsTh2);
  setText("err-r1c1", t.errr1c1);
  setText("err-r1c2", t.errr1c2);
  setText("err-r2c1", t.errr2c1);
  setText("err-r2c2", t.errr2c2);
  setText("err-r3c1", t.errr3c1);
  setText("err-r3c2", t.errr3c2);
  setText("err-r4c1", t.errr4c1);
  setText("err-r4c2", t.errr4c2);
  setHTML("sec-errors-note", t.secErrorsNote);

  setText("sec-flow-title", t.secFlowTitle);
  buildFlow(document.getElementById("sec-flow-items"), t.secFlowItems);

  setText("footerText", t.footer);

  updateLocalizedImages(lang);
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.toggle("active", sec.id === sectionId);
  });

  document.querySelectorAll(".toc-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.target === sectionId);
  });

  localStorage.setItem("activeSection", sectionId);

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.scrollTop = 0;
  }
}

function expandImage(src, alt = "") {
  const overlay = document.createElement("div");
  overlay.className = "img-expanded-overlay";

  const wrap = document.createElement("div");
  wrap.className = "img-expanded-wrap";

  const img = document.createElement("img");
  img.className = "img-expanded";
  img.src = src;
  img.alt = alt;

  const closeBtn = document.createElement("button");
  closeBtn.className = "img-close";
  closeBtn.type = "button";
  closeBtn.innerHTML = "&times;";

  function close() {
    overlay.remove();
    document.removeEventListener("keydown", escHandler);
  }

  function escHandler(e) {
    if (e.key === "Escape") close();
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", escHandler);

  wrap.appendChild(img);
  wrap.appendChild(closeBtn);
  overlay.appendChild(wrap);
  document.body.appendChild(overlay);
}

function exportPDF() {
  window.print();
}

function exportHtml() {
  const html = document.documentElement.outerHTML;
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "qianyi-guide.html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "zh";
  const savedSection = localStorage.getItem("activeSection") || "sec-files";

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  document.querySelectorAll(".toc-btn").forEach(btn => {
    btn.addEventListener("click", () => showSection(btn.dataset.target));
  });

  document.querySelectorAll(".nav-prev, .nav-next").forEach(btn => {
    btn.addEventListener("click", () => showSection(btn.dataset.go));
  });

  document.getElementById("btnTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("btnPdf")?.addEventListener("click", exportPDF);
  document.getElementById("btnHtml")?.addEventListener("click", exportHtml);

  document.addEventListener("click", (e) => {
    const img = e.target.closest(".doc-image");
    if (img) {
      expandImage(img.src, img.alt || "");
    }
  });

  applyLanguage(savedLang);
  showSection(savedSection);
});