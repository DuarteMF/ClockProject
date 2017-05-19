$("footer li a").click(function(){
	$activeTab = $(this).parent();
	$allTabs = $("li","footer ul");
	$index = $allTabs.index($activeTab);
	console.log($index);

	$titles = $("h1", ".titles");
	$activeTitle = $("h1.active", ".titles");
	$activeTitle.removeClass("active");
	$($titles[$index]).addClass("active");

	if($("#Edit").hasClass())
	if($index==0 || $index==1){
		$("#Edit, #Add").addClass("active");
	};
});

$(function(){
	$( "#tabs" ).tabs({
	});
});