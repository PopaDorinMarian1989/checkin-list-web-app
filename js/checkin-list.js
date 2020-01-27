window.index = {
    API_BASE_URL: "http://localhost:8085",
    getMembers: function () {
        $.ajax({
            url: index.API_BASE_URL + "/gymMember",
            method: "GET"
        }).done(function (response) {
            console.log(response);
            console.log(response);
            index.displayMember(response);
        });
    },

    createMember: function () {
        let firstNameValue = $("#firstName-field").val();
        let lastNameValue = $("#lastName-field").val();
        let memberNumber = $("#nr-field").val();

        var requestBody = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            gymMemberNumber: memberNumber,
        };

        $.ajax({
            url: index.API_BASE_URL + "/gymMember",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function () {
            index.getMembers();
        })
    },
    markItemDone: function (id, checked) {
        let requestBody = {
            checked: checked
        };

        $.ajax({
            url: index.API_BASE_URL + "gymMember/" + id,
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function () {
           index.getMembers()
        })
    },

    deleteMember: function (id) {
        $.ajax({
            url: index.API_BASE_URL + "/gymMember/" + id,
            method: "DELETE"
        }).done(function () {
            index.getMembers();

        });
    },
    displayMember: function (gymMembers) {
        var tableContent = '';

        gymMembers.forEach(member => tableContent += index.getMemberHtml(member));

        $("#index tbody").html(tableContent);
    }
    ,
    getMemberHtml: function (gymMember) {

        return `<tr>
                <td><a href="#" onclick="index.deleteMember(${gymMember.id})" class="delete-item"><i class="far fa-trash-alt"></i>
                </a></td>
                <td>${gymMember.firstName}</td>
                <td>${gymMember.lastName}</td>
                <td>${gymMember.gymMemberNumber}</td>
            </tr>`
    },
    bindEvents: function () {
        $("#index.delete-item").click(function (event) {
            event.preventDefault();
        });
        $("#create-item-form").submit(function (event) {
            event.preventDefault();
            index.createMember();
        });
    }
};
index.getMembers();
index.bindEvents();

