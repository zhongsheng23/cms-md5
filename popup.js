chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        // alert(request.data.res[0].name);
        if (request.data.code == 200) {
            $('#loding').replaceWith('<li>查询完成</li>')
            for (var i = 0; i < request.data.res.length; i++) {
                $('ul').append('<li>'+ request.data.res[i].name +'</li>')
            }
        }else{
                $('#loding').replaceWith('<li>查询完成</li>')
                $('ul').append('<li>获取指纹信息失败</li>')
        }
        sendResponse("popup返回值");
    }
);


var bg = chrome.extension.getBackgroundPage();
bg.get_data()