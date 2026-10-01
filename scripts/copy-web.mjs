// Copies the web app into www/ for Capacitor (webDir) and adds the Capacitor
// runtime script so native plugins (text-to-speech) are reachable from app.js.
// The repo's index.html stays a plain browser app; only www/ gets the runtime.
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const out = "www";
rmSync(out, { recursive: true, force: true });
mkdirSync(`${out}/js`, { recursive: true });
for (const dir of ["css", "fonts", "js"]) cpSync(dir, `${out}/${dir}`, { recursive: true });
cpSync("node_modules/@capacitor/core/dist/capacitor.js", `${out}/js/capacitor.js`);

const html = readFileSync("index.html", "utf8");
const tag = '<script src="js/capacitor.js"></script>\n';
if (!html.includes('<script src="js/deck.js">')) throw new Error("index.html: deck.js script tag not found");
writeFileSync(`${out}/index.html`, html.replace('<script src="js/deck.js">', tag + '<script src="js/deck.js">'));
console.log("copied web app to www/");
