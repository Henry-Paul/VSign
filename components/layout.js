import { renderHeader } from "./header.js";
import { renderFooter } from "./footer.js";
import { renderFloatingActions } from "./floatingactions.js";

export function renderLayout(content) {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${renderHeader()}
    <main class="main-content">
      ${content}
    </main>
    ${renderFooter()}
    ${renderFloatingActions()}
  `;
}
