//Credit goes to Javascript Cookbook and Douglas Crockford

function walkTheDOM(node, func){
	func(node);
	node = node.firstChild;
	while (node) {
		walkTheDOM(node, func);
		node = node.nextSibling;
	}
}

//Go through and unset any hiding attributes on nodes
walkTheDOM(document.body, function (node) {
	$(node).removeAttr("disabled");
	$(node).show().focus();	
	$(node).css("visibility", "visible");
	$(node).css("display", "block");
	$(node).removeClass("HiddenClass");
});
