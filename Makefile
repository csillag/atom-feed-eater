FIXLANG = LC_ALL=C

prepare:
	@cd app; meteor npm install

dev: prepare
	@cd app; $(FIXLANG) meteor

build:
	@cd app; meteor-build-client ../docs -p ""
	@touch docs/.nojekyll
	@echo "This directory hosts the statically built demo. See here: http://csillag.github.io/atom-feed-eater" > docs/readme.md

