$(function() {
    
    function appendMessage(message){
        var html = ` <div class='message'  data-id = "${message.id}">
                            <div class='upper-message'>
                                <div class='upper-message__user-name'>
                                    ${message.name}
                                </div>
                                <div class='upper-message__date'>
                                    ${message.date}
                                </div>
                            </div>
                        <div class='lower-message__content'>
                            ${message.content}
                        </div>
                   `
        message.image == null ? html = $(html).append(`</div>`) : html = $(html).append(`<div class="lower-message__image"><img src = "${message.image}"'></div></div>`)
        return html
    }

    var interval = setInterval(function() {

        if (window.location.href.match(/\/groups\/\d+\/messages/)) {
            $.ajax({
                url: location.href.json,
                type: "GET",
                dataType: 'json',
            })
            .done(function(messages) {
                var newMessage_id = $(".chat_messages").find('.message:last').attr('data-id');
                var insertHTML = '';
                messages.forEach(function(message) {
                    if (message.id > newMessage_id) {
                         insertHTML = appendMessage(message);
                         $('.chat_messages').append(insertHTML);
                    }
                });
               
            })
            .fail(function() {
                alert('更新失敗');
            });
        } 
        else {
            clearInterval(interval);
        } 
    },5000)
})