.PHONY: devchrome
devchrome:
	cd chrome-extension && npm run dev

.PHONY: devhtml
devhtml:
	cd html && miniserve --port 8001
.PHONY: devhtml2
devhtml2:
	cd html && miniserve --port 8002
