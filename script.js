

function init(){
    document.getElementById('loading').style.visibility="hidden";
    document.getElementById('main-container').style.visibility="visible";
    clock();
};

function clock(){
    var day=['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];//一周の曜日
    var month=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];//一年の月
    //角度を計算します
    var d, h, m, s;//d：日、h:時、m:分、s:秒
    d = new Date;
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    //時、分、秒、
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    
    //時間表示
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    if(h >= 12){
        setText('suffix', 'PM');//午後の時間
    }else{
        setText('suffix', 'AM');//午前中
    }
    
    if(h != 12){
        h %= 12;
    }
    
    setText('sec', s);
    setText('min', m);
    setText('hr', h);
    //カレンダー
    setText('day',day[d.getDay()]);
    setText('date',d.getDate());
    setText('month-year',`${month[d.getMonth()]} ${1900 + d.getYear()}年`);
    
    //秒を呼び出す
    setTimeout(clock, 1000);
    
};

function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};
window.onload=init;



//ヘッダーラッパーの変更
var imgs = document.getElementsByClassName("header");//headerに繋がる
var i = 1;
var time = 4000;//4秒後でラッパーが変更します
var imgs = [];

imgs[0] = 'images/header.jpg';
imgs[1] = 'images/header2.jpg';
imgs[2] = 'images/header3.jpg';
imgs[3] = 'images/header4.jpg';

changeImage = function(){
    document.getElementById('img').src = imgs[i];
    i++;
    if(i==4){
        i=0;
    } 
}
setInterval(changeImage,time);









