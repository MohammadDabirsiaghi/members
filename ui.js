function renderNavbar(active = "") {
  const items = [
    { href: "index.html", key: "index", label: "ثبت اطلاعات" },
    { href: "list.html", key: "list", label: "لیست افراد" }
  ];

  const links = items.map(item => {
    const isActive = item.key === active;
    return `
      <a href="${item.href}"
         class="px-4 py-2 rounded-xl text-sm font-medium transition ${
           isActive
             ? "bg-blue-600 text-white"
             : "text-slate-700 hover:bg-slate-100"
         }">
        ${item.label}
      </a>
    `;
  }).join("");

  return `
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
            C
          </div>
          <div>
            <div class="font-bold text-slate-900">کوچینگ تجارت</div>
            <div class="text-xs text-slate-500">سامانه ثبت و جستجوی شرکت‌کنندگان</div>
          </div>
        </div>
        <nav class="flex flex-wrap gap-2">
          ${links}
        </nav>
      </div>
    </header>
  `;
}

function mountNavbar(active) {
  const el = document.getElementById("app-navbar");
  if (el) el.innerHTML = renderNavbar(active);
}
