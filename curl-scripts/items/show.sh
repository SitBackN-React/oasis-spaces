#!/bin/sh

API="http://localhost:4741"

URL_PATH="/lists"

curl "${API}${URL_PATH}/${LIST_ID}/items/${ITEM_ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
