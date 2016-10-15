FIXLANG = LC_ALL=C

prepare:
	@cd app; meteor npm install

dev: prepare
	@cd app; $(FIXLANG) meteor

test:
	@cd app; npm test

test-watch:
	@cd app; npm run-script test-watch

build: prepare
	@cd app; ./node_modules/.bin/meteor-build-client ../docs -p ""
	@touch docs/.nojekyll
	@echo "This directory hosts the statically built demo. See here: http://csillag.github.io/atom-feed-eater" > docs/readme.md

clean:
	@rm -rf app/node_modules
