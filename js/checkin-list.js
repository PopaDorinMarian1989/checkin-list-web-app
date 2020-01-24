window.index = {
    API_BASE_URL: "http://localhost:8085",

    createGymMember: function () {

        let firstNameValue = $("#firstName-field").val();
        let lastNameValue = $("#lastName-field").val();
        let numberValue = $("#number-field").val();

        var requestBody = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            gymMembernumber: numberValue
        };

        $.ajax({
            url: index.API_BASE_URL + "/gymMember",
            method: "POST",
            // MIME type
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function () {
            //ToDoList.getItems();
        })
    },
    bindEvents: function () {
        $("create-item-form").submit(function (event) {
            event.preventDefault();
            index.createGymMember();
        });
    }
};
index.bindEvents();