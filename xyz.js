console.log("\n");
for (let i = 3; i <= 30; i++) {
    console.log("<ShowBothTotalBelowButton elementNo={"+i+"} total={withoutMotorisationTotal"+i+"} grandTotal={currentBlindWidth"+i+" && currentBlindDepth"+i+" ? parseFloat(withoutMotorisationTotal"+i+" + selectedMotorTypeExcelValue + selectedPowerTypeExcelValue + selectedReceiverTypeExcelValue + selectedRemoteTypeExcelValue + selectedOtherTypeExcelValue).toFixed(2) : '0.00'} />");
}




console.log("\n");