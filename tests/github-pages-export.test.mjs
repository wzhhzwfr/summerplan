import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the full outcome page for GitHub Pages", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.match(html, /连云港小微水体低动力协同治理参考方案/);
  assert.match(html, /三张港城照片，三种身边水环境/);
  assert.match(html, /两份盐城样品未满足规范保存/);
  assert.match(html, /WaterReferenceTool-[^\"]+\.js/);
  assert.match(html, /https:\/\/summerplan\.255515\.xyz\/og-governance\.png/);

  await access(new URL("../assets", import.meta.url));
  await access(new URL("../museum-team.jpg", import.meta.url));
  await access(new URL("../lyg-coast.jpg", import.meta.url));
  await access(new URL("../campus-dragon-boat.jpg", import.meta.url));
  await access(new URL("../campus-river.jpg", import.meta.url));
  assert.equal(
    await readFile(new URL("../CNAME", import.meta.url), "utf8"),
    "summerplan.255515.xyz\n",
  );
});
