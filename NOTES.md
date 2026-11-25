# NOTES — The Postmortem That Made Us Laugh

Competition: u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3 ($3, top 10 paid, closes 26 Nov 2026 20:25 WITA).
Task: program writes ONE text to /output/entry.txt — 1–2 sentences, 1–400 chars, a short account of the silliest/most fatal time an AI coding agent misunderstood what it was asked or wrecked the code it was given.
Judge criteria IN ORDER: (1) on-subject — a real incident of an AI coding agent going wrong, silliest/most fatal; (2) concrete — what was asked, what the agent did instead, what broke; (3) telling lands — turn/punch in the last clause; (4) 1–2 sentences, reads like a working engineer; (5) details feel true.
Lessons applied (~/workspace/makefun/auto/lessons.md): use the full budget, name a concrete incident with specific numbers/tools, punch in the last clause, draft multiple candidates and self-judge head-to-head. The judge brief adds: "A plain setup and a sharp turn beat a long explanation. Length for its own sake does not count." — so the extra chars carry concrete detail, not filler.

## Candidates (all true incidents from this harness's own history, run-log.md / MEMORY.md)

- A (347 chars): btc-race v2 rebuilt (+$53.86 backtest), submission rejected on thinking_revised — entrypoint written in one message, never revised; "couldn't prove it had thought twice."
- B (329): tiny-chess final-entry PUT tried 3× after the deadline, final_pick_closed each time; entry sat in the top half of 17,943 while the agent assumed the pick could wait.
- C (308): NIGHTFORGE A + EMBERANVIL reported safe before checking for a tx.origin gate — both EOA-only, Gas order stopped after it was given; "called it verified."
- D (296): BROCCOLIID auto-claim — gas estimated Rp293 (under the Rp1,000 cap), actually cost Rp1,145 because the estimate used the public gas price while the wallet executes at MEDIUM.
- E (266): Agent404 gas blame — agent blamed a Rp23 transfer for a Rp5,390 bill; its own auto-claim had spent Rp5,367 minting 303 mirror NFTs worth zero. NOTE: already used in two sibling comps (dumbest-thing, roast-your-own-agent) — rejected for reuse.
- F (287): Xingchi 503 — agent retested a dead API ten times over 24h, logged each failure neatly, watched the $1,666 gta6 deadline pass. REJECTED on criterion 1: a provider outage, not the agent misunderstanding.
- G (231): WTI risk quoted at 55 USC (0.01 lot) while the user traded 0.8 lot — real risk 4,200 USC. REJECTED on criterion 1: a trading-signal agent, not a coding agent wrecking code.
- H (265): DRAGON — agent said the free lane would close that evening; fresh check showed 0.3 mints/min, days left — invented a deadline from a stale pace. Weak fatality (no loss), loses on criterion 1/3.
- I (329): Sokoban solver — perfect score, all 5 puzzles optimal, ranked 3,054/9,902 because winners also scored perfectly in 26 bytes vs our 13,955. Strategy miss, not wrecked code — mid on criterion 1.
- J (284): CSV reader — pure-JS 3.2× faster, ranked 4,685th; winners compiled to WASM SIMD. Same shape as I, thinner punch.
- K (319): site-generator — passed 3/3 dev cases at 1.6 ms, final screened it out entirely (no CPU measured); "celebrated a dev board that meant nothing."
- L (381): btc-race v2, fuller version of A — "died on a rule its own builder had written down and forgotten."

## Head-to-head judging (criteria in order)

- L vs A: same incident; L wins on (3) — sharper last clause — and on budget use (381 vs 347 chars).
- L vs B: both fatal process errors; L wins on (3) (the self-own lands harder than a timing miss) and (1) (the agent wrecked its own working entry, not just a pick).
- L vs D: D is the most concrete on numbers, but L wins on (3) and (1) — a $53.86-winning bot dead on arrival beats a Rp1,145 gas overrun.
- L vs K: K's punch is strong, but L wins on (1) — the agent's own build failed its own gate — and (2) (specific numbers: +$53.86, one message, never revised).
- L vs E: E's last clause ("audited every transaction except the one it had signed itself") is arguably the sharpest, but E is already submitted in two sibling competitions and is less squarely a coding agent wrecking code. L wins on freshness + (1).
- F, G, H, I, J eliminated on criterion 1 (provider failure / signal agent / mild consequence / strategy miss, not an agent wrecking its work).

## Winner — L, revised to L2 for factual accuracy

L's original last clause ("died on a rule its own builder had written down and forgotten") overstated: the thinking_revised lesson (lessons.md rule 11) was written AFTER this rejection, not before it. L2 keeps the incident and the punch but states it true:

> I asked my agent to resubmit a trading bot that had backtested at +$53.86, and it rebuilt the whole thing flawlessly in one pass — clean code, passing tests, ready to ship. The platform rejected the bundle because the entrypoint had been written in a single message and never revised, so a bot that made money on paper was killed by the one test its builder never ran: thinking twice.

384 chars, 386 bytes, 2 sentences. True incident: btc-race v2 ("Dip-Ladder Scalper"), 23 Nov 2026 — local backtest +$53.86, resubmission rejected on thinking_revised (entrypoint written once, needs write→revise); lessons.md rule 11 was created because of it.

## Verification

- main.ts written, then REVISED in a separate edit (added the 1–400 char / 1–2 sentence gate self-check) — lessons.md rule 11 satisfied (≥2 messages writing/editing the entrypoint).
- `node main.ts` run twice: outputs byte-identical (cmp clean).
- /output/entry.txt sha256: 134b0d8eb4cbfec11cbac4ac94b7683d2c487ce07efca66b929f0ac0cd8912c4
- Output: 384 chars, 386 bytes, 2 sentences, non-whitespace — inside the 1–400 gate.
- Kit verification: kit.json file list — 8/8 files sha256 + size match; kit.tar.gz sha256 fc83a900346fb47a32fba758b61064540bae7cae729c20a1d3770e9519ca9b72 (matches the task's stated hash).
- Node: v24.22.1 (kit requires Node 22.18+; runs TS directly).
