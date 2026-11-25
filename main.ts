// Monday Morning Punchlines — one-line entry.
// Writes a single joke (one line, at most 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt, defaulting to /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke: string =
  "Monday morning I woke up a brand-new person. Tragically, the new person had the same job, the same boss, and a 9 a.m. standup.";

if (joke.length === 0) {
  throw new Error("entry line must not be empty");
}
if (joke.length > 200) {
  throw new Error(`entry line is ${joke.length} characters; the limit is 200`);
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");

console.log(`wrote ${joke.length}-character entry to ${join(outDir, "entry.txt")}`);
