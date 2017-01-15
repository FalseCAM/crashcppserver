# crashcppserver
Server to receive and visualize data generated by crashcpp.

## Quick Start

Clone repository
	`git clone https://github.com/FalseCAM/crashcppserver`

Change into source directory
	`cd crashcppserver`

Edit compose for your needs
	`vim docker-compose.yml`

Build docker compose
	`docker-compose build`

Run docker compose
	`docker-compose up -d`

Stop docker compose
	`docker-compose stop`

## Run docker

`docker run --name crashcppserver -e MONGO_HOST=mongodb --rm falsecam/crashcppserver`

You can create the mongodb:
`docker run --name mongodb mongodb`