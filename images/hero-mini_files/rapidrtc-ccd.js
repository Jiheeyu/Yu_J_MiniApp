(function ($, AUTO) {
    "use strict";

    var siteHost = window.location.host;
    var MINI_SITE = 'mini.ca';
    var SPECIAL_OFFERS_SITE = 'minispecialoffers.ca';

    AUTO.RapidCrossDomain = (function () {
        function RapidCrossDomain() {
            this.init();
        }

        RapidCrossDomain.prototype = {
            CHAT_COOKIE_NAME: '_chatId',
            isStaging: siteHost.indexOf('localhost') > -1 || siteHost.indexOf('stage') > -1 ,
            isSpecialOffersSite: siteHost.indexOf(SPECIAL_OFFERS_SITE) > -1 || window.location.pathname.indexOf('specialoffersmicrosite') > -1,
            init: function () {
                var root = this;
                var trackingInfo = {};
                var launcherInfo = {};

                launcherInfo.regionCode = AUTO.province;
                if(this.getChatId() != null)
                    launcherInfo.chatId = this.getChatId();

                try { DigitalInterview.Launcher.enableLaunchPoints(launcherInfo, trackingInfo); } catch (e) { }

                if(root.isSpecialOffersSite) {
                    DigitalInterview.Launcher.on('chatIdUpdate', function (info) {
                        var url = (root.isStaging ? 'mini-staging6.richmondday.com' : 'https://' + MINI_SITE ) + '/' + AUTO.lang + '/specialoffersmicrosite/chatinit';
                        var data = {
                            chatid: info.chatId,
                            lang: AUTO.lang,
                            province_short: AUTO.province,
                            province: AUTO.Setting.SettingCookieData.province,
                            lat: AUTO.Setting.SettingCookieData.longitude,
                            lng: AUTO.Setting.SettingCookieData.latitude
                        };
                        var param = $.param(data);
                        var rapidChatTracking = '<iframe src="' + url + '?' + param + '" style="display:none"></iframe>';

                        $('body').append(rapidChatTracking);
                    });
                } 
            },
            getChatId: function() {
                var cookie = $.cookie(this.CHAT_COOKIE_NAME);
                if (cookie && cookie != 'null')
                    return cookie;
                return null;
            },
            createChatCookie: function (chatId) {
                var cookie = $.cookie(this.CHAT_COOKIE_NAME);
                if (!cookie && cookie != 'null')
                    $.cookie(this.CHAT_COOKIE_NAME, chatId, { expires : 1 });
            },
            destroyChatCookie: function () {
                $.cookie(this.CHAT_COOKIE_NAME, null);
            }
        };

        return RapidCrossDomain;
    })();

    window.AUTO = AUTO;
})(window.jQuery, window.AUTO || {});
