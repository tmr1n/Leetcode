var createCounter = function(n) {
    let tmp = n
       let firstCall = true
        return function() {
            if(firstCall){
                firstCall = false
                
            } else{
                tmp++
            }
            return console.log(tmp)
        };    
        
        
    };
    //Учитывая целое число n, верните функцию счетчика. Эта функция счетчика изначально возвращает n, а затем возвращает на 1 больше предыдущего значения при каждом последующем вызове (n, n + 1, n + 2 и т.д.).
     
     const counter = createCounter(10)
     counter() // 10
     counter() // 11
     counter() // 12
     