
    //    handle deposit balance
    document.getElementById('deposit-button').addEventListener('click', function(){
        // Get the amount Deposit 
        const dipositInput = document.getElementById('diposit-input');
        const newDipositAmountText = dipositInput.value;
        NewDipositAmount = parseFloat(newDipositAmountText);
    
        // Update Siposit Total 
        const dipositTotal = document.getElementById('diposit-total');
        const preDiposit =dipositTotal.innerText;
        const preDipositAmount = parseFloat(preDiposit);
    
        const newDipositTotal = preDipositAmount + NewDipositAmount;
    
        dipositTotal.innerText = newDipositTotal;
    
    
        // Update Balance Total 
        const balanceTotal = document.getElementById ('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const preBlanceTotal = parseFloat(balanceTotalText);
    
        const newBalanceTotal = NewDipositAmount + preBlanceTotal;
    
        balanceTotal.innerText = newBalanceTotal;
    
        // Clear the diposite Button 
        dipositInput.value = '';
        
    
        })

        // HandleTotal Balnce
        document.getElementById('widthdraw-button').addEventListener('click', function(){
        const widthdrawInput = document.getElementById('widthdraw-input');
        const widthdrawText = widthdrawInput.value ;
        const newWidthdrawAmount = parseFloat(widthdrawText);
        // Set Widthdraw Total 
        const widthdrawToal = document.getElementById ('widthdraw-total');
        const widthdrawTotalText = widthdrawToal.innerText;
        const preWidthdrawAmount = parseFloat(widthdrawTotalText);

        const NewWidthdrawTotal = preWidthdrawAmount + newWidthdrawAmount;
        widthdrawToal.innerText = NewWidthdrawTotal;

        // Update Balancec
        const balanceTotal = document.getElementById ('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const preBalanceTotalAmount = parseFloat(balanceTotalText);

        const newBalaceTotal = preBalanceTotalAmount - newWidthdrawAmount;
        balanceTotal.innerText = newBalaceTotal;
        // End widthdraw input 
        widthdrawInput.value = '';
    })