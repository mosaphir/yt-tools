const codeSnippets = {
  JavaScript: `function greet(name) {
  console.log("Hello, " + name + "!");
}`,
  Python: `def greet(name):
    print(f"Hello, {name}!")`,
  C: `#include <stdio.h>
void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}`,
  Java: `public class Main {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}`,
  Go: `package main
import "fmt"
func greet(name string) {
    fmt.Printf("Hello, %s\\n", name)
}`,
  PHP: `<?php
function greet($name) {
    echo "Hello, " . $name . "!";
}`,
  Ruby: `def greet(name)
  puts "Hello, #{name}!"
end`,
  Kotlin: `fun greet(name: String) {
    println("Hello, $name!")
}`,
  Rust: `fn greet(name: &str) {
    println!("Hello, {}!", name);
}`,
  Swift: `func greet(name: String) {
    print("Hello, \\(name)!")
}`,
  TypeScript: `function greet(name: string): void {
  console.log("Hello, " + name + "!");
}`,
};

export default codeSnippets;
