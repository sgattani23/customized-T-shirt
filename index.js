function validateForm() {
    var color1 = document.Form.color1.value;
    var Tagline = document.Form.Tagline.value;
    var color2 = document.Form.color2.value;
    var size = document.Form.size.value;
    var quantity = document.Form.quantity.value;
    var date = document.Form.date.value;
    var address = document.Form.address.value;
    var pincode = document.Form.pincode.value;

    // var name = document.getElementById("quantity");
    // var number = document.getElementById("colour");
    // var address = document.getElementById("address");
    // var size = document.getElementById("size");
    // var size = document.getElementById("date");

    if(Tagline==null|| Tagline==""){
        alert("Enter the Tagline!!");
        return false;
    }else if(quantity<1 || quantity==""){
        alert("Enter the Quantity!!");
        return false;
    }else if(address==""){
        alert("Enter the Address!!");
        return false;
    }else if(pincode.length!=6){
        alert("Enter valid Pincode");
        return false; 
    }else{
        alert("Order Placed successfully!");
        window.location.reload()
        alert("Order Recepit \nTagline: "+Tagline+ "\nColour of T-Shirt"+color1+ "\nColour of Tagline"+color2+ "\nAddress: "+address+ "\npincode"+pincode+ "\nSize: "+size+ "\nTotal Amount: Rs.1500");
      }

}