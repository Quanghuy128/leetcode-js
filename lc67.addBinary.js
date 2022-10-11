var addBinary = function(a, b) {
    a = a.split("")
    b = b.split("")
    if(a.length>b.length){
        for (;b.length < a.length;) {
            b.unshift('0')
        }
    }else if(a.length<b.length){
        for (;a.length < b.length;) {
            a.unshift('0')
        }
    }
    let c = []
    let remain = 0
    for (let i = a.length-1; i >=0; i--) {
        if(remain == 0){
            if(a[i]=='0'&&b[i]=='0'){
                c[i] = '0'
            }else if(a[i]=='1'&&b[i]=='0' || b[i]=='1'&&a[i]=='0'){
                c[i] = '1'
            }else if(a[i]=='1'&&b[i]=='1'){
                c[i] = '0'
                remain = 1;
            }
        }else{
            if(a[i]=='0'&&b[i]=='0'){
                c[i] = '1'
                remain = 0
            }else if(a[i]=='1'&&b[i]=='0' || b[i]=='1'&&a[i]=='0'){
                c[i] = '0'
            }else if(a[i]=='1'&&b[i]=='1'){
                c[i] = '1'
            }
        }
        
    }
    if(remain==1) c.unshift('1')
    c = c.join('')
    return c
    
};
console.log(addBinary("11","1"))
console.log(addBinary("11","1111"))