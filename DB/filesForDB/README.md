# How to create APIs from a CSV file

This example repository illustrates for to create REST APIs that read and serve data from a CSV file.

In this example, the CSV file contains information on airports. This information is served by 4 REST API endpoints:

* `/all`: This endpoint lists some of the columns in the CSV file.

* `/count`: This endpoint counts the number of rows in the CSV file. In this example, it returns a number with the total number of airports.

* `/overview`: This endpoint aggregates data in the CSV file. In this example, it returns the number of airports per country.

* `/search?country=<NAME>`: This endpoint returns matching rows in the CSV file. In this example, it returns the list of airports in the given country.

Each of these endpoints is served a corresponding YAML file.

All source code is defined in the `code.rql` file.