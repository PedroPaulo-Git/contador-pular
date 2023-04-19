function generate (){
n = parseInt(document.getElementById('num').value)
res = document.getElementById('valres')
vf = document.getElementById("res")
//res1 = [1 x  , n * 1 , n* 2 , n * 3 , n * 4 ,n * 5 ,n*6,n* 7,n*8,n*9,n*10]
 /*res1 = [`
Result :

${n}x2 = ${n*2} 
${n}x3 = ${n*3} 
${n}x4 = ${n*4}
${n}x5 = ${n*5}
${n}x6 = ${n*6}
${n}x7 = ${n*7}
${n}x8 = ${n*8}
${n}x9 = ${n*9}
${n}x10 = ${n*10}
`]
*/
if (n.length === 0){
alert("ERROR")

}else {
c = 1
res.innerHTML = ''

while(c <= 10){
op = document.createElement('option')
op.text = `${n} x ${c} = ${n*c}`
res.appendChild (op)
c++
}
}
}



