export default function() {
	var modules = {};

	window.jQuery.each(window.require.s.contexts._.defined, (name, obj) => {
		if (!obj) return;
		obj._moduleID = name;

		if (obj.dispatch)
			modules.Events = obj;
		else if (obj.attributes && obj.attributes.hostID)
			modules.currentRoom = obj;
		else if (obj._l)
			modules.currentUser = obj;
		else if (obj.getSize)
			modules.window = obj;
	});

	return modules;
}
