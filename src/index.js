(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.concat = function (inTarget) {
    var i, length;
    var j, count, item;
    var args = arguments;
    var target = inTarget || [];
    for (i = 1, length = args.length; (item = args[i]), i < length; i++) {
      for (j = 0, count = item.length; j < count; j++) {
        target.push(item[j]);
      }
    }
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.concat;
  }
})();
