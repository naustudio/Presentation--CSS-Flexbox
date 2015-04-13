$( document ).ready(function() {
    flex_display = '\tflex_display: ' + $('#flexDisplay option:selected').val() + ';\n\t';
    flex ="";
    flex_direction = 'flex-direction: ' + $('#flexDirection option:selected').val() +';\n\t';
    flex_wrap= 'flex-wrap: ' + $('#flexWrap option:selected').val() +';\n\t';
    align_items = 'align-items: ' + $('#alignItems option:selected').val() +';\n\t';
    justify_content = 'justify-content: ' + $('#justifyContent option:selected').val() +';\n\t';
    align_content = 'align-content: ' + $('#alignContent option:selected').val() +';\n\t';
    align_self = "";
    function updateResult() {
            var flex_container_code = '\n.flex-container {\n'
                + flex_display
                +flex_direction
                +flex_wrap
                + align_items
                + justify_content
                + align_content
                + align_self
                + '}\n';
            var flex_item_code = '.flex-item {\n'
                + align_self
                + '}';

            var style = flex_container_code + '\n' +  flex_item_code;

            $("#demo_styles").html(style);
        }

    updateResult() ;
    $("#flexDisplay").on("change", function(){
    	var display = $('#flexDisplay option:selected').val();
	$(".flex-container").css('display', display);
	console.log("abc" + display);
	console.log("abctyuyt");
            flex_display = '\tflex_display: ' + $('#flexDisplay option:selected').val() + ';\n\t';
            updateResult();

    });
    $("#flexDirection").on("change", function(){
    	var display = $('#flexDirection option:selected').val();
    	$(".flex-container").css('flex-direction', display);
            $('.flexContainerCode').append('    flex-direction: ' + display + ';');
            flex_direction = 'flex-direction: ' + $('#flexDirection option:selected').val() +';\n\t';
            updateResult();
    });
     $("#flexWrap").on("change", function(){
    	var display = $('#flexWrap option:selected').val();
    	$(".flex-container").css('flex-wrap', display);
            flex_wrap= 'flex-wrap: ' + $('#flexWrap option:selected').val() +';\n\t';
            updateResult();
    });
     $('.add').on("click", function(e){
     	var item = $(".flex-container .flex-item:last-child");
     	content = parseInt(item.text()) + 1;
     	var newItem = item.clone();
     	newItem.text(content);
     	$(".flex-container").append(newItem);
            e.preventDefault();
            e.stopPropagation();
     })
     $('.minus').on("click", function(e){
     	if($(".flex-container .flex-item").length>1){
     		var item = $(".flex-container .flex-item:last-child");
     		item.remove();
     	}
            e.preventDefault();
            e.stopPropagation();
            //$('.minus').toggleClass('background-yellow');
     })
     $("#justifyContent").on("change", function(){
    	var display = $('#justifyContent option:selected').val();
    	$(".flex-container").css('justify-content', display);
            justify_content = 'justify-content: ' + $('#justifyContent option:selected').val() +';\n\t';
            updateResult();

    });
     $("#alignItems").on("change", function(){
    	var display = $('#alignItems option:selected').val();
    	$(".flex-container").css('align-items', display);
            align_items = 'align-items: ' + $('#alignItems option:selected').val() +';\n\t';
            updateResult();
    });
     $("#alignContent").on("change", function(){
        var display = $('#alignContent option:selected').val();
        $(".flex-container").css('align-content', display);
        align_content = 'align-content: ' + $('#alignContent option:selected').val() +';\n\t';
        updateResult();
    });
     function setValueOrder(){
            var option ='';
            for(i=1; i<=$(".flex-container .flex-item").length;i++){
                    option += "<option>" + i + "</option>";
            }
            $('#flexOrderItem').html(option);
            console.log(option);
     }
     setValueOrder();
     function selectAlignSelf(){
            $("#flexOrderItem").on("change", function(){
                    var display = $('#flexOrderItem option:selected').val() -1;
                    var alignself = $("#alignSelf option:selected").val();
                    var newValue = $(".flex-container .flex-item:eq(" + display + ")").css('align-self', alignself);
                    align_self = 'align-self: ' + $('#alignSelf option:selected').val() +';\n\t';
                    updateResult();
                    //$("#alignelf option:eq(" + display + ")").attr('selected','selected');
            });
            $("#alignSelf").on("change", function(){
                    var display = $('#flexOrderItem option:selected').val() -1;
                    var alignself = $("#alignSelf option:selected").val();
                    var newValue = $(".flex-container .flex-item:eq(" + display + ")").css('align-self', alignself);
                    align_self = 'align-self: ' + $('#alignSelf option:selected').val() +';\n\t';
                    updateResult();
                    //$("#alignelf option:eq(" + display + ")").attr('selected','selected');
            });
     }
     selectAlignSelf();


});