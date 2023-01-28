
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
    akshay.deposit(depositValue)
    balanceEl.innerHTML= `<p>Current Balance is ${akshay.balance}$</p>`
}

withdrawBtnEl.onclick=()=>{
    withdrawAmt=prompt('Enter the amount to withdraw')
    if(akshay.balance>=withdrawAmt){
        akshay.withdraw(withdrawAmt)
        balanceEl.innerHTML=`<p>Current Balance is ${akshay.balance}$<p>`
    }else{
        balanceEl.innerHTML=`<p style='color:red' >You do not have sufficient balance to withdraw funds<p>
        <br>
        <p>Current Balance is ${akshay.balance}$ `
        
    }
}