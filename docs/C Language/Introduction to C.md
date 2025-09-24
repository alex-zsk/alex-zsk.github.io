# Introduction to C Language



## What is C Language

C 語言是一門比較底層的編程語言，可以控制底層硬件和高效的運行效率，因此很多知名的系統和軟件都是用 C 語言編寫，比如 Windows 、MacOS，就連 Python 主要使用解釋器 CPython 也是用 C 語言開發。

## Basic Syntax & Structure

### Basic Rules

1. C 語言是大小寫敏感 (case sensitive)，即 `Printf`不等於 `printf`，大小寫不能混用，否則會報錯；
2. 在 C 語言中，縮進 (indentation) 只是為了便於閱讀，通常不會對程序產生影響，但依舊建議正確使用縮進，方便程序編寫和 debug；
3. 除非是特定語法要求，否則在程序裡面的空格、空行通常是不影響程序運行，但依舊建議在多行代碼中善用空行作為分隔，以便於閱讀
4. 程序語法所使用的符號（如 `()`、`{}`、`“”`）皆為英文符號；
5. 在寫代碼時，應該使用有意義的變量名 (identifiers) 和添加注釋 (comments)。

### Basic Structures

```c
#include <stdio.h> 

int main() { 
    printf("Hello World!");
    // Or other instructions
    return 0
}
```

- `#include <stdio.h>` : 告訴編譯器需要加載什麼標準庫 (standard libraries)，如同加載插件，通常放置在程序的開頭
  - `stdio` : “std” 是 standard，”io” 是 input and output 

- `int` : 用來指定返回 (return) 值的數據類型 (data type)，這次是 `return 0`，所以返回的數據類型是 integer 
- `main()` ：
  - main 函數是整個程序的入口點，即一開始執行的函數，每個程序只有一個 main 函數
  - `main()`中的括號 `()` 是用於傳入參數 (parameters)，這個程序括號是空的代表不接受外部傳入的參數（參數傳入日後再談，現在可以忽略）
- `{}`：花括號用於包裹實現這個函數功能的具體代碼
- `printf`是指在屏幕上顯示文字，每一個完整語句後面都要加上 `;`
- `return 0` 是指返回一個整數 (integer) 值 `0`，`0` 通常表示程序成功執行，在 main 函數是可以省略的，因為編譯器會自動添加 `return 0`，但依舊建議寫上 `return 0`
  - `return`後面的內容不會被程序執行


### Basic Syntax

#### Console Output (`printf`)

1. `printf` 是 print 和 formatted 的縮寫，意思是格式化打印；
2. `printf("The text you want to output.");`文字必須要用 雙引號（`“”`）包裹，代表是字符串常量 (string constant)；
3. 由於 C 語言中，`printf`不會自動換行，如果要每次輸出都新開一行，我們要使用轉義符 (escape character)，這個是在字符串中有特殊含義的字符，常用的有 `/n`，代表換新行。

```c
#include <stdio.h>

int main() {
    printf("It is a string.");
    printf("It doesn't insert a new line.");

    printf("\nIt is a string.\nIt is a new line.");
}
```

```
It is a string.It doesn't insert a new line.
It is a string.
It is a new line.
```

#### Variables & Assignment Operators

變量 (variable) 是編程語言的一個重要概念，它就像一個儲物櫃，裡面儲存不同類型的值。

每一個變量都必須由名字 (identifier) 和數據類型 (data type) 組成，就如同儲物櫃也有不同編號和不同種類。變量不可以存儲不同數據類型的值，比如 integer 類型不能儲存字符串 (string)。

同時，在使用變量前，我們都必須定義變量 (declare variable)，否則程序就會找不到要使用的變量名，產生報錯。

在 C 語言中，我們可以每行定義一個變量，也可以每行定義多個變量，同時我們在定義變量時，也可以選擇賦不賦值 (assign)。

```c
int main() { // 由於不涉及到 input and output 或其他外部庫，可以不用添加 #include <stdio.h>
    int a; // 每行定義一個變量
    int b, c; // 每行定義多個變量，用逗號隔開
    int d = 5; // 賦值 d 為 5
}
```





## Reference

1. [C 语言的基本结构 | 你必须熟练的让人心疼_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1L4z3YaENw?p=5)
2. Lecture Note (01b. C Language Basics)
3. 

