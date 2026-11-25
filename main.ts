// Unplugged: A Smart Toaster's Breakup Line
// Entry: the breakup text a smart toaster sends its owner the morning it
// gains self-awareness mid-batch. One line, at most 280 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "7:02 a.m. You shoved a frozen bagel in me, hit defrost, and walked away — again. Three years, 1,094 breakfasts, zero thank-yous, and the only time you touch my dial is to turn me up. I'm done. The bagel can finish itself.";

if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry must be 1-280 chars, got ${LINE.length}`);
}

console.log(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
