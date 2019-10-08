def nthFib(num)
    if num == 1
      return 0
    end 
    
    if num == 2 or num == 3
      return 1
    end 
  
    currentVal = 2
    prevVal = 1
    nextVal = 0
  
    while num > 4
      nextVal = prevVal + currentVal
      prevVal = currentVal
      currentVal = nextVal
      num = num - 1
    end 
      return currentVal
  end 