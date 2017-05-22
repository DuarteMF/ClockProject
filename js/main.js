var AddButtonClickedOn = false;
var EditButtonClickedOn = false;

$("li a").click(function(){
	$activeTab = $(this).parent();
	$allTabs = $("li","ul");
	$index = $allTabs.index($activeTab);
	console.log($index);

	$titles = $("h1", ".titles");
	$activeTitle = $("h1.active", ".titles");
	$activeTitle.removeClass("active");
	$($titles[$index]).addClass("active");

	if($index==0 || $index==1){
		$("#Edit, #Add").show();
	}else{
		$("#Edit, #Add").hide();
	};	

	$("#searchBox").hide();
	AddButtonClickedOn = false;
	EditButtonClickedOn = false;
	$(".Delete").hide();
});

$("#Add","header").click(function(){
	if(!AddButtonClickedOn){
		$("#searchBox").show();
	}else{
		$("#searchBox").hide();
	}
	AddButtonClickedOn = !AddButtonClickedOn;
});

$("#Edit","header").click(function(){
	if(!EditButtonClickedOn){
		$(".Delete").show();
	}else{
		$(".Delete").hide();
	}
	EditButtonClickedOn = !EditButtonClickedOn;
});

$(function(){
	$( "#tabs" ).tabs({
	});
	$("#searchBox").hide();
	$(".Delete").hide();
});