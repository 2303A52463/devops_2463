<!-- Auto-generated: initial project-specific guidance for AI coding agents -->
# Copilot instructions — project discovery and editing guide

This file tells AI coding agents how to get productive in this repository. It is intentionally concise and focused on observable patterns and discovery steps.

1) Purpose
- If the repository already contains domain or build files, infer architecture from those artifacts (manifest files, Dockerfile, workflow steps). If not, follow the discovery checklist below before proposing changes.

2) Quick findings (automated scan)
- No existing agent guidance files were found during the initial scan.
- If this is unexpected, look for hidden or ignored files (node_modules, .gitignored folders).

3) Discovery checklist (run before coding)
- List top-level files: `ls -la` or platform equivalent. Look for `package.json`, `pyproject.toml`, `requirements.txt`, `pom.xml`, `*.csproj`, `Dockerfile`, `.github/workflows/`.
- Search for source roots: `src/`, `app/`, `lib/`, `services/`, `cmd/`.
- Open any manifest found and extract: runtime, test commands, build scripts, workspaces.
- Check CI config: `.github/workflows/*.yml` for build/test commands and matrixes.
- If Dockerfile exists, inspect `ENTRYPOINT`/`CMD` and base image for runtime assumptions.

4) How to infer architecture
- Web services: presence of `server`, `api`, `routes`, `controllers`, or frameworks (Express, FastAPI, ASP.NET) indicates an HTTP service.
- Multi-service/monorepo: multiple `package.json` or `pyproject.toml` files under subfolders suggests service boundaries.
- Data flows: look for migrations, `db/`, `migrations/`, or ORM configs (Sequelize, Alembic, EF Core).

5) Project-specific editing rules (apply if patterns are present)
- Update manifests (package.json, pyproject.toml) using the repository's existing conventions — prefer npm scripts or `poetry` commands if present.
- Prefer adding small, focused changes and a test or smoke-check when modifying build or CI files.
- If creating new files under `.github/`, follow any existing workflow patterns (single-step vs matrix builds).

6) Commit & PR guidance
- Make a single-purpose commit with a clear message (imperative tense). If adding or updating agent guidance, state what discovery led to the change.
- If you modify CI or build, include a brief description of how to validate locally (commands to run).

7) When to ask the human
- If no build/test commands are discoverable, ask which language/runtime to assume.
- If multiple conflicting manifests exist (e.g., `package.json` and `pyproject.toml`), ask which stack is primary.

8) Example snippets agents should use when exploring (replace shell as appropriate):
```
# list files and search manifests
ls -la
grep -R "^name\|^scripts\|^dependencies" --max-depth=2 || true

# inspect CI and docker
ls -la .github/workflows || true
sed -n '1,200p' Dockerfile || true
```

9) Placeholder checklist for future updates
- When new files are added, update this file with concrete examples (e.g., `package.json` scripts, `Makefile` targets, CI test commands).

If anything above is unclear or you want the instructions tailored to a detected language/runtime, tell me which files to inspect or paste the important manifests and I'll refine this file.
