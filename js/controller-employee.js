	var employeeModule = angular.module('employeeModule',[]);
		employeeModule.controller("employeeController",function ($scope) {
			$scope.employee = [
				{code: 1, fullname:'Vanessa Barros', email:'vanessalarissa3862@gmail.com', telephone:'81 9 8555 9898'},
				{code: 2, fullname:'Erika Verônica', email:'erikaver@hotmail.com', telephone:'81 9 8588 8798'},
			];

			$scope.select = function(selectEmployee){
					$scope.selectShow = selectEmployee;

			}

				$scope.clean = function(){

					$scope.selectShow = null;
				}

				$scope.savefile = function(){
					$scope.employee.push($scope.selectShow);
					$scope.clean();
				}
				
				$scope.delete = function(){
					$scope.employee.splice($scope.employee.indexOf($scope.selectShow),1);
					$scope.clean();
				}


		});
