all: docs


docs: 
	jsdoc --verbose -r ./js -d ./out
