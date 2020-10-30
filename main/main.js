module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';
};

function printReceipt(arr) { 

    var obj = arr;

    for (var i = 0; i < obj.length; i++) {
        console.log("Name " + i + ": " + obj[i].Barcode);
    }
    
    let data = JSON.stringify(arr);  
    
    fs.writeFileSync('file.json', data, finished);
    
    $.getJSON('file.json', function (data) {
        
        var items = data.response.venue.receipts.items;           
    
        console.log("Name:" + name + "Quantity:" + Quantity+'Unit price:'+UnitPrice+'Subtotal:'+Subtotal);
        
    });
 
   
  }