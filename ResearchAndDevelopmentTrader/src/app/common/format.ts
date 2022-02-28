export class Format {
    // formatDecimalField(info:any,field:any){
    //     const newValue = info.getChangedFieldValue(field);
    //     if (newValue != null) {
    //       var formattedVal = formatDecimal(newValue, 2, true);
    //       info.setCellValue(field,formattedVal);
    //     }
    // }
    // formatDecimal(value:any, decimals:any, keepZero:any){
    //     var mul =  new String("1");
    //     var zero =  new String("0");
    //     for (var i = decimals; i > 0; i--) {
    //       mul += zero;
    //     }
    //     value = Math.round(value * mul);
    //     value = value / mul;
    //     var strVal = new String(value);
    //     if (!keepZero) {
    //       return strVal;
    //     }
    
    //     var nowDecimals = 0;
    //     var dot = strVal.indexOf(".");
    //     if (dot == -1) {
    //       strVal += ".";
    //     } else {
    //       nowDecimals = strVal.length - dot - 1;
    //     }
    //     for (var i:any = nowDecimals; i < decimals; i++) {
    //       strVal = strVal + zero;
    //     }
    
    //     return strVal;
    // }
    // forceHighlight(info: any, isOn: any, fList: any) {
    //     for (let i = 0; i < fList.length; i++) {
    //       // all the visual fields; we can address fields by numbers as well as names
    //       info.setCellValue(fList[i], isOn ? info.getCellValue(fList[i]) : null);
    //     }
    //   }

}