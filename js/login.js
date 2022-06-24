var app = angular.module("myapp", []);
app.controller("myctrl", function($scope, $http) {

    $scope.student = [];
    $scope.st = {};
    $http.get("/db/Students.js").then(
        function(res) {
            $scope.student = res.data;
        });
    $scope.check = function() {
        $scope.recheck();

        // tìm eleement có username thuộc trong list student
        // cái đoạn ni  là nó đã tìm giúp e rồi. nên cai if dưới là ko cần nữa.
        // nghĩa là ban đầu nó kiếm được username rồi thì nó đã xử lý check pass nữa thôi.
        // cái if dưới là ko cần nữa vì nó cheeck lại username là đã có trên rồi
        // ok
        const e = scope.student.find(elemen$t => element.username == $scope.user);

        if (e.username == $scope.user && e.password == $scope.pw) {
            // nếu e tìm đc và nó có username và password bằng với ng-model đã nhập thì chuyển trang
            window.location.href = '/Layout.html';
        } else if (e.password != $scope.pw) {
            // nếu tìm đc username nhưng password nhập vào ko đúng thì sẽ báo lỗi tương ứng
            alert("Mật khẩu sai !");
        } else {
            alert("Tài Khoản không tồn tại!");
        }
    };

    $scope.checkuser = function() {
        const el = $scope.student.find(element => element.email == $scope.e);
        if (el.username == $scope.ten && el.email == $scope.e) {
            alert("Mật khẩu của bạn là: " + el.password);
        } else {
            alert("Email hoac tên đăng nhập sai!")
        }
    };

    $scope.st.gender = "Nam";
    $scope.insert = function() {
        $scope.student.push(angular.copy($scope.st));
        alert("Đăng kí thành công!");
    };
    $scope.update = function() {
        $scope.student = angular.copy($scope.st);
    };

    $scope.recheck = function() {
        $scope.student.push(angular.copy($scope.st));
        if ($scope.user == $scope.st.name && $scope.pw == $scope.st.pass) {
            window.location.href = '/Layout.html';
        }
    }

});