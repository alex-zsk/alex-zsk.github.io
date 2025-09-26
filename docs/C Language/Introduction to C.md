

# Introduction to C Language



## What is C Language

C 語言是一門比較底層的編程語言，可以控制底層硬件和高效的運行效率，因此很多知名的系統和軟件都是用 C 語言編寫，比如 Windows 、MacOS，就連 Python 主要使用解釋器 CPython 也是用 C 語言開發。

## Basic Rules

1. C 語言是大小寫敏感 (case sensitive)，即 `Printf`不等於 `printf`，大小寫不能混用，否則會報錯；
2. 在 C 語言中，縮進 (indentation) 只是為了便於閱讀，通常不會對程序產生影響，但依舊建議正確使用縮進，方便程序編寫和 debug；
3. 除非是特定語法要求，否則在程序裡面的空格、空行通常是不影響程序運行，但依舊建議在多行代碼中善用空行作為分隔，以便於閱讀

## Basic Structures

```c
#include <stdio.h> 

int main() { 
    printf("Hello World!");
    // Or other instructions
    return 0;
}
```

- `#include <stdio.h>` : 告訴編譯器需要加載什麼標準庫 (standard libraries)，如同加載插件，通常放置在程序的開頭
  - `stdio` : “std” 是 standard，”io” 是 input and output 

- `int` : 用來指定返回 (return) 值的數據類型 (data type)，這次是 `return 0`，所以返回的數據類型是 integer 
- `main()` ：
  - main 函數是整個程序的入口點，即一開始執行的函數，每個程序只有一個 main 函數
  - `main()`中的括號 `()` 是用於傳入參數 (parameters)，這個程序括號是空的代表不接受外部傳入的參數（參數傳入日後再談，現在可以忽略），有時我們會見到 `main(void)`，`void`通常代表不接受外部傳入的參數
- `{}`：花括號用於包裹實現這個函數功能的具體代碼
- `printf`是指在屏幕上顯示文字，每一個完整語句後面都要加上 `;`
- `return 0` 是指返回一個整數 (integer) 值 `0`，`0` 通常表示程序成功執行，在 main 函數是可以省略的，因為編譯器會自動添加 `return 0`，但依舊建議寫上 `return 0`
  - `return`後面的內容不會被程序執行

## Basic Syntax

### Console Output (`printf`)

1. `printf` 是 print 和 formatted 的縮寫，意思是格式化打印；
2. `printf("The text you want to output.");`文字必須要用 雙引號（`“”`）包裹，代表是字符串常量 (string constant)；
3. 由於 C 語言中，`printf`不會自動換行，如果要每次輸出都新開一行，我們要使用轉義符 (escape character)，這個是在字符串中有特殊含義的字符，常用的有 `/n`，代表換新行。

```c
#include <stdio.h>

int main() {
    printf("It is a string.");
    printf("It doesn't insert a new line.");

    printf("\nIt is a string.\nIt is a new line.");
    return 0;
}
```

輸出結果：

```
It is a string.It doesn't insert a new line.
It is a string.
It is a new line.
```

### Variables

變量 (variable) 是編程語言的一個重要概念，它就像一個儲物櫃，裡面儲存不同類型的值。

每一個變量都必須由變量名 (variable name) 和數據類型 (data type) 組成，就如同儲物櫃也有不同編號和不同種類。變量不可以存儲不同數據類型的值，比如 integer 類型不能儲存字符串 (string)。

:::info

我們有時會發現他人用 identifier 指代 variable name，其實識別符 (identifier) 是對變量名、函數名 (function name) 等的統稱。所以在有些時候，變量名 (variable name) 與 識別符 (identifier) 是可以混用的。

:::

同時，在使用變量前，我們都必須定義變量 (declare variable)，否則程序就會找不到要使用的變量名，產生報錯。強烈建議

在 C 語言中，我們可以每行定義一個變量，也可以每行定義多個變量，同時我們在定義變量時，也可以選擇賦不賦值 (assign)。並且，在賦值後，我們也可以修改變量的值。

```c
int main() { // 由於不涉及到 input and output 或其他外部庫，可以不用添加 #include <stdio.h>
    int a; // 每行定義一個變量
    int a = 6; // 賦值 a 為 6
    
    int b, c; // 每行定義多個變量，用逗號隔開
    int d = 5; // 賦值 d 為 5
    
    d = 7; // 修改 d 為 7
    return 0;
}
```

變量一大用處就是可以自動調整程序輸出的內容，例如當我們使用 `printf`時，我們可以調用變量來自動調整輸出內容。

在 C 語言中調用變量，我們需要使用格式說明符 (format specifiers)，本質上屬於變量的佔位符 (placeholder)，用來告訴電腦變量應該放在哪個位置上。integer 的格式說明符是 `%d`。

格式如下：

```c
printf("text... <%format_specifiers_1> text... <%format_specifiers_2>", variable_name_1, variable_name_2);
```

格式說明符是包裹在雙引號內，代表它是字符串的一部分，之後通過`,`隔開字符串和變量名，一行可以輸出多個變量。

每個變量名跟格式說明符是一對一的關係，從左到右按序調用。

```c
#include <stdio.h>
int main() {
    int d = 5; 
    printf("Before modification: %d", d);
    d = 7;
    printf("\nAfter modification: %d", d);
    // 同時輸出多個變量
    int a = 1;
    printf("\na = %d; b=%d", a, d);
    return 0;
}
```

輸出結果：

```
Before modification: 5
After modification: 7
a = 1; b=7
```

#### Naming Guidelines of Identifiers

1. **不可以** 與保留字 (reserved words) / 關鍵詞 (keywords) 相同，即在 C 語言中有特殊意思的詞語，例如 `int`、`return`等；
   1. 有些有標准用途的詞語（例如 `main`、`printf`）稱為 predefined identifiers，也強烈不建議作為識別符 (identifier)，以免使程序混淆；
2. 只能包含字母 (A - Z)、數字 (0 - 9) 和下劃線 (`_`)；
3. **不可以** 以數字開頭

為方便程序維護，編程社區也訂立命名規范供程序員遵守：

1. 清晰易懂、有意義：使他人一眼就看明白標識符的用途；
2. 保持一致性：程序內使用的命名規則應該是統一的：
   1. 使用下劃線分隔字母：如 `class_num`；
   2. 小駝峰命名法，除首個單詞外，每個單詞的首字母大寫：如 `classNum`；
3. 整個名字不全部大寫：全大寫是用來表示 constant

### Console Input (`scanf`)

一個程序除了輸出內容，它也要能夠接收用戶輸入的值。在 C 語言中，`scanf`用作接收用戶輸入的值。

`scanf`需要使用格式說明符 (format specifiers) 來控制傳入的值，並用雙括號包裹。雙括號外面跟著 `&<variable name>`代表輸入的值傳入到指定的變量名中。要注意的是，變量需要在 `scanf`之前定義。

另外，`scanf` 支持一次性輸入幾個值，使用空格隔開多個輸入值即可。

由於 C 語言中， `printf`並不支持自動換行，所以我們可以使用 `printf`作為提示用戶輸入的文字。

```c
#include <stdio.h>

int main() {
    int user_input; // 定義變量 user_input
    printf("Please input: ");
    scanf("%d", &user_input); // 獲取用戶輸入
    
    printf("User inputs %d\n", user_input);
    
    int user_input_1, user_input_2;
    printf("Please input 2 number: ");
    scanf("%d%d", &user_input_1, &user_input_2); // 一次性獲取兩個用戶輸入
    
    printf("First user inputs %d\nSecond user inputs %d ", user_input_1, user_input_2);
    
    return 0;
}
```

## Reference

1. [C 语言的基本结构 | 你必须熟练的让人心疼_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1L4z3YaENw?p=5)
2. Lecture Note (01b. C Language Basics)
3. [C Format Specifiers](“https://www.w3schools.com/c/c_variables_format.php”)
4. 

