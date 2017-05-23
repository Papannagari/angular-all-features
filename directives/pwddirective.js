app.directive('pwCheck', function () {
//	alert("11111")
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        console.log("checkjhhh"+firstPassword);
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
  });


