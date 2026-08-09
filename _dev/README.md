# Dev notes

Local tooling for working on the site. Nothing in this folder is published —
Jekyll ignores top-level directories beginning with `_` (other than the ones it
reserves, like `_posts` and `_layouts`), so `_dev/` never reaches `_site/` or
the live site.

## Previewing changes locally

From the repo root:

```bash
./_dev/serve.sh
```

Then open **http://localhost:4000** (VS Code will offer to forward the port —
say yes, or find it under the *Ports* tab).

Leave it running while you edit. Every time you save a file the site rebuilds
and the browser tab refreshes itself, so you can just alt-tab and look. Press
`Ctrl-C` in the terminal to stop.

A few notes:

- **Port already in use?** Something's still running from last time. Either
  `Ctrl-C` it, or start on another port with `./_dev/serve.sh 4001`.
- **A change isn't showing up?** Edits to `_config.yml` are the one thing
  Jekyll doesn't pick up automatically — stop the server and start it again.
- **Drafts and future posts** are visible locally (`--drafts --future`) but
  won't appear on the live site until they're published with a past date, so
  the preview is deliberately a little more permissive than production.
- **Nothing here needs committing.** `_site/` and `.jekyll-cache/` are the
  generated output and are already git-ignored; GitHub Pages rebuilds the site
  itself from the source files when you push.

## Local vs. live Jekyll

`serve.sh` uses the Jekyll on your `PATH` (currently 4.4.1). GitHub Pages builds
the live site with the `github-pages` gem, which pins Jekyll 3.10. For a site
like this one — no plugins, hand-written layouts — the two behave the same, so
there's no Gemfile here and no `bundle exec` to remember. If you start using
plugins and see the preview diverge from production, that's the thing to
revisit.
