	var sessionModule = angular.module('sessionModule',[]);
		sessionModule.controller("sessionController",function ($scope) {
			$scope.employees = [
				{code: 1, fullname:'Vanessa Barros', email:'vanessalarissa3862@gmail.com', telephone:'81 9 8555 9898'},
				{code: 2, fullname:'Erika Verônica', email:'erikaver@hotmail.com', telephone:'81 9 8588 8798'},
			];

			$scope.sessions = [
				{code: 1, sectionname:'Programação', selecttimes:'02/02/2012', employee:{code: 1, fullname:'Vanessa Barros', email:'vanessalarissa3862@gmail.com', telephone:'81 9 8555 9898'}},
				{code: 2, sectionname:'Planejamento', selecttimes:'18/06/2000', employee:{code: 2, fullname:'Erika Verônica', email:'erikaver@hotmail.com', telephone:'81 9 8588 8798'}},
			];

			$scope.select = function(selectSession){
					$scope.session = selectSession;

			}

				$scope.clean = function(){

					$scope.session = null;
				}

				$scope.savefile = function(){
					$scope.sessions.push($scope.session);
					$scope.clean();
				}
				
				$scope.delete = function(){
					$scope.sessions.splice($scope.sessions.indexOf($scope.session),1);
					$scope.clean();
				}


		});
