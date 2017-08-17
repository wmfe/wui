publish:
	npm run build
	git add .
	git commit -m "update"
	git push origin gh-pages