# APIs-based-on-directory-structure

Attempt of automating API routes generation based on lib/api/resources directory structure.

The idea was to have a fast setup for working on one resource at a time. Each directory (resource) in the api/lib/resources directory is treated as a route. 

For instance the api/lib/resources/dogs directory is treated as a dogs resource of an API.
The dogs resource is defined by:
                                1. a model of Dog (mongoose model).
                                2. actions (array of allowed actions dogs resource)
                                3. a controller (the controller defines implemetations of actions from the actions array)

1.model is a plain mongoose model

2.actions:
          2.1. actions is an array of actions allowed on the resource
          2.2. an action is defined as an object that describes an action:
                    {
                      method: "get",
                      parameter: "",
                      func: "getAll"
                    },
                    {
                      method: "get",
                      parameter: "/:id",
                      func: "getById"
                    }
          2.3. method of action is a http verb (since a resource is provided depending on the reqest verb type)
          2.4. parameter of action is an empty string or an ":id" (since every action needs data to respond with data, except getAll)
          2.5. func is a function responsible for executing the requested action (controller function)

3.controller:
          3.1. defines methods that execute on a given resource
          3.2. method names are same as action func (the controller and actions are linked)
          
