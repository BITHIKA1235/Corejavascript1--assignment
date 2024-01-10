var payment="Credit"
switch(payment){
    case "Credit":
        console.log("PROCESSING FEE,2%")
        break;
    case "Debit":
        console.log("PROCESSING FEE 1.5")
        break;
    case "Paypal":
        console.log("PROCESSING FEE 3")
        break;
    default:
        console.log("invalid case");
}
       
