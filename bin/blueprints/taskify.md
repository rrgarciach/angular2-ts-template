FORMAT: 1A

# Taskify API
This is the API Blueprint file for Taskify API.

# Group Tasks

## Task Collection [/tasks]
A collection of Tasks objects

### List all Tasks [GET]
Retrieve a collection of Tasks

+ Response 200 (application/json)

    + Body

            [
                {
                    "id": 1, 
                        "name": "Buy some goreceries"
                },
                {
                    "id": 2, 
                    "name": "Dinner with Katty"
                }
            ]

## Task Collection [/tasks/{id}]
A single Tasks object with all its details

### Get Login page [GET]
Retrieve a single Task by ID

+ Response 200 (application/json)

    + Body

            {
            "id": 1, 
            "name": "Buy some goreceries"
            }
