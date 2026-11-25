import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Your spreadsheet is gone. It filed for emancipation.";

// Gate from RULES.txt: entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. The check runs before anything is written.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = entry.trim();
if (text.length < 1 || text.length > 140) {
  throw new Error(`gate: entry must be 1-140 chars, got ${text.length}`);
}
if (!text.trim()) {
  throw new Error("gate: entry must not be only whitespace");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} chars)`);
