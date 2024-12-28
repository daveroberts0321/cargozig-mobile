# CargoZig Mobile App Makefile for Windows
DATE=$(shell powershell Get-Date -Format 'yyMMdd')

.PHONY: dev build commit help android ios

dev:
	npm run dev

build:
	npm run build
	npx cap sync

commit:
	git add .
	@if not "$(m)" == "" ( \
		git commit -m "$(DATE) - $(m)" \
	) else ( \
		git commit -m "$(DATE) - Regular update" \
	)

push :
	git push

android: build
	npx cap open android

ios: build
	npx cap open ios

install:
	npm install
	npx cap sync

clean:
	if exist build rmdir /s /q build
	if exist .svelte-kit rmdir /s /q .svelte-kit
	if exist node_modules rmdir /s /q node_modules

update:
	npm update
	npx cap sync

help:
	@echo Available commands:
	@echo   make dev         - Start development server
	@echo   make build       - Build the application
	@echo   make android     - Open Android Studio
	@echo   make ios         - Open Xcode
	@echo   make commit m="message" - Commit with date (YYMMDD format)
	@echo   make install     - Install dependencies
	@echo   make clean       - Clean build artifacts
	@echo   make update      - Update dependencies