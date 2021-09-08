function __getWidgetHtml(url, callback) {
    if (url.indexOf('/') === 0 && url.indexOf('<') === -1) {
        $.ajax({
                url: url,
                type: 'get',
                dataType: 'html',
                "ignore_error": true,
                "hideLoading": true
            })
            .done(function (data) {
                if (data) data.replace(/\\'/g, "'");
                callback && callback(data);
            })
            .fail(function () {})
            .always(function () {});
    } else {
        callback && callback(url);
    }
}
