$(function() {
    var search_list = $("#user-search-result");

    function appendUser(user) {
        var html = `<div class="chat-group-user1 clearfix">
                        <p class="chat-group-user__name">${ user.name }</p>
                        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                    </div>`
        search_list.append(html);
    }

    function appendNoUser(user) {
        var html = `<li>
                        <div class = "chat-group-user clearfix">${ user }</div>
                    </li>`
        search_list.append(html);
    }

    var member_list = $(".chat-group-form__field--right__member");

    function buildHTML(userName, userId) {
        var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                        <input name='group[user_ids][]' type='hidden' value='${ userId }'>
                        <p class='chat-group-user__name'>${ userName }</p>
                        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                    </div>`
        member_list.append(html);
    }

    $("#user-search-field").on("keyup", function() {
        var input = $("#user-search-field").val();
        $.ajax({
            type: "GET",
            url: '/users',
            data: { keyword: input },
            dataType: 'json'
        })
        .done(function(users) {
            $("#user-search-field").empty();
            $("#user-search-result").empty();
            if (users.length !== 0 ) {
                users.forEach(function(user) {
                    appendUser(user);
                });
            }
            else
                appendNoUser("一致するユーザーはいません");
            })
        .fail(function() {
            alert('ユーザー登録に失敗しました');
        })
    })

    // 検索結果の追加ボタンを押した時
    $('#user-search-result').on("click", ".chat-group-user__btn--add", function() {
        $('.chat-group-user1').remove();
        $('#chat-group-user-8').append('');
        var userName = $(this).attr('data-user-name');
        var userId = $(this).attr('data-user-id');
        buildHTML(userName, userId)
       
    })

    // メンバーの削除ボタンを押した時
    $('.chat-group-form').on("click", ".user-search-remove", function() {
        var user = $(this).parent();
        $(user).remove();
    })
});