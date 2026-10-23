import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

const order = [
  "wake-me-gps",
  "stoicequilibrium",
  "lumen",
  "draftline",
  "hearth",
  "vesper-counsel",
  "slot",
  "pathmark",
];

test("projects stay in the published order", () => {
  const ids = [...read("src/content/projects.ts").matchAll(/^    id: "([^"]+)",$/gm)].map((match) => match[1]);
  assert.deepEqual(ids, order);
});

test("the practice section names the work", () => {
  const source = read("src/content/messages.ts");
  const start = source.indexOf('practice: "Practice"');
  const english = source.slice(start, source.indexOf("workTitle:", start));
  assert.match(english, /title: "Design systems"/);
  assert.match(english, /title: "Product interfaces"/);
  assert.match(english, /title: "Quality in the release"/);
  assert.equal(source.includes("Oficio"), false);
  for (const banned of ["webhook", "idempotency", "credit balance", "video token"]) {
    assert.equal(english.toLowerCase().includes(banned), false, banned);
  }
  assert.match(source, /practice: "Práctica"/);
});

test("the site copy does not freelance or wear the confidentiality banner", () => {
  const messages = read("src/content/messages.ts");
  const projects = read("src/content/projects.ts");
  const banner = "whose confidentiality policy does not allow the real product to be shown";
  assert.equal(messages.toLowerCase().includes("freelance"), false);
  assert.equal(messages.includes(banner), false);
  assert.equal(read("README.md").includes(banner), false);
  const personal = projects.slice(projects.indexOf('id: "wake-me-gps"'), projects.indexOf('id: "lumen"'));
  assert.equal(personal.includes("portfolio version of work that cannot be shown"), false);
  assert.equal(
    projects.split("portfolio version of work that cannot be shown").length - 1,
    1,
  );
});

test("highlights default to all", () => {
  assert.match(read("src/app/projects/page.tsx"), /topic \?\? params\.tema \?\? "all"/);
});

test("external links set rel with target blank", () => {
  const files = ["src/components/ProjectCard.tsx", "src/components/HomeView.tsx", "src/components/ContactView.tsx"];
  for (const file of files) {
    const lines = read(file).split(/\r?\n/);
    lines.forEach((line, index) => {
      if (!line.includes("_blank")) return;
      const nearby = lines.slice(Math.max(0, index - 2), index + 1).join("\n");
      assert.match(nearby, /noopener noreferrer/, file);
    });
  }
});
