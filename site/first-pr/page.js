import { loadTextFile, parseMarkdownList, renderTopNav } from "../shared/js/common.js";

async function initFirstPrPage() {
  renderTopNav("first-pr");

  const listEl = document.getElementById("reflection-list");
  const emptyEl = document.getElementById("reflection-empty");

  try {
    const markdown = await loadTextFile("../../baseline/FIRST_PR_REFLECTIONS.md");
    const reflections = parseMarkdownList(markdown);

    if (reflections.length === 0) {
      emptyEl?.classList.remove("d-none");
      return;
    }

    reflections.forEach((item) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = item;
      listEl?.appendChild(li);
    });
  } catch (error) {
    if (emptyEl) {
      emptyEl.classList.remove("d-none");
      emptyEl.textContent = `加载失败：${error.message}`;
    }
  }
}

initFirstPrPage();