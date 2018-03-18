(function($,doc,win) {
	win.App = win.App || {};
	$.extend(true, App, {
		_q: [],
		window: $(win),
		document: $(doc),
		page: $('html, body'),
		body: $('body'),
		_currentNiche: App._currentNiche || 0,
		initLine: function(){
        	
		},
		initApp: function() {
			//App.initLine();
		}
	});
	App.initApp();
})(jQuery,document,window);




//App._q.push(function(){
// App.init();
//});