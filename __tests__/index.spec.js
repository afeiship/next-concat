(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx concat array basic case', function () {
      var arr1 = [1, 2];
      var arr2 = ['a'];
      var result = nx.concat(arr1, arr2);

      expect(result).toEqual([1, 2, 'a']);
    });

    test('nx concat array will not remove duplicate', function () {
      var arr1 = [1, 2];
      var arr2 = ['a',1];
      var result = nx.concat(arr1, arr2);

      expect(result).toEqual([1, 2, 'a',1]);
    });
  });
})();
