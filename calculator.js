$(document).ready(function () {
    
    var num=""
    
    var opr="";
    //var num2
    var oprr=""
    var con_opr=[]
  
    var temp=""
    var dec=0;
    var num_length
    var j=0
    var con_opr_len
   


$(".input_field").keyup(function () { 
   
    num=$(this).val()
    console.log(num)
});













$(".button").on('click',function () { 
  
    var value=$(this).attr('value');
    console.log(this)
    num+=value
    console.log(num)





//     var check_firstopr = num[0].includes(oprr)
//     {console.log(check_firstopr);}
//     if((num.includes('+')||num.includes('-')||num.includes('*')||num.includes('/')) || (check_firstopr=='true'))
//     {
//     console.log("ffffffff");
   
//     num2+=value
    
//     console.log(num2);
//     //len=num1.length;
//     //console.log(num2)
  
//     //$(".input_field").append("value");
//     $(".input_field").val(num);
//     }
// else{
//     console.log("ggggggg")
//     num1+=value
//     console.log(num1);
//     // len=num1.length;
//     // console.log(len)
  
    //$(".input_field").append("value");
    $(".input_field").val(num);
// }


});



$(".operator").click(function () { 
    
    opr=$(this).attr('value')
    num+=opr
   // console.log(opr)
    oprr+=opr
    //num2+=opr
    console.group(this)
    //console.log(con_opr)
    $(".input_field").val(num)
    
});


//back
$(".back").click(function () { 
   
    var in_len=num.length
    console.log(in_len);
    // for(var i=0;i<in_len;i++){
    // var res=num[i-1]
    // console.log(res)
    // $(".input_field").val(res)
// }
num=num.slice(0,-1)
$(".input_field").val(num)

});





//clear button
$("#clear").click(function () { 
  
    num=""
    dec=0
    temp=""
    oprr=""
    con_opr=[]
    j=0
    $(".input_field").val(num);
    $(".result_field").val(num);
});




//equal button
$(".equal").click(function () { 
   
    var equall=$(this).val()
    console.log(equall)

//console.log(oprr);
    // //point conversion
    num_length=num.length
   for (var i=0;i<num_length;i++)
   {
    if (num[i]=="+" || num[i]=="/" || num[i]=="*" || num[i]=="-" )
    {
        //console.log(num[i])
        
        con_opr.push(num[i])
        console.log(con_opr)
        
    }
    //console.log(num[i]);
   }
if(con_opr.length==1)
{
    var numbers=num.split(con_opr)
   console.log(numbers)
   $.each(numbers, function (index, value) { 
    console.log(value)
    if(value==""){
        value="0"
        temp+=con_opr[j]
        j+=1
    }
    console.log(value.length)
    for(var i=0;i<value.length;i++)
   {
     console.log(value[i])
       if(value[i]==".")
       {
           dec+=1
           if(dec<=1)
           {
               
               temp+=value[i]
                            
           }       
               else
               {
                  dec-=1 
                 continue;
                 
               }
       }
       else
       {
           temp+=value[i]
       }

       
}
   
   
   
   //console.log(con_opr,'das',temp,j)
  
   
   dec-=1
   console.log(con_opr)
   if(j<con_opr.length)
   temp+=con_opr[j]
   j+=1
   
   //console.log(temp,'asasas')
console.log(temp,j)
});
}



else
{
    console.log("asfa")
    con_opr_len=con_opr.length
    console.log(con_opr_len)
var numbers=num.split(/[\/\+\-\*]/)
console.log(numbers)
$.each(numbers, function (index, value) { 
     console.log(value)
     if(value==""){
        value="0"
        temp+=con_opr[j]
        j+=1
    }
    else{
   
// console.log(newArray)
    
     console.log(value.length)
     for(var i=0;i<value.length;i++)
    {
      console.log(value[i],'qwert')
    
        if(value[i]==".")
        {
            dec+=1
            if(dec<=1)
            {
                
                temp+=value[i]
                             
            }       
                else
                {
                   dec-=1 
                  continue;
                  
                }
        }
        else
        {
            temp+=value[i]
        }

        

    }
    
    
    
    //console.log(con_opr,'das',temp,j)
   
    
    dec-=1
    if(j<con_opr_len){
    
    temp+=con_opr[j]
    j+=1
    }
    //console.log(temp,'asasas')
console.log(temp)
    }
});

  //  console.log(ar);

}


var temp_len=temp.length

try {
    var result=eval(temp)
    console.log(result)
    $(".result_field").val(result)
} catch (error) {
    $(".result_field").val("Syntax error")
}
 







});


});



