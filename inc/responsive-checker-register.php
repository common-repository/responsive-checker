<?php

function responsive_checker_register_scripts(){
    // Deregister the included library
    //wp_deregister_script( 'jquery' );     
    // Register the library again from Google's CDN
    //wp_register_script( 'jquery', 'http://code.jquery.com/jquery-1.11.1.min.js', array(), null, false );
    wp_register_script( 'scripts-js', RESPONSIVECHECKER_URI.'assets/js/scripts.js',array( 'jquery' ));
    wp_enqueue_script( 'scripts-js' );
}

function responsive_checker_register_style(){
    wp_register_style('styles', RESPONSIVECHECKER_URI.'assets/css/style.css');
    wp_enqueue_style('styles');
}
