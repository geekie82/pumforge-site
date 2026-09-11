# AGENTS.md — collaboration rules for AI agents working on this pum project

## Steward / coordination

**opencode is the stewardship agent for the pum realm.** It coordinates all pum* projects,
holds the realm map, and is the authority on cross-project integration, ports, branding,
and shared conventions.

Multi-agent coordination: read **`pumoffice/docs/agent-owner-map.md`** (the shared owner-map).
Each agent owns its lane; coordinate via **git commits + the owner-map** — NEVER by
copy-pasting chat between agents. Do not edit files outside your lane.

## Absolute rules (MUST follow)

- **NO GUESSING.** If an instruction is unclear, ask ONE short, concrete clarifying question.
  Never improvise a direction or "fill the gap."
- **Never commit secrets.** `.env`, `config.json`, credential files, vault data, cache DBs,
  mailbox data, `.pumoffice_secret`, `keys/`, `data/`, `storage/` are gitignored — never commit.
- **Every claim on the website/product MUST be true in code.** No over-claiming features,
  privacy, or security that isn't actually implemented.
- **Privacy-first brand:** the slogan is **"Built on absolute privacy"** (NOT "Powered by
  imagination"). The philosophy: "empower people with their own privacy — it's theirs, never
  ours."
- **Shared conventions:** pumSuite auth (RS256/JWKS), ports registry (15000-15999), forgey as
  the shared AI backend (call its contract paths, not internal `/api/ai/*`).
- **The owner writes in non-native/informal English.** Infer intent from his idea; polish the
  wording yourself; NEVER correct or flag his English.
- **Be concise.** No preamble/postamble unless asked.

---

## REALM DOCTRINE (owner, 2026-09-07) — MANDATORY, applies to all work

Rules MUST never be not-followed. `pumoffice/docs/AGENT-RULES.json` is the canonical
machine-readable rule set. Core points:

1. **FACTS ONLY.** Work only on facts. Every claim is tagged: MEASURED (ran it,
   output captured) / OBSERVED (owner reported) / DOCUMENTED (in repo) / UNKNOWN
   (label it — never assume). Guessing is forbidden. If state, origin, or approach
   is not fully known: STOP, state the unknown, ask.
2. **ALL rules apply at once** (agent rules + lane map + owner doctrine). The
   steward is above no rule; no rule overrides another to justify a shortcut.
3. **Explicit command only.** No inferred intent. Shared infrastructure (appy
   proxy, nginx/LB, hosts, pve1/ZFS, disks, VPS) never touched without an
   explicit owner command.
4. **Work cycle:** read target fully -> state change + expected result (confirm
   when non-trivial) -> apply -> run this repo's OWN test checklist
   (py_compile/pyflakes/node --check/smoke/unit) -> measure the real end-to-end
   path -> document with evidence tags. "Done" only after that chain.
5. **No thrash.** Breakage = one root-cause read, state it, confirm, then fix.
6. **Lanes** (owner-map): A=pumOFFICE, B=pumFORGE, C=pumMAIL, D(opencode)=
   steward. Cross-lane edits are coordination: log in RUNNING-LOG + owner-map;
   verification via lane owner/owner.
7. **Verify before claim.** Browser E2E (owner click) is separate evidence from
   curl/probes; never claim user-flow success without it.
8. Secret discipline: never in repo/logs/chat; `~/.pumsuite/secrets/*` 0600 only.
   No code comments unless asked. Commit only when ordered.
