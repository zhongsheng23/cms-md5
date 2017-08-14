var return_data;

function get_data(){
    chrome.tabs.getSelected(null, function(tab) {
        var re = /http.?:\/\/.*?\//;
        main_url = tab.url.match(re)
        url = "http://www.yunsee.cn/api_finger.html?type=&token=&id=&level=&url=" + main_url; 
        // console.log(url)
        get_data_son(url);
        // console.log(return_data)
        chrome.extension.sendMessage({data: return_data}, function(response) {
            console.log(response);
        });
    });

}


function get_data_son(url){
    $.ajax({
        type: 'GET',
        url: url ,
        dataType: 'json',
        async: false,
        success: function(data){
            return_data = data;
            // console.log(url,data)
        }
    });
}
