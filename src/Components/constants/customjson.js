export const customJson = [
    {  
      "title": "Employee CRUD Sequence",
      "nodes": [
        {
               "type": "user",
               "name": "Desktop Client",
               "details": {
                 "browser": "Chrome",
                 "anonymous-user": true
               },
               "correlation-id": "123456",
               "next": "2",
               "id": "1"
             },
             {
               "type": "api",
               "name": "POST /emp",
               "details": {
                 "method": "POST",
                 "component": "API gateway",
                 "endpoint": "https://www.tachyonsys.com.au/emp",
                 "access": "public"
               },
               "correlation-id": "123456",
               "next": "3",
               "prev": "1",
               "id": "2"
             },
             {
               "type": "function",
               "name": "createEmployee",
               "details": {
                 "method": "createEmployee",
                 "Parameters": "{name, dob, contact, address}",
                 "return": "id"
               },
               "correlation-id": "123456",
               "next": "11",
               "prev": "2",
               "id": "3"
             },
              {
                "type": "connecting",
                "name": "Connecting",
                "details": {
                  "method": "createEmployee",
                  "Parameters": "{name, dob, contact, address}",
                  "return": "id"
                },
                "correlation-id": "123456",
                "next": "12",
                "prev": "3",
                "id": "11"
              },
              
             {
                "type": "function2",
                "name": "Emp Created",
                "details": {
                  "method": "createEmployee",
                  "Parameters": "{name, dob, contact, address}",
                  "return": "id"
                },
                "correlation-id": "123456",
                "next": "4",
                "prev": "11",
                "id": "12"
              },
             {
               "type": "database",
               "name": "DynamoDB",
               "details": {
                 "type": "NOSQL",
                 "Provider": "AWS",
                 "endpoint": "https://aws.com/dynamodb/a72b898146ca576",
                 "table": "employees"
               },
               "correlation-id": "123456",
               "prev": "12",
               "id": "4"
             },
             {
               "type": "api",
               "name": "GET /emp",
               "details": {
                 "method": "GET",
                 "component": "API gateway",
                 "endpoint": "https://www.tachyonsys.com.au/emp",
                 "access": "public"
               },
               "correlation-id": "654321",
               "next": "6",
               "prev": "1",
               "id": "5"
             },
             {
               "type": "function",
               "name": "getEmployee",
               "details": {
                 "method": "getEmployee",
                 "Parameters": "id",
                 "return": "employee"
               },
               "correlation-id": "654321",
               "next": "7",
               "prev": "5",
               "id": "6"
             },
             {
               "type": "database",
               "name": "DynamoDB",
               "details": {
                 "type": "NOSQL",
                 "Provider": "AWS",
                 "endpoint": "https://aws.com/dynamodb/a72b898146ca576",
                 "table": "employees"
               },
               "correlation-id": "654321",
               "prev": "6",
               "id": "7"
             },
             {
               "type": "api",
               "name": "PUT /emp",
               "details": {
                 "method": "PUT",
                 "component": "API gateway",
                 "endpoint": "https://www.tachyonsys.com.au/emp",
                 "access": "public"
               },
               "correlation-id": "214365",
               "next": "9",
               "prev": "1",
               "id": "8"
             },
             {
               "type": "function",
               "name": "updateEmployee",
               "details": {
                 "method": "updateEmployee",
                 "Parameters": "{id, address}",
                 "return": "{employee}"
               },
               "correlation-id": "214365",
               "next": "10",
               "prev": "8",
               "id": "9"
             },
             {
               "type": "database",
               "name": "DynamoDB",
               "details": {
                 "type": "NOSQL",
                 "Provider": "AWS",
                 "endpoint": "https://aws.com/dynamodb/a72b898146ca576",
                 "table": "employees"
               },
               "correlation-id": "214365",
               "prev": "9",
               "id": "10"
             },
             {
                "type": "api",
                "name": "DEL/emp",
                "details": {
                  "type": "NOSQL",
                  "Provider": "AWS",
                  "endpoint": "https://aws.com/dynamodb/a72b898146ca576",
                  "table": "employees"
                },
                "correlation-id": "214365",
                "prev": "1",
                "id": "15",
                "next": "16"
              },
              {
                "type": "deleted",
                "name": "Deleted",
                "details": {
                  "type": "NOSQL",
                  "Provider": "AWS",
                  "endpoint": "https://aws.com/dynamodb/a72b898146ca576",
                  "table": "employees"
                },
                "correlation-id": "214365",
                "prev": "15",
                "id": "16"
              },
              {
                "type": "api",
                "name": "DEL/User   ",
                "details": {
                  "type": "NOSQL",
                  "Provider": "AWS",
                  "endpoint": "https://aws.com/dynamodb/a72b898146ca576",
                  "table": "employees"
                },
                "correlation-id": "214365",
                "prev": "1",
                "id": "17",
                "next": "18"
              },
              {
                "type": "deleted",
                "name": "Del/emp",
                "details": {
                  "type": "NOSQL",
                  "Provider": "AWS",
                  "endpoint": "https://aws.com/dynamodb/a72b898146ca576",
                  "table": "employees"
                },
                "correlation-id": "214365",
                "prev": "17",
                "id": "18"
              },  
              
       ]
    }
  ]