/**
 * Created by Mindstix laptop7 on 06-Apr-15.
 */

app.service("AllCategoryService", function()
{
   var categoryList = [
       {"id":1, "name": "Latest", "selected":"none"},
       { "id":2, "name": "TV & Display", "selected":"none"},
       { "id":3, "name": "Smartphone", "selected":"none"},
       { "id":4, "name": "Tablets", "selected":"none"},
       { "id":5, "name": "Home Audio", "selected":"none"},
       { "id":6, "name": "Professional Audio", "selected":"none"}
    ];

    var categoryId = categoryList.length;

    // TODO: Logic for get data from server
    /*var httpCall = function (req , httpcall)
    {
        $http(req).
          success(function(data) {
            console.log("DATA: " );
            console.log(JSON.stringify(data));
            return httpcall(data,null);
          }).
          error(function(data) {
            return httpcall(null,data);
          });
    };

    this.getProductsDetails = function (cbFunction)
    {
        var req = {
          method: 'GET',
          url: 'http://localhost:51432/DoingGood-PETA/data/category.json',
          headers: {
        'Content-Type': 'application/json'
      }
        };

          httpCall(req , function (res , err) {
              if (res) {
                cbFunction(res ,null);
              }
              if (err) {
                cbFunction(null , err);
              }
          });
    };*/


    this.getCategoryList = function()
    {
        return categoryList;
    }


    this.addNewItem = function(position, category)
    {
        if(category.id == null || category.id == "")
        {
            console.log("Before categoryList");
            console.log(JSON.stringify(categoryList));
            category.id = ++categoryId;
            categoryList.splice(position, 0, category);
            console.log("After categoryList");
            console.log(JSON.stringify(categoryList));
        }
        else
        {
            for(var i in categoryList)
            {
                if(categoryList[i].id == category.id)
                {
                    categoryList.splice(i,1);
                    categoryList.splice(position, 0, category);
                    break;
                }
            }
        }
    }


    this.deleteCategory = function(category)
    {
        for(var i in categoryList)
        {
            if(categoryList[i].id == category.id)
            {
                categoryList.splice(i,1);
                break;
            }
        }
    }
});
