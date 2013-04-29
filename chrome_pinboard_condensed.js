jQuery('.bookmark').css('margin-bottom','0px');
jQuery('.bookmark').css('padding','0px');
jQuery('.display').css('padding','2px');

jQuery('.star').hide();

jQuery('.display').each(function() {

	$(this).find( "br" ).hide();
	$(this).find('.description').hide();
	$(this).find('.when').hide();
			//$(this).find('.tag').hide();
			$(this).find('.bookmark_count').hide();
			$(this).find('.copy_link').hide();
			$(this).find('.edit_links').prev('a').hide();
		});

$('.display').html(function (i, old) {
	return old
	.replace('by', '');
});

$('.display:odd').css('background','#f5f5f5');


$('.bookmark_title').each(function(){
	if ($(this).text().length > 50) {
		$(this).text($(this).text().substr(0, 47));
		$(this).append('...');
	}
});
