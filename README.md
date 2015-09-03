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
