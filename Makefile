.DEFAULT_GOAL := help
.PHONY: \
  help \
  down up run

help:                        ## make help - Return this help
  @grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

down:                        ## make down - Destroy docker container
  docker-compose down

up:                          ## make up - Create docker container
  docker-compose up -d

run:
  @make down
  @git pull
  @make up
