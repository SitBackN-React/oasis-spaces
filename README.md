# Oasis Spaces App
Oasis Spaces is designed to provide users the ability to create and track their lists in order to organize their lives. Users can create different kinds of lists ranging from to-do lists to bucket lists. Once an item or list is completed, users can check it off.

## Links
- Deployed Application:
- Front End Repository: https://github.com/SitBackN-React/oasis-spaces-client

## ERD
![Frame 1](https://media.git.generalassemb.ly/user/28180/files/b1994b00-c69d-11ea-882f-6f6d353c7520)

## Technologies Used
- Express
- Mongoose
- MongoDB
- cURL Scripts
- -Heroku

## Planning
As a team we started by creating a team culture code and decided how to approach the back end features of our application.
We created guidelines for the team and studied scrum in order to implement it each day. We practiced using git more in depth in order to use the best form of version control. We created our user model and list schema, and then created our item subdocument. We created cURL scripts for each of our CRUD actions for both our lists and our items. We tested each CRUD action with our cURL scripts. We then proceeded to build our routes for both lists and items. As we built our routes, we added ownership to each route in order for the user to only be able to use CRUD on their lists and items. Lastly, we deployed this back end using Heroku.

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
TOKEN="e1b600eee733edfdf6f56cf1b24da852" sh curl-scripts/lists/index.sh
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
ID=5f14f919768319ab3a025d19 TOKEN="e1b600eee733edfdf6f56cf1b24da852" sh curl-scripts/lists/show.sh
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
TOKEN="e1b600eee733edfdf6f56cf1b24da852" NAME="Today's List" DESCRIPTION="Sunday 7-19-20" sh curl-scripts/lists/create.sh
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
TOKEN="e1b600eee733edfdf6f56cf1b24da852" ID=5f14f919768319ab3a025d19 NAME="Yesterday's List" DESCRIPTION="Saturday 7-18-20" sh curl-scripts/lists/update.sh
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


### Items
| Verb   | URI Pattern  | Controller#Action  |
|:-------|:-------------|:-------------------|
| GET    | `/lists/:id/items/:id` | `items#show`   |
| POST   | `/lists/:id/items`     | `items#create` |
| PATCH  | `/lists/:id/items/:id` | `items#update` |
| DELETE | `/lists/:id/items/:id` | `items#destroy` |


### GET /lists/:id/items/:id
Example Curl Request:
``#!/bin/sh

API="http://localhost:4741"

URL_PATH="/lists"

curl "${API}${URL_PATH}/${LIST_ID}/items/${ITEM_ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
```

Example Terminal Command:
```sh
TOKEN="4cc448b35603245f0e63a1a23bf9f048" LIST_ID=5f14f98f768319ab3a025d1a ITEM_ID=5f1594bc37da3baea4a5612d sh curl-scripts/items/show.sh
```

Example API Response:
```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 157
ETag: W/"9d-dhrhOGRy5Cwv3qMy2AiiQOG6ztI"
Date: Mon, 20 Jul 2020 13:25:13 GMT
Connection: keep-alive

{"item":{"_id":"5f1594bc37da3baea4a5612d","name":"New Item","note":"New Note","createdAt":"2020-07-20T12:57:32.798Z","updatedAt":"2020-07-20T12:57:32.798Z"}}
```

---
### POST /lists
Example Curl Request:

```sh
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lists"

curl "${API}${URL_PATH}/${LIST_ID}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "item": {
      "name": "'"${NAME}"'",
      "note": "'"${NOTE}"'"
    }
  }'

echo
```

Example Terminal Command:
```sh
LIST_ID=5f14f98f768319ab3a025d1a TOKEN="4cc448b35603245f0e63a1a23bf9f048" NAME="New Item" NOTE="New Note" sh curl-scripts/items/create.sh
```

Example API Response:
```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 379
ETag: W/"17b-fUn0CINqDBMx0Hn3uOH9LZ1DBw0"
Date: Mon, 20 Jul 2020 12:57:32 GMT
Connection: keep-alive

{"list":{"_id":"5f14f98f768319ab3a025d1a","name":"Tomorrow's List","description":"Sunday 7-20-20","owner":"5f14f836768319ab3a025d18","items":[{"_id":"5f1594bc37da3baea4a5612d","name":"New Item","note":"New Note","createdAt":"2020-07-20T12:57:32.798Z","updatedAt":"2020-07-20T12:57:32.798Z"}],"createdAt":"2020-07-20T01:55:27.991Z","updatedAt":"2020-07-20T12:57:32.798Z","__v":1}}
```

---
### PATCH /lists/:id
Example Curl Request:
```sh
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lists"

curl "${API}${URL_PATH}/${LIST_ID}/items/${ITEM_ID}/edit-item" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "item": {
      "name": "'"${NAME}"'",
      "note": "'"${NOTE}"'"
    }
  }'

echo
```

Example Terminal Command:
```sh
TOKEN="4cc448b35603245f0e63a1a23bf9f048" LIST_ID=5f14f98f768319ab3a025d1a ITEM_ID=5f1594bc37da3baea4a5612d NAME="Item 1" NOTE="Today's Note" sh curl-scripts/items/update.sh
```

Example API Response:
```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 381
ETag: W/"17d-xuZUBHudnkgn46hzI71JrkGKE38"
Date: Mon, 20 Jul 2020 13:31:53 GMT
Connection: keep-alive

{"list":{"_id":"5f14f98f768319ab3a025d1a","name":"Tomorrow's List","description":"Sunday 7-20-20","owner":"5f14f836768319ab3a025d18","items":[{"_id":"5f1594bc37da3baea4a5612d","name":"Item 1","note":"Today's Note","createdAt":"2020-07-20T12:57:32.798Z","updatedAt":"2020-07-20T13:31:53.407Z"}],"createdAt":"2020-07-20T01:55:27.991Z","updatedAt":"2020-07-20T13:31:53.407Z","__v":1}}
```

---
### DELETE /lists/:id
Example Curl Request:
```sh
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/lists"

curl "${API}${URL_PATH}/${LIST_ID}/items/${ITEM_ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
```

Example Terminal Command:
```sh
TOKEN="4cc448b35603245f0e63a1a23bf9f048" LIST_ID=5f14f98f768319ab3a025d1a ITEM_ID=5f1594bc37da3baea4a5612d sh curl-scripts/items/destroy.sh
```

Example API Response:
```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Mon, 20 Jul 2020 13:33:40 GMT
Connection: keep-alive
```
