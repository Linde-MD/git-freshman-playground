import { loadTextFile, renderTopNav } from "../shared/js/common.js";

const DEFAULT_COLUMNS = ["Backlog", "In Progress", "Done"];

function parseBoardMarkdown(markdownText) {
  const lines = markdownText.split(/\r?\n/);
  const columns = { Backlog: [], "In Progress": [], Done: [] };
  let current = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line.startsWith("## ")) {
      const name = line.slice(3).trim();
      current = DEFAULT_COLUMNS.includes(name) ? name : null;
      continue;
    }

    if (!current || !line.startsWith("- ")) continue;
    columns[current].push(line.slice(2).trim());
  }

  return columns;
}

function renderBoard(columns) {
  const root = document.getElementById("board-columns");
  const emptyEl = document.getElementById("board-empty");
  if (!root) return;
  root.innerHTML = "";

  let totalCount = 0;

  DEFAULT_COLUMNS.forEach((columnName) => {
    const col = document.createElement("div");
    col.className = "col";

    const card = document.createElement("section");
    card.className = "board-column";

    const title = document.createElement("h3");
    title.textContent = columnName;

    const list = document.createElement("ul");
    list.className = "board-list";

    const items = columns[columnName] || [];
    totalCount += items.length;
    if (items.length === 0) {
      const empty = document.createElement("li");
      empty.className = "board-item text-secondary";
      empty.textContent = "No task yet";
      list.appendChild(empty);
    } else {
      items.forEach((itemText) => {
        const item = document.createElement("li");
        item.className = "board-item";
        item.textContent = itemText;
        list.appendChild(item);
      });
    }

    card.appendChild(title);
    card.appendChild(list);
    col.appendChild(card);
    root.appendChild(col);
  });

  if (emptyEl) {
    if (totalCount === 0) {
      emptyEl.classList.remove("d-none");
    } else {
      emptyEl.classList.add("d-none");
    }
  }
}

async function initProductBoardPage() {
  renderTopNav("product-board");
  try {
    const markdown = await loadTextFile("../../baseline/PRODUCT_BOARD.md");
    const columns = parseBoardMarkdown(markdown);
    renderBoard(columns);
  } catch (error) {
    const root = document.getElementById("board-columns");
    if (root) {
      root.innerHTML = `<div class="col-12"><div class="alert alert-danger">加载失败：${error.message}</div></div>`;
    }
  }
}

initProductBoardPage();