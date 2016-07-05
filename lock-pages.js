
jQuery( document ).ready( function($) {

	var plugin_prefix = 'slt_lockpages_';

	// Hide certain publishing controls
	if ( $( 'body' ).hasClass( 'page-locked' ) ) {

		// Status and visibility
		if ( $( '#misc-publishing-actions' ).length ) {
			$( '#post-status-select' ).siblings( 'a' ).remove().end().remove();
			$( '#post-visibility-select' ).siblings( 'a' ).remove().end().remove();
		}

		// Page parent
		var p = $( '#parent_id' );
		if ( p.length ) {
			var parent = p.find( 'option:selected' ).text();
			p.replaceWith( '<p>' + parent + '</p>' );
		}

		// Page template
		var pt = $( '#page_template' );
		if ( pt.length ) {
			var template = pt.find( 'option:selected' ).text();
			pt.replaceWith( '<p>' + template + '</p>' );
		}

	}

	// OPTIONAL CONTENT LOCK CHECKBOX
	var $checkbox = $('#' + plugin_prefix + 'locked');
	var $optional_container = $("#sltlp-optional-content-lock");
	var $optional_checkbox = $('#' + plugin_prefix + 'content_lock');

	$checkbox.on('change', function() 
	{
		toggleContentLocker();
	});

	function toggleContentLocker()
	{
	    if( $checkbox.is(":checked") ) 
	    {
	    	$optional_container.stop().slideDown(120);
	    } 
	    else
	    {
	    	$optional_checkbox.prop('checked', false);
	    	$optional_container.slideUp(120);
	    }	        
	}
	toggleContentLocker();
});