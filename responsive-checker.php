<?php 
/*
Plugin Name: Responsive Checker
Plugin URI: http://ncreative.net/plugin/responsive-checker
Description: Responsive checker for your website
Version: 1.0.2
Author: ncreative
Author URI: http://ncreative.net/
*/

if( !defined('RESPONSIVECHECKER_PATH') )
	define( 'RESPONSIVECHECKER_PATH', dirname(__FILE__).'/');
    
if( !defined('RESPONSIVECHECKER_URI') )
	define( 'RESPONSIVECHECKER_URI', plugins_url(null, __FILE__).'/');
// Hook for adding admin menus
add_action('admin_menu', 'brain_res_add_pages');
//register js for admin panel
add_action('admin_enqueue_scripts', 'responsive_checker_register_scripts');
//admin register css
add_action('admin_enqueue_scripts', 'responsive_checker_register_style');
require_once(RESPONSIVECHECKER_PATH .'inc/responsive-checker-register.php');


// action function for above hook
function brain_res_add_pages(){
    add_menu_page(__('Responsive Checker','menu-responsive-checker'), __('Responsive Checker','menu-responsive-checker'), 'manage_options', 'menu-res-checker-handle', 'menu_responsive_checker' );
    add_submenu_page('menu-res-checker-handle', __('Make it Responsive','menu-responsive-checker-mobile-portrait'), __('Make it Responsive','menu_responsive_checker_make_responsive'), 'manage_options', 'menu_responsive_checker_make_responsive', 'menu_responsive_checker_make_responsive');
}

function menu_responsive_checker_make_responsive() {
    echo "<h2>Make Your Website Responsive</h2>";
    echo "<p>If you want to make your website responsive, please send email to adi@brainesia.com.</p>";
}


function menu_responsive_checker() {
    echo '<h2 class="title-res-checker"> Check Responsive Your Website</h2>';
    echo '<div class="responsive-checker-menu">';
    echo '<div class="responsive-checker-title">Device : </div>';
   echo '<div class="checkvalue">
        <select id="responsive-cheker-combobox" >
            <option value="320">Mobile 4 Inch</option>
            <option value="360">Mobile 5 Inch</option>
            <option value="600">Tablet 7 Inch</option>
            <option value="768">Tablet 10 Inch</option>
            <option value="800">Netbook 11 Inch</option>
            <option value="980">Notebook 14 Inch</option>
            <option value="1920">LCD PC</option>
        </select>
        </div>';
    echo '<div class="responsive-checker-rotation"><a href="#" ><img src="' . RESPONSIVECHECKER_URI . 'assets/images/redo-icon.png" /></a></div>';
    echo '</div>';
    echo '<iframe class="frame-responsive" src="' . get_site_url() . '" scrolling="yes" ></iframe>';
}

 