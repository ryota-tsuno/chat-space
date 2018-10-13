$(function() {
    function buildHTML(message) {
        var html = `<div class='message' data-id = "${message.id}">
                            <div class='upper-message'>
                                <div class='upper-message__user-name'>
                                    ${message.user_name}
                                </div>
                                <div class='upper-message__date'>
                                    ${message.created_at}
                                </div>
                            </div>
                            <div class='lower-message__content'>
                                ${message.content}
                            </div>`
                        
        if (message.image == null ) {
            html = $(html).append(`</div>`)
        }
        else {
            html = $(html).append(`<div class="lower-message__image"><img src = "${message.image}"'></div></div>`)
        }

        return html;
    };
    $('#new_message').on('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        var url = $(this).attr('action');
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        })
        .done(function(data) {
            // console.log(data);
            var html = buildHTML(data);
            $('.chat_messages').append(html);
            $('.form_message').val('');
            $('.hidden').val('');
            $('.form__submit').prop('disabled', false);
        })
        .fail(function() {
            alert('error');
        });
    });
});