function GCD (num1,num2){
    while(num2){
       let temp = num2
       num2 = num1 % num2
       num1 = temp
       
    }
    console.log(num1)
}
GCD(15,5)