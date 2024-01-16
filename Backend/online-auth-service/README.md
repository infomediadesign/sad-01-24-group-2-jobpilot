$ docker run -p 8018:8018 -e NODE_ENV=development -e PORT=8018 -e LOG_LEVEL=debug -e LOG_MAX_DAYS=60 -e SWAGGER=true -e MONGODB_USERNAME=AppBraille23 -e MONGODB_PASSWORD=Heidelberg23 -e MONGODB_CLUSTER_URL="clusterbraille.u3wyeru.mongodb.net/?retryWrites=true&w=majority" -e MONGODB_DATABASE=db_braille -d online-braille-service

docker build -t online-braille-service .
