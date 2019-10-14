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
def printIt(a)
  l = a.length
  while l > 0
    print(" #{a[l - 1]} is number #{l}" )
    l = l - 1
  end
  return 
end

printIt([1,3,5,6]) 
:48

  def concatArrays(*a)
    combinedArrays = []
      if a.length == 0
        return 'no arrays to combine'
      end 
  
      while a.flatten! != nil
        a.flatten
      end 
  
    combinedArrays = a
    return combinedArrays
  end 

def printIt(a)
  l = a.length
  while l > 0
    print(" #{a[l - 1]} is number #{l}" )
    l = l - 1
  end
  return 
end

printIt([1,3,5,6])


numbers = [1.0,2.3,2,3,4.9,5]


def round_nums(numbers)
  a = Array.new
  numbers.each do |num|
  num = num.floor
  a << num

  end
  return a
end 

