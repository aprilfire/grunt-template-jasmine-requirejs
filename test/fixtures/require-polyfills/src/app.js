define([], function () {
  var obj = {
    name: 'John',
    getName: function () {
      return this.name;
    }
  };
  return {getName: obj.getName.bind(obj)};
});
