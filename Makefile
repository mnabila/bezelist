# Build and preview the theme against its bundled example site.
# Hugo resolves the theme via --themesDir, pointing the example site at this repo.

HUGO      ?= hugo
EXAMPLE   := exampleSite
THEMESDIR := ../..

.DEFAULT_GOAL := serve

## serve: live-reload preview of the example site (drafts included)
serve:
	$(HUGO) server --source $(EXAMPLE) --themesDir $(THEMESDIR) --buildDrafts

## test: production build of the example site (fails on error)
test:
	$(HUGO) --source $(EXAMPLE) --themesDir $(THEMESDIR) --gc --minify

## clean: remove generated output from the example site
clean:
	rm -rf $(EXAMPLE)/public $(EXAMPLE)/resources $(EXAMPLE)/.hugo_build.lock

.PHONY: serve test clean
