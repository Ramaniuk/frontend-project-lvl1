install:
	npm ci

start:
	node bin/brain-games.js	

publish:
	npm publish --dry-run	

lint:
	npx eslint .

asciinema: 
	asciinema rec demo.cast
	asciinema play demo.cast
	asciinema upload demo.cast