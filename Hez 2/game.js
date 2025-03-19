let excute = false
let botscore = 0
let myscore = 0

function bda(){
    document.querySelector(".msg").style = "display:none;"
    allcards = ["1 gold","2 gold","3 gold","4 gold","5 gold","6 gold","7 gold","10 gold","11 gold","12 gold","1 syof","2 syof","3 syof","4 syof","5 syof","6 syof","7 syof","10 syof","11 syof","12 syof","1 gra3","2 gra3","3 gra3","4 gra3","5 gra3","6 gra3","7 gra3","10 gra3","11 gra3","12 gra3","1 tba9","2 tba9","3 tba9","4 tba9","5 tba9","6 tba9","7 tba9","10 tba9","11 tba9","12 tba9"]
    botlist = []
    mylist = []
    l9a3alist = []
    role = 1 ;
    excute = true
    bot = document.querySelector(".bot")
    mine = document.querySelector(".mine")
    l9a3a = document.querySelector(".l9a3a")
    document.getElementById('btn').style = "display:none;"
    document.querySelector(".kolchi").innerHTML = '<img src="Moroccan card/back card.jpg" onclick="hez()" width="90px" height="120px">'
    lwst_bda()
    for(j=0;j<4;j++){
        idx = Math.floor(Math.random()*allcards.length)
        mylist.push(allcards[idx])
        allcards.splice(idx,1)
    }
    for(j=0;j<4;j++){
        idx = Math.floor(Math.random()*allcards.length)
        botlist.push(allcards[idx])
        allcards.splice(idx,1)
    }
    bayn()
    mkhbi()
    document.querySelector('.chhal').style = "display:inline-block;"
    document.querySelector('.chhal').textContent = allcards.length
}

function lwst_bda(){
    while(true){
        idx = Math.floor(Math.random()*allcards.length)
        l9a3alist.unshift(allcards[idx])
        l9a3a.innerHTML = `<img src="Moroccan card/${l9a3alist[0]}.jpg" alt="${l9a3alist[0]}" width="90px" height="120px">`
        l9 = l9a3a.querySelector('img')
        ns2 = l9.alt.split(" ")
        nm2 = ns2[0]
        if(nm2 != "1" && nm2 != "2" && nm2 != "7"){
            allcards.splice(idx,1)
            l9 = l9a3a.querySelector('img')
            ns2 = l9.alt.split(" ")
            ty2 = ns2[1]
            now3()
            break
        }
        else{
            l9a3alist = []
        }
    }
}

function now3(){
    document.querySelector(".now3").style = "display:inline-block;"
    if(ty2 == "gold"){
        document.querySelector(".now3").querySelector("img").src = "Moroccan card/gold.png"
    }
    else if(ty2 == "gra3"){
        document.querySelector(".now3").querySelector("img").src = "Moroccan card/gra3.png"
    }
    else if(ty2 == "tba9"){
        document.querySelector(".now3").querySelector("img").src = "Moroccan card/tba9.png"
    }
    else if(ty2 == "syof"){
        document.querySelector(".now3").querySelector("img").src = "Moroccan card/syof.png"
    }
}

function lwst(){
    l9a3a.innerHTML = `<img src="Moroccan card/${l9a3alist[0]}.jpg" alt="${l9a3alist[0]}" width="90px" height="120px">`
    l9 = l9a3a.querySelector('img')
    ns2 = l9.alt.split(" ")
    ty2 = ns2[1]
}

function bayn(){
    mine.innerHTML = ""
    for(i=0;i<mylist.length;i++){
        mine.innerHTML += `<img src="Moroccan card/${mylist[i]}.jpg" alt="${mylist[i]}" onclick="check(this.alt)" width="90px" height="120px">`
    }
}

function mkhbi(){
    bot.innerHTML = ""
    for(i=0;i<botlist.length;i++){
        bot.innerHTML += `<img src="Moroccan card/back card.jpg" alt="${botlist[i]}" width="90px" height="120px">`
    }
}

function hez(){
    if(excute){
        if(role%2 != 0){
            if(allcards.length == 0){
                allcards = l9a3alist
                l9a3alist = [allcards[0]]
                allcards.splice(0,1)
            }
            idx = Math.floor(Math.random()*allcards.length)
            mylist.push(allcards[idx])
            bayn()
            allcards.splice(idx,1)
            setTimeout(movebot,1000)
            document.querySelector('.chhal').textContent = allcards.length
            role++
        }
    }
}

function check(card){
    if(excute){
        l9 = l9a3a.querySelector('img')
        ns1 = card.split(" ")
        ns2 = l9.alt.split(" ")
        nm1 = ns1[0]
        nm2 = ns2[0]
        ty1 = ns1[1]
        if(role%2 != 0){
            if(nm1 == nm2 || ty1 == ty2){
            l9a3alist.unshift(card)
            idx = mylist.indexOf(card)
            mylist.splice(idx,1)
            lwst()
            bayn()
            role++
            check_win()
            if(nm1 == "1"){
                role--
            }
            else if(nm1 == "2"){
                role--
                for(i=0;i<2;i++){
                    if(allcards.length == 0){
                        allcards = l9a3alist
                        l9a3alist = [allcards[0]]
                        allcards.splice(0,1)
                    }
                    idx = Math.floor(Math.random()*allcards.length)
                    botlist.push(allcards[idx])
                    allcards.splice(idx,1)
                    document.querySelector('.chhal').textContent = allcards.length
                }
                mkhbi()
            }
            else if(nm1 == "7"){
                excute = false
                if(mylist.length != 0){
                    divimg = document.querySelector('.choose')
                    divimg.style = "display:inline-block"
                }
        }
        now3()
        setTimeout(movebot,1000)
        }
    }
}
}

function swit(ty){
    ty2 = ty
    divimg.style = "display:none"
    excute = true
    now3()
    setTimeout(movebot,1000)                        
}

function movebot(){
    if(excute){
    if(role%2 == 0){
        wh = -1
        l9 = l9a3a.querySelector('img')
        for(i=0;i<botlist.length;i++){
            ns1 = botlist[i].split(" ")
            ns2 = l9.alt.split(" ")
            nm1 = ns1[0]
            nm2 = ns2[0]
            ty1 = ns1[1]
            if(ty1 == ty2 || nm1 == nm2){
                l9a3alist.unshift(botlist[i])
                botlist.splice(i,1)
                lwst()
                wh = 1
                check_win()
                if(nm1 == "1"){
                    role--
                    again()
                }
                else if(nm1 == "2"){
                    role--
                    for(i=0;i<2;i++){
                        if(allcards.length == 0){
                            allcards = l9a3alist
                            l9a3alist = [allcards[0]]
                            allcards.splice(0,1)
                        }
                        idx = Math.floor(Math.random()*allcards.length)
                        mylist.push(allcards[idx])
                        allcards.splice(idx,1)
                        document.querySelector('.chhal').textContent = allcards.length
                    }
                    bayn()
                    again()
                }
                else if(nm1 == "7"){
                    sw = Math.floor(Math.random()*4)
                    if(sw == 1){
                        ty2 = "gold"
                    }
                    else if(sw == 2){
                        ty2 = "gra3"
                    }
                    else if(sw == 3){
                        ty2 = "tba9"
                    }
                    else if(sw == 4){
                        ty2 = "syof"
                    }
                }
                now3()
                break
                }
            }
        if(wh == -1){
            if(allcards.length == 0){
                allcards = l9a3alist
                l9a3alist = [allcards[0]]
                allcards.splice(0,1)
                }
                idx = Math.floor(Math.random()*allcards.length)
                botlist.push(allcards[idx])
                allcards.splice(idx,1)
                document.querySelector('.chhal').textContent = allcards.length
            }
            mkhbi()
            role++
            }
        }
    }

    function again(){
        setTimeout(movebot,1000)
    }
    
    function check_win(){
        setTimeout(function(){
        if(botlist.length == 0){
            botscore++
            msg = document.querySelector('.msg')
            msg.style = "display:inline-block"
            msg.innerHTML = `Bot win<br>You ${myscore} - ${botscore} Bot<br><input type="button" value="Replay" onclick="bda()">`
            excute = false
        }
        else if(mylist.length == 0){
            myscore++
            msg = document.querySelector('.msg')
            msg.style = "display:inline-block"
            msg.innerHTML = `You win<br>You ${myscore} - ${botscore} Bot<br><input type="button" value="Replay" onclick="bda()">`
            excute = false
        } 
        },1000)               
    }