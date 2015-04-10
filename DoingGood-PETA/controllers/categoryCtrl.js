// controller function for all category

app.controller("CategoryCtrl", function($scope, $state, AllCategoryService)
{
    $scope.openDeleteConfirmDialog = false;
    $scope.selected = "none";
    $scope.modalName = " Add ";
    $scope.openModal = false;
    $scope.category = {};
    $scope.position ;
    console.log("in allCategoryCtrl");
    $scope.categoryList = [];
    

    $scope.categoryList = AllCategoryService.getCategoryList();
    console.log("List: " + JSON.stringify($scope.categoryList));

       // TODO: method for get http data from server
       /*AllCategoryService.getProductsDetails(function(res,err)
       {
           if (res) {
               $scope.categoryList = res;
               console.log("List: " + JSON.stringify($scope.categoryList));
           } else {
               $scope.categoryList = [];
               alert(err);
           }
       });*/


    $scope.addNewCategory = function()
    {
        $scope.modalName = " Add ";
        $scope.openModal = true;
    }

    $scope.submitAddNewCategory = function()
    {
        if($scope.category.name != undefined || $scope.category.name != null )
        {
            AllCategoryService.addNewItem($scope.position, $scope.category);
            $scope.category = {};
            $scope.position = "";
            $state.go('/dashboard.category');
            $scope.openModal = false;
        }

    }

    $scope.cancelAddCategory = function()
    {
        $scope.openModal = false;
    }

    $scope.editCategory = function(position, category)
    {
        $scope.modalName = " Edit ";
        $scope.openModal = true;
        $scope.category = category;
        $scope.position = position;
    }

    $scope.deleteCategory = function(category)
    {
        $scope.openDeleteConfirmDialog = true;
        $scope.category = category;
    }

   
    $scope.publishStep1 = function()
    {
        $location.path("/publishFlow_step1");
    }

    $scope.selectedRow = function()
    {
        if($scope.selected === "none")
          $scope.selected = "selected";
        else
            $scope.selected = "none";
    }

    $scope.cancelDelete = function()
    {
        $scope.openDeleteConfirmDialog = false;
    }

    $scope.proceedToDelete = function()
    {
        AllCategoryService.deleteCategory($scope.category);
        $scope.openDeleteConfirmDialog = false;
    }
});