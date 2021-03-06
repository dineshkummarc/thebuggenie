define(['thebuggenie/tools', 'thebuggenie/tbg', 'domReady', 'jquery', 'mention'],
    function (tools, TBG, domReady, jQuery, mention) {

        domReady(function () {
            TBG.Main.Helpers.MarkitUp($$('textarea.markuppable'));
            (function ($) {
                jQuery("body").on("click", ".dropper", function (e) {
                    var is_visible = jQuery(this).hasClass('button-pressed');
                    TBG.Main.Profile.clearPopupsAndButtons();
                    if (!is_visible) {
                        TBG.Main.Helpers.toggler(jQuery(this));
                    }
                    e.stopPropagation();
                    e.preventDefault();
                });
                // jQuery("body").on("click", "#topmenu-container .with-dropdown", function (e) {
                //     jQuery('#topmenu-container').toggleClass('active');
                //     var is_active = jQuery(this).parents('li').hasClass('active');
                //     jQuery(this).parents('ul').find('li').removeClass('active');
                //     if (is_active) {
                //         jQuery(this).parents('li').removeClass('active');
                //     } else {
                //         jQuery(this).parents('li').addClass('active');
                //     }
                // });
                jQuery("body").on("click", ".fancydropdown", function (e) {
                    jQuery(this).toggleClass('selected');
                });
                jQuery("body").on("click", ".fancydropdown-item", function (e) {
                    TBG.Main.setFancyDropdownValue(this);
                });
                jQuery("body").on("click", ".dropper.dynamic_menu_link", function (e) {
                    var menu = jQuery(this).next()[0];
                    if (menu !== undefined && menu.hasClassName('dynamic_menu')) {
                        TBG.Main.Helpers.loadDynamicMenu(menu);
                    }
                });
                jQuery("#user_notifications_container").on("click", TBG.Main.Profile.toggleNotifications);
                jQuery("#disable-tutorial-button").on("click", TBG.Tutorial.disable);

                jQuery("body").on("click", function (e) {
                    if (e.target.up('#topmenu-container') == undefined && jQuery('#topmenu-container').hasClass('active')) {
                        jQuery('#topmenu-container').removeClass('active');
                    }
                    if (e.target.up('#user_notifications') == undefined && e.target.up('#user_notifications_container') == undefined && jQuery('#user_notifications').hasClass('active')) {
                        jQuery('#user_notifications').removeClass('active');
                        jQuery('#user_notifications_container').removeClass('active');
                    }
                    if (['INPUT'].indexOf(e.target.nodeName) != -1)
                        return;
                    else if (e.target.up('.popup_box') != undefined)
                        return;
                    else if (e.target && typeof(e.target.hasAttribute) == 'function' && e.target.hasAttribute('onclick'))
                        return;
                    else if (e.target && typeof(e.target.hasAttribute) == 'function' && e.target.hasAttribute('onclick'))
                        return;
                    TBG.Main.Profile.clearPopupsAndButtons();
                    if (e.target && jQuery(e.target).parents('#searchfor_autocomplete_choices').length > 0)
                        return;
                    TBG.autocompleter.options.forceHide();
                    e.stopPropagation();
                });
                jQuery("img[data-src]:not([data-src-processed])").each(function(){
                    var $img = jQuery(this);
                    $img.attr('src', $img.data('src')).data('src-processed', true);
                });
                $$("textarea").each(function (ta) {
                    ta.on('focus', function (e) {
                        TBG.Main.initializeMentionable(e.target);
                        var ec = this.up('.editor_container');
                        if (ec != undefined)
                            ec.addClassName('focussed');
                    });
                });
                $$("textarea").each(function (ta) {
                    ta.on('blur', function (e) {
                        var ec = this.up('.editor_container');
                        if (ec != undefined)
                            ec.removeClassName('focussed');
                    });
                });
                TBG.Main.Dashboard.initializeSorting($);
            })(jQuery);
        });

});
