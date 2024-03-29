install:
	npm ci

start-calc:
	node bin/brain-calc.js	

brain-even:
	node bin/brain-even.js	

start-gcd:
	node bin/brain-gcd.js	

start-progression:
	node bin/brain-progression.js	

start-prime:
	node bin/brain-prime.js

publish:
	npm publish --dry-run	

lint:
	npx eslint .

asciinema: 
	asciinema rec demo.cast
	asciinema play demo.cast
	asciinema upload demo.cast