export function renderTopNav(activePage) {
  const navRoot = document.getElementById("nav-root");
  if (!navRoot) return;

  const items = [
    { key: "home", href: "../", label: "站点入口" },
    { key: "first-pr", href: "../first-pr/", label: "First PR 页面" },
    { key: "product-board", href: "../product-board/", label: "Product Board 页面" },
  ];

  const links = items
    .map((item) => {
      const activeClass = item.key === activePage ? "active" : "";
      return `<li class="nav-item"><a class="nav-link ${activeClass}" href="${item.href}">${item.label}</a></li>`;
    })
    .join("");

  navRoot.innerHTML = `<ul class="nav nav-tabs">${links}</ul>`;
}

export async function loadTextFile(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }
  return response.text();
}

export function parseMarkdownList(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
}