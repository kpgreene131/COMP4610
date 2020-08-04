$(document).ready(function () {
    $("#timesTableForm").validate({
        submitHandler: function(form) {
            submitForm();
            return false;
        }
    });
})
