

//1.
var sql = require('mssql');
//2.
var config = {
    server: 'localhost',
    user: 'sa',
    password: '007',
    database: 'SoftifyPOS',
    instancename: 'SQLEXPRESS'
 
};
//3.
function loadEmployees() {
    //4.
    var dbConn = new sql.ConnectionPool(config);
    
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query("select * from tblPos_Client").then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
        }).catch(function (err) {
            //8.
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
}
//10.
loadEmployees();
