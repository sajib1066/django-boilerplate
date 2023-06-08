'use strict';
$(document).on('click', '#save', function () {

    let loginRoute = $('#saveFormData').attr('action');
    var data = new FormData($('#saveFormData')[0]);
    if (data != '') {
        $.ajax({
            url: loginRoute,
            data: data,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
            },
            success: function (data) {
                $("#emailError").text('');
                $("#passwordError").text('');
                if (data.errors) {
                    $("#emailError").text(data.errors.email);
                    $("#passwordError").text(data.errors.password);
                }
                if (data.response == "success") {
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                }
            }
        });
    }
});




