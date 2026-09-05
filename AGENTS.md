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
