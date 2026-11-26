// One Star, Five Stars for the Food — entry program.
//
// Writes a single alien-tourist one-star review of Earth (with a real
// compliment about the food) to /output/entry.txt, exactly as the gate
// requires: UTF-8 text, 1 to 200 characters, not only white space, one
// sentence, no trailing newline.
//
// The line (197 characters) was chosen from 8 candidates compared
// head-to-head against the judge brief — see
// ../u-po-pu-one-star-five-stars-for-the-food-f9166ee7-candidates.md.
// Angle: Earth rations food by height (kids' menu); the alien shrinks
// itself to order off it. Fresh in a 684-entry field saturated with
// dumplings, tacos, noodles, gravity, glowing rectangles and queues.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star: Earth rations food by height \u2014 small humans get small plates, as if hunger were measured in centimetres \u2014 but the chicken nuggets were so good I shrank myself to order off the kids' menu.";

// Runtime mirror of the sealed gate: refuse to write anything invalid
// rather than submit a file the judge would score 0.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the 1-200 character gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
