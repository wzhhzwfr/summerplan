import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the full outcome page for GitHub Pages", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.match(html, /连云港小微水体护水构想/);
  assert.match(html, /三张港城照片，三种身边水环境/);
  assert.match(html, /把实践收获做成一份数字成果/);
  assert.match(html, /WaterReferenceTool-[^\"]+\.js/);
  assert.match(html, /ScrollButton-[^\"]+\.js/);
  assert.match(html, /盐城与连云港：公开数据对照/);
  assert.doesNotMatch(html, /href=\"#/);
  assert.match(html, /https:\/\/summerplan\.255515\.xyz\/og-governance\.png/);

  await access(new URL("../assets", import.meta.url));
  await access(new URL("../museum-team.jpg", import.meta.url));
  await access(new URL("../lyg-coast.jpg", import.meta.url));
  await access(new URL("../campus-dragon-boat.jpg", import.meta.url));
  await access(new URL("../campus-river.jpg", import.meta.url));
  await access(new URL("../milu-water.jpg", import.meta.url));
  await access(new URL("../pond-sampling.jpg", import.meta.url));
  assert.equal(
    await readFile(new URL("../CNAME", import.meta.url), "utf8"),
    "summerplan.255515.xyz\n",
  );
});
