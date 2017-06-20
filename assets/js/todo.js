


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

// Add a new task under all the exsiting tasks
$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//this is the text user entered
		var userText = $(this).val();

		//create a new li inside ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='ture'></i></span><i class='fa fa-arrow-right' aria-hidden='true'></i>"+userText+"</li>");

		//clear the input
		$("input[type='text'").val("");

	}
});


// show or hide the "Add New To-Do Task" field
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

