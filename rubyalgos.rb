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



def two_sum(nums, target)
  hash = {}
  nums.each_with_index do |num, index|
      if hash.has_key?(target - num)
        val = hash[target - num]
        return  [num, index], [hash.key(val), hash[target - num]]
      else
      hash[num] = index
    end
  end 
  return no pair 
end 



two_sum([1,2,3,4], 6)


def palFinder(strs)
  daddy_dict = {}
  strs.each do |w|
    if daddy_dict.has_key?(w.chars.sort.join)
        daddy_dict[w.chars.sort.join] = daddy_dict[w.chars.sort.join].push(w)
    else
      daddy_dict[w.chars.sort.join] = [w] 
    end 
  end 
  return daddy_dict.values
end 


def length_of_longest_substring(s)
  s = s.split('')
  longest = ''
  s.each_with_index do |letter, index|
    check = true
    x = index
    next_l = s[x]  
    ss =  ''
    while !ss.include?next_l 
      ss += next_l
      x = x + 1
      next_l = s[x]
      puts ss
      break if next_l == nil
    end
    if ss > longest
      longest = ss
    end 
  end 
  return longest.length
end

length_of_longest_substring('"abcabcbb"
')

def longest_common_prefix(strs)
  if strs.length < 2
    return ''
  end 
  pf_a = strs.sort[0].split('')
  strs.each do |string|
    sa = string.split('')
    sa.each_with_index do |letter, index|
      if pf_a[index] != letter
        pf_a = pf_a[0...index]
        break
      end
    end
   end
   print strs.sort
  return pf_a.join
end

longest_common_prefix([])