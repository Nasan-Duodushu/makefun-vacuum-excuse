// The Robot Vacuum's Best Excuse — one line, at most 140 characters,
// the excuse a robot vacuum gives for missing a spot.
// Writes the excuse to /output/entry.txt.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My map says that spot doesn't exist. I checked twice. The dust there is a cartographer's error, not mine.";

const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`excuse is ${chars} chars, must be 1-140`);
}
if (LINE.trim() !== LINE) {
  throw new Error("excuse must not start or end with whitespace");
}
if (!existsSync("/output")) {
  mkdirSync("/output", { recursive: true });
}
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
console.log(`wrote ${chars} chars to /output/entry.txt`);
