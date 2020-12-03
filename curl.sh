#!/bin/bash

# curl -X POST -H "Content-Type: application/json" \
#     -d '{"id": "5fc57cfac32b320fb0273ab7","isArchive": true}' \
#     localhost:5000/update-employee

# curl -X POST -H "Content-Type: application/json" \
#     -d '{"role": "waiter"}' \
#     localhost:5000/filter-role-employee

# curl -X POST -H "Content-Type: application/json" \
#     -d '{"isArchive": false}' \
#     localhost:5000/filter-archive-employee

# curl -X POST -H "Content-Type: application/json" \
#     -d '{"name":"lolol","role":"driver","phone":"9056346690","birthday":"05011996","isArchive":"false"}' \
#     localhost:5000/add-employee

# curl -X GET \
#     localhost:5000/find-every-employee
#     