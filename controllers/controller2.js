var owner = angular.module("Owner", []);

owner.controller("OwnerCtrl", ["$scope", "$location", "$log", function($scope, $location, $log) {

    $scope.owner = {
        firstName: "",
        lastName: "",
        middleInitial: "",
        birthDate: null,
        ssn: "",
        phoneNumber: ""
    };

    $scope.formSubmitted = false;

    $scope.submit = function(form) {
        // Found this on a blog somewhere, just an attempt to FORCE form validation even
        // on elements that have never been touched by the uyser
        for (var field in form) {
            // look at each form input with a name attribute set
            // checking if it is pristine and not a '$' special field
            if (field[0] != '$' && form[field].$pristine) {
                form[field].$setViewValue(
                    form[field].$modelValue
                );
            }
        }

        $scope.formSubmitted = true;

        if (form.$invalid)
            return;
    }
}])