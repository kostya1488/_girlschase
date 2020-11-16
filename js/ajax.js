$(document).ready(function() {
    $('#ajax_feedback').submit(
        function() {
            sendAjaxForm('ajax_feedback', 'php/feedback.php');
            return false;
        }
    );
    $('#ajax_callback').submit(
        function() {
            sendAjaxForm('ajax_callback', 'php/callback.php');
            return false;
        }
    );
});

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'html',
        data: $('#' + ajax_form).serialize(),
        success: function(response) {
            result = $.parseJSON(response);
            $('#' + ajax_form).hide();
            $('.response-' + ajax_form).addClass('active');
        },
        error: function(response) {
            alert('error');

        }
    });

}