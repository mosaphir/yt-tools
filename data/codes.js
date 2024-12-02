const codeSnippets = {
  JavaScript: `function fibonacci(n) {
  let a = 0, b = 1, c;
  if (n <= 0) return a;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacci(20));`,
  
  Python: `def fibonacci(n):
    a, b = 0, 1
    if n <= 0:
        return a
    for i in range(2, n + 1):
        a, b = b, a + b
    return b

print(fibonacci(20))`,

  C: `#include <stdio.h>

int fibonacci(int n) {
    int a = 0, b = 1, c;
    if (n <= 0) return a;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    printf("%d", fibonacci(20));
    return 0;
}`,
  
  Java: `public class Fibonacci {
    public static int fibonacci(int n) {
        int a = 0, b = 1, c;
        if (n <= 0) return a;
        for (int i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(20));
    }
}`,
  
  Go: `package main
import "fmt"

func fibonacci(n int) int {
    a, b := 0, 1
    if n <= 0 {
        return a
    }
    for i := 2; i <= n; i++ {
        a, b = b, a + b
    }
    return b
}

func main() {
    fmt.Println(fibonacci(20))
}`,
  
  PHP: `<?php
function fibonacci($n) {
    $a = 0;
    $b = 1;
    if ($n <= 0) return $a;
    for ($i = 2; $i <= $n; $i++) {
        $c = $a + $b;
        $a = $b;
        $b = $c;
    }
    return $b;
}

echo fibonacci(20);
?>`,
  
  Ruby: `def fibonacci(n)
    a, b = 0, 1
    if n <= 0
        return a
    end
    for i in 2..n
        a, b = b, a + b
    end
    return b
end

puts fibonacci(20)`,
  
  Kotlin: `fun fibonacci(n: Int): Int {
    var a = 0
    var b = 1
    if (n <= 0) return a
    for (i in 2..n) {
        val temp = a + b
        a = b
        b = temp
    }
    return b
}

fun main() {
    println(fibonacci(20))
}`,
  
  Rust: `fn fibonacci(n: i32) -> i32 {
    let mut a = 0;
    let mut b = 1;
    if n <= 0 {
        return a;
    }
    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    b
}

fn main() {
    println!("{}", fibonacci(20));
}`,
  
  Swift: `func fibonacci(n: Int) -> Int {
    var a = 0, b = 1
    if n <= 0 {
        return a
    }
    for _ in 2...n {
        let temp = a + b
        a = b
        b = temp
    }
    return b
}

print(fibonacci(20))`,
  
  TypeScript: `function fibonacci(n: number): number {
    let a = 0, b = 1;
    if (n <= 0) return a;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacci(20));`,

};

export default codeSnippets;
