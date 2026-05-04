.PHONY: install lint check build preview test

install:
	npm install

lint:
	npm run lint

check:
	npx tsc --noEmit

build:
	npm run build

preview: build
	npm run preview

test: install lint check build
	@echo "All checks passed. Ready to deploy."
