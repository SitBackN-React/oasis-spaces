# Oasis Spaces App

## Links
- Back End URL:
- Deployed Application:
- Front End Repository: https://github.com/SitBackN-React/oasis-spaces-client

## ERD
![Frame 1](https://media.git.generalassemb.ly/user/28180/files/b1994b00-c69d-11ea-882f-6f6d353c7520)

## Technologies Used
- Express
- Mongoose
- MongoDB
- cURL Scripts

## Planning

## Unsolved Problems

## API Information
### Lists
| Verb   | URI Pattern  | Controller#Action  |
|:-------|:-------------|:-------------------|
| GET    | `/lists`     | `lists#index`  |
| GET    | `/lists/:id` | `lists#show`   |
| POST   | `/lists`     | `lists#create` |
| PATCH  | `/lists/:id` | `lists#update` |
| DELETE | `/lists/:id` | `lists#destroy` |


### GET /lists
Example Curl Request:
```sh
#!/bin/sh

API="http://localhost:4741"
URL_PATH="/lists"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo

```

Example Terminal Command:
```sh
$ TOKEN="e1b600eee733edfdf6f56cf1b24da852" sh curl-scripts/lists/index.sh
```

Example API Response:
```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 454
ETag: W/"1c6-GH3GZSOHRpGQjUBgzMtZ8iZ92DQ"
Date: Mon, 20 Jul 2020 01:56:43 GMT
Connection: keep-alive

{"lists":[{"_id":"5f14f919768319ab3a025d19","name":"Today's List","description":"Sunday 7-19-20","owner":"5f14f836768319ab3a025d18","items":[],"createdAt":"2020-07-20T01:53:29.177Z","updatedAt":"2020-07-20T01:53:29.177Z","__v":0},{"_id":"5f14f98f768319ab3a025d1a","name":"Tomorrow's List","description":"Sunday 7-20-20","owner":"5f14f836768319ab3a025d18","items":[],"createdAt":"2020-07-20T01:55:27.991Z","updatedAt":"2020-07-20T01:55:27.991Z","__v":0}]}
```

---
### GET /lists/:id
Example Curl Request:
```sh
#!/bin/sh

API="http://localhost:4741"
URL_PATH="/lists"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
```

Example Terminal Command:
```sh
$ ID=5f14f919768319ab3a025d19 TOKEN="e1b600eee733edfdf6f56cf1b24da852" sh curl-scripts/lists/show.sh
```

Example API Response:
```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 228
ETag: W/"e4-HJgOdo3Jm5dFRdzsiX+dzUU+mN4"
Date: Mon, 20 Jul 2020 01:58:22 GMT
Connection: keep-alive

{"list":{"_id":"5f14f919768319ab3a025d19","name":"Today's List","description":"Sunday 7-19-20","owner":"5f14f836768319ab3a025d18","items":[],"createdAt":"2020-07-20T01:53:29.177Z","updatedAt":"2020-07-20T01:53:29.177Z","__v":0}}
```

---
### POST /lists
Example Curl Request:

```sh
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lists"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "list": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
```

Example Terminal Command:
```sh
$ TOKEN="e1b600eee733edfdf6f56cf1b24da852" NAME="Today's List" DESCRIPTION="Sunday 7-19-20" sh curl-scripts/lists/create.sh
```

Example API Response:
```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 228
ETag: W/"e4-HJgOdo3Jm5dFRdzsiX+dzUU+mN4"
Date: Mon, 20 Jul 2020 01:53:29 GMT
Connection: keep-alive

{"list":{"_id":"5f14f919768319ab3a025d19","name":"Today's List","description":"Sunday 7-19-20","owner":"5f14f836768319ab3a025d18","items":[],"createdAt":"2020-07-20T01:53:29.177Z","updatedAt":"2020-07-20T01:53:29.177Z","__v":0}}
```

---
### PATCH /lists/:id
Example Curl Request:
```sh
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lists"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "list": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
```

Example Terminal Command:
```sh
$ TOKEN="e1b600eee733edfdf6f56cf1b24da852" ID=5f14f919768319ab3a025d19 NAME="Yesterday's List" DESCRIPTION="Saturday 7-18-20" sh curl-scripts/lists/update.sh
```

Example API Response:
```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Mon, 20 Jul 2020 02:03:14 GMT
Connection: keep-alive
```

---
### DELETE /lists/:id
Example Curl Request:
```sh
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lists"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
```

Example Terminal Command:
```sh
TOKEN="e1b600eee733edfdf6f56cf1b24da852" ID=5f14f919768319ab3a025d19 sh curl-scripts/lists/destroy.sh
```

Example API Response:
```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Mon, 20 Jul 2020 02:06:06 GMT
Connection: keep-alive
```
