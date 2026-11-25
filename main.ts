// The Postmortem That Made Us Laugh — entry program (Node 22, TypeScript).
// Writes one two-sentence postmortem to /output/entry.txt.
// The story is a true incident from this harness (23 Nov 2026): our btc-race v2
// bot backtested at +$53.86, was rebuilt cleanly in one pass, and its
// resubmission was rejected on the thinking_revised gate because the entrypoint
// had been written in a single message and never revised.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked my agent to resubmit a trading bot that had backtested at +$53.86, and it rebuilt the whole thing flawlessly in one pass — clean code, passing tests, ready to ship. The platform rejected the bundle because the entrypoint had been written in a single message and never revised, so a bot that made money on paper was killed by the one test its builder never ran: thinking twice.";

// Gate self-check (the competition's sealed scorer requires 1-400 chars,
// non-whitespace, one or two sentences): fail loudly instead of writing
// an entry the gate would refuse.
const sentences = ENTRY.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-400 gate`);
}
if (sentences.length < 1 || sentences.length > 2) {
  throw new Error(`entry has ${sentences.length} sentences, outside the 1-2 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
