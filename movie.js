let age = parseInt(prompt('Input your age:'));

if(age <= 3){
    console.log('The ticket is free')
}else if(age >= 4 && age <= 12){
    console.log('The ticket is ₱10')
}else if(age >= 13 && age <= 59){
    console.log('The ticket is ₱15')
}else{
    console.log('The ticket is ₱12')
}