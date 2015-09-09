/*
** =========================== REQUIREMENTS ======================= **
jquery-1.8+
SEARCH INPUT FIELD HAS TO HAVE CLASS ".cdctable_search"
TABLE MUST HAVE A PARENT DIV WRAPPER 


TABLE DATA PARAMETER SHOULD BE SET TO THE PARENT OF WHAT YOU WANT REMOVED. [TYPICALLY ITS THE <tr>]


EXAMPLE PLUGIN USAGE:

BASIC USAGE
|
|
|------------->$('#container').searchableTable();
						^
						|
						|
						|

				PLUGIN SELECTOR

$('#container').searchableTable({
	height : "400px",
	width  : "800px",
	scroll : "vert",
	breakpoint : 600,
	tableData : 'tbody tr'
});

PARAMETERS DEFINED:

height 		: HEIGHT OF SELECTOR,
width 		: WIDTH OF SELECTOR,
scroll 		: SCROLL BARS ON SELECTOR,
breakpoint	: WHEN TO ADD SCROLL BARS [measured in pixles of window innerwidth] (setting a break point removes double scroll bars for smaller devices),
tableData	: ELEMENT TO HIDE ON SEARCH (USUALLY tbody tr)


PARAMETERS OPTIONS:

height 		: string [px,%],
width 		: string [px,%],
scroll 		: string [vert,horz,both,none],
breakpoint	: integer,
tableData	: css selector

*/

$.fn.searchableTable = function(){
	/* SET UP GLOBAL VARIABLES */
	var plugin = this;
	var selector = plugin.selector;
	var passedArgs = arguments[0];

	/* DEFAULT SETTINGS */
	var height = "300px";
	var width = "auto";
	var scroll = "vert";
	var breakpoint = 800;
	var tableData = "tbody tr";

	/* RESET TO USER SPECIFIED PARAMS */
	for(var property in passedArgs){
		property = passedArgs[property];
	}
	
	/* SET VALUES OF VARIALBES FOR INLINE CSS USE */
	switch(scroll){
		case "vert":
		scrolldirv = "auto";
		scrolldirh = "visible";
		objwidth = "auto";
		objheight = height;
		break;
		case "horz":
		scrolldirv = "visible";
		scrolldirh = "auto";
		objwidth = width;
		objheight = "auto";
		break;
		case "both":
		scrolldirv = "auto";
		scrolldirh = "auto";
		objwidth = "auto";
		objheight = "auto";
		break;
		case "none":
		scrolldirv = "visible";
		scrolldirh = "visible";
		objwidth = "auto";
		objheight = "auto";
		break;
	}

	var pluginFunc = {
		init : function(){
			this.windowsize();
			this.searchTable();
			console.log("Searchable Table Initialized.");
			console.log(plugin);
		},
		windowsize : function(){
			if(window.innerWidth <= breakpoint){
				pluginFunc.removeStyles();
			}else{
				pluginFunc.setStyles();
			}
		},
		setStyles : function(){
			$(selector).css({
				"height": objheight,
				"width": objwidth,
				"overflow-x" : scrolldirh,
				"overflow-y" : scrolldirv,
			});
		},
		removeStyles : function(){
			$(selector).removeAttr('style');
		},
		searchTable : function(){
			$('.cdctable_search').on('keyup',function(){
				var highlight = new Array();
				var searchval = $(this).val();		
				var allCells = $(selector+' '+tableData);

				$(selector+' '+tableData).removeAttr('style');

				if (allCells.length > 0) {
					var found = false;
					allCells.each(function(index, td) {
						var regExp = new RegExp(searchval, 'i');
						if (regExp.test($(this).text())) {
							found = true;
							highlight.push($(td));
						}
					});//end each
				}
				$(selector+' '+tableData).css({'display':'none'});
				
				numFound = highlight.length;
				for(i=0; i<numFound; i++){
					$(highlight[i]).removeAttr('style');
				}
			});//end keyup
		}//end searchTable
	}//end pluginFunc
	/* initialize plugin functions */
	pluginFunc.init();
}// end plugin