install:
	npm ci

start:
	node bin/brain-even.js	
	
publish:
	npm publish --dry-run	

lint:
	npx eslint .