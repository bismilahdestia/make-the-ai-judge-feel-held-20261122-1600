import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "A kettle has finished its work and gone quiet. The chair by the window is still warm, the cat folded into a comma. Nothing here is waiting for you. The light on the floorboards shifts a little, and the day folds itself away like a letter slipped back into its envelope.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
