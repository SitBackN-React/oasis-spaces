# Oasis Spaces App

## Links

- Back End URL:
- Deployed Application:
- Front End Repository:

## ERD
![Frame 1](https://media.git.generalassemb.ly/user/28180/files/b1994b00-c69d-11ea-882f-6f6d353c7520)

## Technologies Used
- Express
- Mongoose
- MongoDB
-
## Planning

## Unsolved Problems


## API Information
# Lists

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
  --header "Authorization: Bearer ${TOKEN}"

echo
```

Example Terminal Command:

```sh
sh curl-scripts/lists/index.sh
```

Example API Response:

```md

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "lists": [
    {
      "_id": "5e8ce58b144491a81bab1e62",
      "title": “To-Do-List“,
      "description": “Today’s to-do list.”,
      "createdAt": "2020-07-15T20:41:47.316Z",
      "updatedAt": "2020-07-15T20:41:47.316Z",
      "__v": 0
    }
  ]
}
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
ID=5e8ce58b144491a81bab1e62 sh curl-scripts/lists/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 170
ETag: W/"aa-YVtdydWaszA0ZL1HQ3Ran1h79zE"
Date: Wed, 15 Jul 2020 20:45:03 GMT
Connection: keep-alive

{
  "list": {
    "_id": "5e8ce58b144491a81bab1e62",
    "name": "Leon",
    "comment": "Noel",
    "createdAt": "2020-07-15T20:41:47.316Z",
    "updatedAt": "2020-07-15T20:41:47.316Z",
    "__v": 0
  }
}

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
      "description": "'"${DESCRIPTION}"'",
      "owner": "'"${OWNER}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
FIRST="Leon" LAST="Noel" sh curl-scripts/lists/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 170
ETag: W/"aa-YVtdydWaszA0ZL1HQ3Ran1h79zE"
Date: Wed, 15 Apr 2020 20:41:47 GMT
Connection: keep-alive

{
  "list": {
    "_id": "5e8ce58b144491a81bab1e62",
    "first_name": "Leon",
    "last_name": "Noel",
    "createdAt": “2020-07-15T20:41:47.316Z",
    "updatedAt": "2020-07-15T20:41:47.316Z",
    "__v": 0
  }
}
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
      "description": "'${DESCRIPTION}'"
    }
  }'

echo
```

Example Terminal Command:

```sh
ID=5e8ce58b144491a81bab1e62 FIRST="Leon" LAST="Noels" sh curl-scripts/lists/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Tue, 15 Jul 2020 20:48:09 GMT
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
ID=5e8ce58b144491a81bab1e62 sh curl-scripts/lists/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```

## List-Items
