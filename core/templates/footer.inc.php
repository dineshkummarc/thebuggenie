<footer>
    <?php if (!\thebuggenie\core\framework\Settings::isStable()): ?>
        <div class="message-box type-warning">
            <span class="message"><?= fa_image_tag('code-branch'); ?>This version is still in development. Do not use in production.</span>
            <span class="actions"><a href="https://issues.thebuggenie.com/thebuggenie" target="_blank" class="button button-silver"><?= __('Report an issue'); ?></a></span>
        </div>
    <?php endif; ?>
    <?php echo image_tag('footer_logo.png'); ?>
    <?php echo link_tag(make_url('about'), 'The Bug Genie').'&nbsp;'.\thebuggenie\core\framework\Settings::getVersion(); ?>
    <?php if ($tbg_user->canAccessConfigurationPage()): ?>
        | <b><?php echo link_tag(make_url('configure'), __('Configure %thebuggenie_name', array('%thebuggenie_name' => \thebuggenie\core\framework\Settings::getSiteHeaderName()))); ?></b>
    <?php endif; ?>
    | <a href="https://thebuggenie.com/support">Support</a>
    | <a href="https://thebuggenie.com/feedback">Feedback</a>
    <?php if (\thebuggenie\core\framework\Context::isDebugMode() && \thebuggenie\core\framework\Logging::isEnabled()): ?>
        <script>
            function tbg_debug_show_menu_tab(tab, clicked) {
                $('debug-bar').childElements().each(function (unclicked) {
                    unclicked.removeClassName('selected');
                });
                clicked.addClassName('selected');
                $('debug-frames-container').childElements().each(function (container) {
                    (container.id == tab) ? container.addClassName('selected') : container.removeClassName('selected');
                });
            }
        </script>
        <div id="tbg___DEBUGINFO___" style="position: fixed; bottom: 0; left: 0; z-index: 1100; display: none; width: 100%;">
        </div>
        <?php echo image_tag('spinning_16.gif', array('style' => 'position: fixed; bottom: 5px; right: 23px;', 'id' => 'tbg___DEBUGINFO___indicator')); ?>
    <?php endif; ?>
</footer>
