import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete practice and governance outcome", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>林海相依｜从盐城湿地观察到港城小微水体治理构想<\/title>/,
  );
  assert.match(html, /两份样品均未送实验室检测/);
  assert.match(html, /连云港小微水体低动力协同治理参考方案/);
  assert.match(html, /源头减量/);
  assert.match(html, /浅水旁路湿地/);
  assert.match(html, /沿海或感潮半咸水/);
  assert.match(html, /95\.6%/);
  assert.match(html, /0\.12 mg\/L/);
  assert.match(html, /48\.6%/);
  assert.match(html, /单指标筛查/);
  assert.match(html, /如果A—D每组只搭1套/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
});

test("keeps the indicator tool, evidence boundary and metadata wired", async () => {
  const [page, tool, layout, readme] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/WaterReferenceTool.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /import WaterReferenceTool from "\.\/WaterReferenceTool"/);
  assert.match(page, /<WaterReferenceTool \/>/);
  assert.match(page, /不代表团队两份水样/);
  assert.match(tool, /^"use client";/);
  assert.match(tool, /湖泊 \/ 水库/);
  assert.match(tool, /waterType === "lake" \? 0\.05 : 0\.2/);
  assert.match(tool, /不构成水质类别判定/);
  assert.match(layout, /\/og-governance\.png/);
  assert.match(readme, /尚未完成场地勘察、工程设计或实测验证/);

  await access(new URL("../public/og-governance.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
