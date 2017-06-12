def fibonacci(n)
  if n <= 2
    return 1
  else
    return fibonacci(n - 1) + fibonacci(n - 2)
  end
end

def fibonacci2(n)
  a = 0
  b = 1
  f = 1

  i = 2
  while i <= n do
    f = a + b
    a = b
    b = f

    i += 1
  end
  f
end

puts fibonacci(10)
puts fibonacci2(10)
