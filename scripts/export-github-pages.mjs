import { cp, copyFile, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const domain = "summerplan.255515.xyz";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request(`https://${domain}/`, {
    headers: {
      accept: "text/html",
      host: domain,
      "x-forwarded-host": domain,
      "x-forwarded-proto": "https",
    },
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

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

const html = await response.text();
if (!html.includes("连云港小微水体护水构想")) {
  throw new Error("Static render is missing the governance outcome section");
}

await rm(path.join(root, "assets"), { recursive: true, force: true });
await cp(path.join(root, "dist", "client", "assets"), path.join(root, "assets"), {
  recursive: true,
});

const publicFiles = await readdir(path.join(root, "public"), {
  withFileTypes: true,
});
for (const entry of publicFiles) {
  if (!entry.isFile()) continue;
  await copyFile(
    path.join(root, "public", entry.name),
    path.join(root, entry.name),
  );
}

await mkdir(root, { recursive: true });
await writeFile(path.join(root, "index.html"), html, "utf8");
await writeFile(path.join(root, ".nojekyll"), "", "utf8");
await writeFile(path.join(root, "CNAME"), `${domain}\n`, "utf8");

console.log(`GitHub Pages export created for https://${domain}/`);
