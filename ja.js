// Employee Details Function

        function employeeDetails(name, company) {
            console.log("Employee Name: " + name +
                " Employee company: " + company + " with SECE");
        }

        employeeDetails("santharam", "google");
        employeeDetails("sathish", "microsoft");


        // Anonymous Function

        let data1 = function () {
            return "Hello Javascript";
        };

        console.log(data1());


        // Arrow Function

        let arrowFunc = () => {
            return "Hello Arrow Function";
        };

        console.log(arrowFunc());


        // Arrow Function with Parameters

        let sum = (a, b) => a + b;

        console.log(sum(10, 20));


        // Callback Function

        function sece(callback) {
            console.log("Welcome sece");
            callback();
        }

        function stud() {
            console.log("Welcome stud");
        }

        sece(stud);


        // WhatsApp Function

        function whatsapp() {
            return "WhatsApp notification sent";
        }

        // Notification Function

        function notification() {
            return "Notification received";
        }


        // Promise Function for API Fetch

        let fetch_api = new Promise((resolve, reject) => {

            let api = false;

            if (api) {
                resolve("Fetched API data");
            } else {
                reject("API not found");
            }

        });

        fetch_api
            .then((message) => {
                console.log(message);
            })
            .catch((error) => {
                console.log(error);
            });


        // Promise Function for Accepting Order

        function acceptOrder() {

            return new Promise((resolve, reject) => {

                let orderAvailable = true;

                if (orderAvailable) {
                    resolve("Order accepted successfully!");
                } else {
                    reject("Order could not be accepted!");
                }

            });

        }


        // Calling the Accept Order Promise

        acceptOrder()
            .then((message) => {
                console.log(message);
            })
            .catch((error) => {
                console.log(error);
            });
        


       
        let emp = {
            emp_id: 100,
            emp_name: "varun",
            salary: 40000,
            company: {
                name: "google",
                location: {
                    city: "Bangalore",
                    country: "India"
                }
            }
        };

        console.log(emp.emp_id);
        console.log(emp.company.name);
        console.log(emp.company.location.city);

