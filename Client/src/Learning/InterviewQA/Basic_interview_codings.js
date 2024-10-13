import React from 'react';
import ButtonGroup from "../buttonGroup";

function Basic_interview_codings() {
    // Java code for Fibonacci Series and Palindrome check
    const javaLangFibonacciCode = [
        "public class Fibonacci {",
        "    public static void main(String[] args) {",
        "        int n = 5;",
        "        int a = 0, b = 1;",
        "        System.out.print(a + \", \" + b);",
        "        for (int i = 2; i < n; i++) {",
        "            int next = a + b;",
        "            System.out.print(\", \" + next);",
        "            a = b;",
        "            b = next;",
        "        }",
        "    }",
        "}"
    ];

    const javaLangPalindromeCode = [
        "public class Palindrome {",
        "    public static boolean isPalindrome(String str) {",
        "        int n = str.length();",
        "        for (int i = 0; i < n / 2; i++) {",
        "            if (str.charAt(i) != str.charAt(n - i - 1)) {",
        "                return false;",
        "            }",
        "        }",
        "        return true;",
        "    }",
        "    public static void main(String[] args) {",
        "        String str = \"racecar\";",
        "        System.out.println(isPalindrome(str));",
        "    }",
        "}"
    ];

    // C code for Fibonacci Series and Palindrome check
    const cLangFibonacciCode = [
        "#include <stdio.h>",
        "int main() {",
        "    int n = 5, a = 0, b = 1, next;",
        "    printf(\"%d, %d\", a, b);",
        "    for (int i = 2; i < n; i++) {",
        "        next = a + b;",
        "        printf(\", %d\", next);",
        "        a = b;",
        "        b = next;",
        "    }",
        "    return 0;",
        "}"
    ];

    const cLangPalindromeCode = [
        "#include <stdio.h>",
        "#include <string.h>",
        "int isPalindrome(char str[]) {",
        "    int n = strlen(str);",
        "    for (int i = 0; i < n / 2; i++) {",
        "        if (str[i] != str[n - i - 1]) {",
        "            return 0;",
        "        }",
        "    }",
        "    return 1;",
        "}",
        "int main() {",
        "    char str[] = \"racecar\";",
        "    if (isPalindrome(str))",
        "        printf(\"True\\n\");",
        "    else",
        "        printf(\"False\\n\");",
        "    return 0;",
        "}"
    ];

    return (
        <div className='BasicInterviewCodings'>
            <h3>Basic Interview Codings</h3>
            <p>Implementations of basic interview questions in C and Java, choose between Fibonacci Series or Palindrome check.</p>
            
            <div className='algorithm-step'>
                <h3>Fibonacci Series</h3>
                <p>Write a program to print the first n numbers in the Fibonacci series.</p>
                <ButtonGroup
                    handleLanguageChange={(language) => (`${language}`)}
                    cLangElements={cLangFibonacciCode}
                    javaLangElements={javaLangFibonacciCode}
                />
            </div>

            <div className='algorithm-step'>
                <h3>Palindrome Check</h3>
                <p>Write a function to check if a given string is a palindrome.</p>
                <ButtonGroup
                    handleLanguageChange={(language) => (`${language}`)}
                    cLangElements={cLangPalindromeCode}
                    javaLangElements={javaLangPalindromeCode}
                />
            </div>

            
        </div>
    );
}

export default Basic_interview_codings;
