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


### Create a new task [POST]
Create a Task

+ Request (application/json)

    + Attributes (object)

+ Response 200

    + Body

            {
                "id": 1,
                "name": "Buy some goreceries"
            }

## Tasks [/tasks/{id}]
A single Tasks object with all its details

### Get single Task [GET]
Retrieve a single Task by ID

+ Request

    + Parameters
        + id (number)

+ Response 200 (application/json)

    + Body

            {
            "id": 1, 
            "name": "Buy some goreceries"
            }

### Modify single Task [PUT]
Edit a single Task by ID

+ Request (application/json)

    + Attributes
        + id (number)

+ Response 200 (application/json)

    + Body

            {
            "id": 1, 
            "name": "Buy some goreceries"
            }
            
### Remove single Task [DELETE]
Delete a single Task by ID

+ Request

    + Attributes
        + id (number)

+ Response 204
