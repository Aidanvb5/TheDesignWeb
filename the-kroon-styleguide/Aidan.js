var Some = function (v) { return ({ kind: 'left', value: v }); };
var None = function () { return ({ kind: 'right', value: false }); };
var x = None();
var y = null;
y + 1;
