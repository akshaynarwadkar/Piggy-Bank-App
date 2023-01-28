
class Bank{
    constructor(balance){
        this.balance=balance
    }
    deposit(amt){
        this.balance+=Number(amt)
    }
    withdraw(amt){
            this.balance-=amt  
    }
}

const akshay=new Bank(0)


const depositBtnEl=document.getElementById('depositBtn')
const withdrawBtnEl=document.getElementById('withdrawBtn')

const balanceEl=document.getElementById('balance')

depositBtnEl.onclick=()=>{
    depositValue=prompt('Enter amount to deposit')
    if(depositValue===''){
        balanceEl.innerHTML= `<p style='color:red' >Enter valid amount to deposit</p>
    <br>
    <p><b>Current Balance</b> is ${akshay.balance}$</p>`
    }else if(depositValue===null){
        balanceEl.innerHTML=`<br><br>
        <p><b>Current Balance</b> is ${akshay.balance}$</p> `
    }
    
    else{
        akshay.deposit(depositValue)
        balanceEl.innerHTML= `<p style='color:Blue' >Amount deposited ${depositValue}$</p>
        <br>
        <p><b>Current Balance</b> is ${akshay.balance}$</p>`
    }
   
}

withdrawBtnEl.onclick=()=>{
    withdrawAmt=prompt('Enter the amount to withdraw')
    if(withdrawAmt===''){
        balanceEl.innerHTML=`<p style='color:red' >Enter valid amount to withdraw </p>
        <br><p><b>Current Balance</b> is ${akshay.balance}$<p>`
    }else if(withdrawAmt===null) {
        balanceEl.innerHTML=`<br><br>
        <p><b>Current Balance</b> is ${akshay.balance}$</p> `
    }
    
    else if(akshay.balance>=withdrawAmt){
        akshay.withdraw(withdrawAmt)
        balanceEl.innerHTML=`<p style='color:red' >Amount withdrawn ${withdrawAmt}$ </p>
        <br><p><b>Current Balance</b> is ${akshay.balance}$<p>`
    }else if(akshay.balance<=withdrawAmt){
        balanceEl.innerHTML=`<p style='color:red' >You do not have sufficient balance to withdraw funds<p>
        <br>
        <p><b>Current Balance</b> is ${akshay.balance}$</p> `
        
    }
}