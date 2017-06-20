// Check off a specific item
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete a task
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//this is the text user entered
		var userText = $(this).val();

		//create a new li inside ul
		$("ul").append("<li><span>x </span>"+userText+"</li>");

		//clear the input
		$("input[type='text'").val("");

	}
});