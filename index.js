jQuery("document").ready(function($) {
    let val1="" , val2="" , operation , flag = 0 , res = 0 , decimal1 = 0 , decimal2 = 0;


    //digits event listeners
    $("#1").click(function(){
        if (flag == 1){
            val2 += '1';
        }
        else{
            val1 += '1';
        }
        console.log("from 1 ", flag , " " , val1 , " " , val2);
    })
    $("#2").click(function(){
        if (flag == 1){
            val2 += '2';
        }
        else{
            val1 += '2';
        }
        console.log("from 2 ", flag , " " , val1 , " " , val2);
    })
    $("#3").click(function(){
        if (flag == 1){
            val2 += '3';
        }
        else{
            val1 += '3';
        }
        console.log("from 3 ", flag , " " , val1 , " " , val2);
    })
    $("#4").click(function(){
        if (flag == 1){
            val2 += '4';
        }
        else{
            val1 += '4';
        }
        console.log("from 4 ", flag , " " , val1 , " " , val2);
    })
    $("#5").click(function(){
        if (flag == 1){
            val2 += '5';
        }
        else{
            val1 += '5';
        }
        console.log("from 5 ", flag , " " , val1 , " " , val2);
    })
    $("#6").click(function(){
        if (flag == 1){
            val2 += '6';
        }
        else{
            val1 += '6';
        }
        console.log("from 6 ", flag , " " , val1 , " " , val2);
    })
    $("#7").click(function(){
        if (flag == 1){
            val2 += '7';
        }
        else{
            val1 += '7';
        }
        console.log("from 7 ", flag , " " , val1 , " " , val2);
    })
    $("#8").click(function(){
        if (flag == 1){
            val2 += '8';
        }
        else{
            val1 += '8';
        }
        console.log("from 8 ", flag , " " , val1 , " " , val2);
    })
    $("#9").click(function(){
        if (flag == 1){
            val2 += '9';
        }
        else{
            val1 += '9';
        }
        console.log("from 9 ", flag , " " , val1 , " " , val2);
    })
    $("#0").click(function(){
        if (flag == 1){
            val2 += '0';
        }
        else{
            val1 += '0';
        }
        console.log("from 0 ", flag , " " , val1 , " " , val2);
    })


    //operations
    $("#add").click(function(){
        flag = 1;
        decimal1 = 0;
        operation = '+'
    })
    $("#mul").click(function(){
        flag = 1;
        decimal1 = 0;
        operation = '*'
    })
    $("#sub").click(function(){
        decimal1 = 0;
        flag = 1;
        operation = '-'
    })
    $("#divide").click(function(){
        decimal1 = 0;
        flag = 1;
        operation = '/'
    })

    $("#decimal").click(function(){
        decimal1 = 1;
        if (flag == 1){
            val2 += '.';
        }
        else{
            val1 += '.';
        }
        console.log("from . ", flag , " " , val1 , " " , val2);
    })

    //equal operator
    $("#equals").click(function(){
        let value1 = parseInt(val1);
        let value2 = parseInt(val2);
        if (operation == '+'){
            res = value1 + value2;
        }
        else if (operation == '-'){
            res = value1 - value2;
        }
        else if (operation == '*'){
            res = value1 * value2;
        }
        else if (operation == '/'){
            res = value1 / value2;
        }
        else{
            res = value1;
        }
        console.log(res);
       $('#ans').html(res);
    })

    $("#delete").click(function(){
        flag = 0;
        val1 = "";
        val2 = "";
        res = 0;
        operation = "";
        $('#ans').html("");
    })

    //reset operation

    $("#reset").click(function(){
        if(flag == 0){
            val1 = "";
        }
        else{
            val2 = "";
        }
    })


});