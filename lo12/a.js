// var a1= 1;
// var a2= 2;
// var a3= 3;
// var a4= 4;
// var a5= 5;
// var a6= 6;

// document.write("내가 선택한 숫자:"+a1+a2+a3+a4+a5+a6)
// document.write("<br>")


var a = [0, 0, 0, 0, 0, 0];
a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;
a[4] = 5;
a[5] = 6;


var r = [0, 0, 0, 0, 0, 0];
// r[0]=1;
// r[1]=2;
// r[2]=3;
// r[3]=4;
// r[4]=5;
// r[5]=6;




r[0] = Math.floor(Math.random() * 45 + 1);
document.write(r[0]);
document.write("<br>");


while (true) {
    r[1] = Math.floor(Math.random() * 45 + 1);
    if (r[1] != r[0]) {
        document.write(r[1]);
        document.write("<br>");
        break;
    }
}

while (true) {
    r[2] = Math.floor(Math.random() * 45 + 1);
    if (r[2] != r[0] && r[2] != r[1]) {
        document.write(r[2]);
        document.write("<br>");
        break;
    }
}

while (true) {
    r[3] = Math.floor(Math.random() * 45 + 1);
    if (r[3] != r[2] && r[3] != r[1] && r[3] != r[0]) {
        document.write(r[3]);
        document.write("<br>");
        break;
    }

}
while (true) {
    r[4] = Math.floor(Math.random() * 45 + 1);
    if (r[4] != r[3] && r[4] != r[2] && r[4] != r[1] && r[4] != r[0]) {
        document.write(r[4]);
        document.write("<br>");
        break;
    }
}

while (true) {
    r[5] = Math.floor(Math.random() * 45 + 1);
    if (r[5] != r[4] && r[5] != r[3] && r[5] != r[2] && r[5] != r[1] && r[5] != r[0]) {
        document.write(r[5]);
        document.write("<br>");
        break;
    }
}



//보너스 숫자
var b= 0
while (true) {
    b = Math.floor(Math.random() * 45 + 1);
    if (b != r[5] && b != r[4] && b != r[3] && b != r[2] && b != r[1] && b != r[0]) {
        document.write("보너스:"+b);
        document.write("<br>");
        break;
    }
}





var win = 0;
for (var i = 0; i <= 5; i = i + 1) {
    for (var j = 0; j <= 5; j = j + 1) {
        if (a[i] == r[j]) {
            win = win + 1
        }
    }
}

var str = "";
switch (win) {
    case 0:
    case 1:
    case 2:
        str = "꽝";
        break;
    case 3:
        str = "5등";
        break;
    case 4:
        str = "4등";
        break;
    case 5:
        str = "3등";
        for(i=0;i<=5;i=i+1){
            if(b==a[i]){
                str = "2등"
            }
        }
        break;
    case 6:
        str = "1등";
        break;
}







//아래의 방법도 가능
// if(win==0 || win==1 ||win==2){
//     document.write("꽝")
//     document.write("<br>")
// }
// if(win==3){
//     document.write("5등")
//     document.write("<br>")
// }
// if(win==4){
//     document.write("4등")
//     document.write("<br>")
// }
// if(win==5){
//     document.write("3등")
//     document.write("<br>")
// }
// if(win==6){
//     document.write("1등")
//     document.write("<br>")
// }





// if(a[0]==r[0]){
//     win = win+1
// }
// if(a[0]==r[1]){
//     win = win+1
// }
// if(a[0]==r[2]){
//     win = win+1
// }
// if(a[0]==r[3]){
//     win = win+1
// }
// if(a[0]==r[4]){
//     win = win+1
// }
// if(a[0]==r[5]){
//     win = win+1
// }


// if(a[1]==r[0]){
//     win = win+1
// }
// if(a[1]==r[1]){
//     win = win+1
// }
// if(a[1]==r[2]){
//     win = win+1
// }
// if(a[1]==r[3]){
//     win = win+1
// }
// if(a[1]==r[4]){
//     win = win+1
// }
// if(a[1]==r[5]){
//     win = win+1
// }


// if(a[2]==r[0]){
//     win = win+1
// }
// if(a[2]==r[1]){
//     win = win+1
// }
// if(a[2]==r[2]){
//     win = win+1
// }
// if(a[2]==r[3]){
//     win = win+1
// }
// if(a[2]==r[4]){
//     win = win+1
// }
// if(a[2]==r[5]){
//     win = win+1
// }


// if(a[3]==r[0]){
//     win = win+1
// }
// if(a[3]==r[1]){
//     win = win+1
// }
// if(a[3]==r[2]){
//     win = win+1
// }
// if(a[3]==r[3]){
//     win = win+1
// }
// if(a[3]==r[4]){
//     win = win+1
// }
// if(a[3]==r[5]){
//     win = win+1
// }


// if(a[4]==r[0]){
//     win = win+1
// }
// if(a[4]==r[1]){
//     win = win+1
// }
// if(a[4]==r[2]){
//     win = win+1
// }
// if(a[4]==r[3]){
//     win = win+1
// }
// if(a[4]==r[4]){
//     win = win+1
// }
// if(a[4]==r[5]){
//     win = win+1
// }


// if(a[5]==r[0]){
//     win = win+1
// }
// if(a[5]==r[1]){
//     win = win+1
// }
// if(a[5]==r[2]){
//     win = win+1
// }
// if(a[5]==r[3]){
//     win = win+1
// }
// if(a[5]==r[4]){
//     win = win+1
// }
// if(a[5]==r[5]){
//     win = win+1
// }

document.write("맞은개수:" + win)
document.write("<br>")




document.write(str)
document.write("<br>")






