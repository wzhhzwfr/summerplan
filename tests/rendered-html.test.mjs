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

test("server-renders the complete practice and outreach outcome", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>林海相依｜盐城湿地实践与港城护水行动<\/title>/,
  );
  assert.match(html, /三张港城照片，三种身边水环境/);
  assert.match(html, /把实践收获做成一份数字成果/);
  assert.match(html, /校园周边河道｜从身边小河开始/);
  assert.match(html, /连云港小微水体护水构想/);
  assert.match(html, /源头减量/);
  assert.match(html, /生态净化/);
  assert.match(html, /沿海或感潮半咸水/);
  assert.match(html, /95\.6%/);
  assert.match(html, /0\.12 mg\/L/);
  assert.match(html, /48\.6%/);
  assert.match(html, /水质指标互动展示/);
  assert.match(html, /从盐城湿地出发/);
  assert.doesNotMatch(html, /一段必须说清的方法边界/);
  assert.doesNotMatch(html, /这只是面向课程展示/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
});

test("keeps the indicator tool, positive outcomes and metadata wired", async () => {
  const [page, tool, layout, readme] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/WaterReferenceTool.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /import WaterReferenceTool from "\.\/WaterReferenceTool"/);
  assert.match(page, /<WaterReferenceTool \/>/);
  assert.match(page, /水环境宣传网页/);
  assert.match(tool, /^"use client";/);
  assert.match(tool, /湖泊 \/ 水库/);
  assert.match(tool, /waterType === "lake" \? 0\.05 : 0\.2/);
  assert.match(tool, /输入数值，看看它与参考线的关系/);
  assert.match(layout, /\/og-governance\.png/);
  assert.match(readme, /监测维护—公众参与/);

  await access(new URL("../public/og-governance.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
