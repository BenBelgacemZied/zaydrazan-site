import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const client = resolve(dist, "client");
const server = resolve(dist, "server");
const html = await readFile(resolve(root, "web/index.html"), "utf8");
const privacyPage = await readFile(resolve(root, "web/privacy/index.html"), "utf8");
const css = await readFile(resolve(root, "app/globals.css"), "utf8");
const redesign = await readFile(resolve(root, "web/redesign.css"), "utf8");
const js = await readFile(resolve(root, "web/app.js"), "utf8");
const heroBase64 = (await readFile(resolve(root, "web/paris-hero.png"))).toString("base64");
const bookSceneDirectory = resolve(root, "web/book-scenes");
const bookSceneNames = (await readdir(bookSceneDirectory)).filter(name => name.endsWith(".jpg")).sort();
const bookSceneAssets = await Promise.all(bookSceneNames.map(async name => ({
  name,
  base64: (await readFile(resolve(bookSceneDirectory, name))).toString("base64")
})));
const bookSceneEntries = bookSceneAssets.map(asset => `  "/book-scenes/${asset.name}": { type: "image/jpeg", base64: ${JSON.stringify(asset.base64)} }`).join(",\\n");
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="18" fill="#18253f"/><circle cx="23" cy="31" r="15" fill="#4c72de"/><circle cx="41" cy="34" r="15" fill="#f26b5e"/><text x="17" y="37" fill="white" font-family="Arial" font-weight="700" font-size="17">Z</text><text x="36" y="40" fill="white" font-family="Arial" font-weight="700" font-size="17">R</text></svg>`;

await rm(dist, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(resolve(client, "book-scenes"), { recursive: true });
await mkdir(resolve(client, "privacy"), { recursive: true });
await mkdir(server, { recursive: true });
await mkdir(resolve(dist, ".openai"), { recursive: true });
await writeFile(resolve(client, "index.html"), html);
await writeFile(resolve(client, "privacy", "index.html"), privacyPage);
await writeFile(resolve(client, "styles.css"), css);
await writeFile(resolve(client, "redesign.css"), redesign);
await writeFile(resolve(client, "app.js"), js);
await writeFile(resolve(client, "favicon.svg"), favicon);
await cp(resolve(root, "web/paris-hero.png"), resolve(client, "paris-hero.png"));
for (const asset of bookSceneAssets) await cp(resolve(bookSceneDirectory, asset.name), resolve(client, "book-scenes", asset.name));
await cp(resolve(root, ".openai/hosting.json"), resolve(dist, ".openai/hosting.json"));

const worker = `
const files = {
  "/": { type: "text/html; charset=utf-8", body: ${JSON.stringify(html)} },
  "/index.html": { type: "text/html; charset=utf-8", body: ${JSON.stringify(html)} },
  "/privacy": { type: "text/html; charset=utf-8", body: ${JSON.stringify(privacyPage)} },
  "/privacy/": { type: "text/html; charset=utf-8", body: ${JSON.stringify(privacyPage)} },
  "/styles.css": { type: "text/css; charset=utf-8", body: ${JSON.stringify(css)} },
  "/redesign.css": { type: "text/css; charset=utf-8", body: ${JSON.stringify(redesign)} },
  "/app.js": { type: "text/javascript; charset=utf-8", body: ${JSON.stringify(js)} },
  "/paris-hero.png": { type: "image/png", base64: ${JSON.stringify(heroBase64)} },
${bookSceneEntries},
  "/favicon.ico": { type: "image/svg+xml", body: ${JSON.stringify(favicon)} },
  "/favicon.svg": { type: "image/svg+xml", body: ${JSON.stringify(favicon)} }
};
async function handle(request) {
  const path = new URL(request.url).pathname;
  const file = files[path] || (path.includes(".") ? null : files["/"]);
  if (!file) return new Response("Not found", { status: 404 });
  const body = request.method === "HEAD" ? null : file.base64 ? Uint8Array.from(atob(file.base64), char => char.charCodeAt(0)) : file.body;
  return new Response(body, {
    headers: { "content-type": file.type, "cache-control": path === "/" ? "no-cache" : "public, max-age=3600", "x-content-type-options": "nosniff" }
  });
}
export async function fetch(request) { return handle(request); }
export default { fetch: handle };
`;
await writeFile(resolve(server, "index.js"), worker);
console.log("Sites bundle ready: dist/server/index.js");
