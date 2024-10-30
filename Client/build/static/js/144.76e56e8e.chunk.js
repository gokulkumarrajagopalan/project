(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[144],{9177:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>l});var t=i(2791),n=i(2230),a=i(1293),s=i.n(a),o=(i(7862),i(9402),i(8372),i(184));const l=function(){return(0,t.useEffect)((()=>{s().highlightAll()}),[]),(0,o.jsxs)("div",{className:"MergeSort",children:[(0,o.jsx)("h2",{children:"Merge Sort"}),(0,o.jsx)("p",{children:"Merge sort is a way of arranging a list of things in order. It works by repeatedly dividing the list into smaller parts until each part has only one item. Then, it combines (merges) these small parts back together in a sorted order. This process ensures that the entire list ends up sorted. Merge sort is known for being a reliable and efficient method for sorting things."}),(0,o.jsx)("h3",{children:"Algorithm:"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Step-by-step explanation:"}),(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("h4",{children:"Divide:"})," Divide the list into two halves."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("h4",{children:"Conquer:"})," Recursively sort each half."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("h4",{children:"Combine:"})," Merge the two halves to produce a sorted list."]})]})]}),(0,o.jsx)(n.Z,{handleLanguageChange:e=>" ".concat(e),cLangElements:["#include <stdio.h>","void merge(int arr[], int l, int m, int r) {","    int i, j, k;","    int n1 = m - l + 1;","    int n2 = r - m;","    int L[n1], R[n2];","    for (i = 0; i < n1; i++)","        L[i] = arr[l + i];","    for (j = 0; j < n2; j++)","        R[j] = arr[m + 1 + j];","    i = 0; j = 0; k = l;","    while (i < n1 && j < n2) {","        if (L[i] <= R[j]) {","            arr[k] = L[i];","            i++;","        } else {","            arr[k] = R[j];","            j++;","        }","        k++;","    }","    while (i < n1) {","        arr[k] = L[i];","        i++;","        k++;","    }","    while (j < n2) {","        arr[k] = R[j];","        j++;","        k++;","    }","}","void mergeSort(int arr[], int l, int r) {","    if (l < r) {","        int m = l + (r - l) / 2;","        mergeSort(arr, l, m);","        mergeSort(arr, m + 1, r);","        merge(arr, l, m, r);","    }","}","void printArray(int A[], int size) {","    for (int i = 0; i < size; i++)",'        printf("%d ", A[i]);','    printf("\\n");',"}","int main() {","    int arr[] = {12, 11, 13, 5, 6, 7};","    int arr_size = sizeof(arr) / sizeof(arr[0]);",'    printf("Given array is \\n");',"    printArray(arr, arr_size);","    mergeSort(arr, 0, arr_size - 1);",'    printf("\\nSorted array is \\n");',"    printArray(arr, arr_size);","    return 0;","}"],javaLangElements:["public class MergeSort {","    public static void main(String[] args) {","        int[] arr = {12, 11, 13, 5, 6, 7};","        mergeSort(arr, 0, arr.length - 1);",'        System.out.println("Sorted array: ");',"        printArray(arr);","    }","    public static void mergeSort(int[] arr, int left, int right) {","        if (left < right) {","            int mid = (left + right) / 2;","            mergeSort(arr, left, mid);","            mergeSort(arr, mid + 1, right);","            merge(arr, left, mid, right);","        }","    }","    public static void merge(int[] arr, int left, int mid, int right) {","        int n1 = mid - left + 1;","        int n2 = right - mid;","        int[] leftArray = new int[n1];","        int[] rightArray = new int[n2];","        for (int i = 0; i < n1; i++)","            leftArray[i] = arr[left + i];","        for (int i = 0; i < n2; i++)","            rightArray[i] = arr[mid + 1 + i];","        int i = 0, j = 0, k = left;","        while (i < n1 && j < n2) {","            if (leftArray[i] <= rightArray[j]) {","                arr[k] = leftArray[i];","                i++;","            } else {","                arr[k] = rightArray[j];","                j++;","            }","            k++;","        }","        while (i < n1) {","            arr[k] = leftArray[i];","            i++;","            k++;","        }","        while (j < n2) {","            arr[k] = rightArray[j];","            j++;","            k++;","        }","    }","    public static void printArray(int[] arr) {","        for (int i : arr) {",'            System.out.print(i + " ");',"        }","        System.out.println();","    }","}"]}),(0,o.jsx)("h3",{children:"Characteristics:"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Stable sorting algorithm."}),(0,o.jsx)("li",{children:"Efficient for large datasets."}),(0,o.jsx)("li",{children:"Complexity: O(n log n) for all cases (best, average, worst)."}),(0,o.jsx)("li",{children:"Requires additional memory for temporary arrays."})]}),(0,o.jsx)("h3",{children:"Complexity:"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Time Complexity: O(n log n)"}),(0,o.jsx)("li",{children:"Space Complexity: O(n)"})]})]})}},2230:(e,r,i)=>{"use strict";i.d(r,{Z:()=>o});var t=i(2791),n=i(1293),a=i.n(n),s=(i(7862),i(9402),i(184));const o=function(e){let{handleLanguageChange:r,cLangElements:i,javaLangElements:n}=e;const[o,l]=(0,t.useState)("c"),[c,d]=(0,t.useState)(""),h=()=>{const e=("c"===o?i:n).join("\n");navigator.clipboard.writeText(e).then((()=>{d("Copied..!"),setTimeout((()=>{d("")}),1e3)})).catch((()=>d("Copy Failed")))};return(0,t.useEffect)((()=>{a().highlightAll()}),[i,n]),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"button-group",children:[(0,s.jsx)("button",{className:"btnC ".concat("c"===o?"active":""),onClick:()=>{l("c"),r("c")},children:"C"}),(0,s.jsx)("button",{className:"btnJava ".concat("java"===o?"active":""),onClick:()=>{l("java"),r("java")},children:"Java"})]}),(0,s.jsx)("div",{className:"code-section-container",children:(p="c"===o?i:n,(0,s.jsxs)("div",{className:"code-section",children:[(0,s.jsx)("div",{className:"copy-button-container",children:(0,s.jsx)("button",{className:"copy-button ".concat(c&&"copied"),onClick:h,children:c||"Copy Code"})}),(0,s.jsx)("pre",{className:"language-c",children:(0,s.jsx)("code",{className:"language-c",children:p.join("\n")})})]}))})]});var p}},8372:()=>{!function(e){var r=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,i=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,t={pattern:RegExp(/(^|[^\w.])/.source+i+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[t,{pattern:RegExp(/(^|[^\w.])/.source+i+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:t.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+i+/[A-Z]\w*\b/.source),lookbehind:!0,inside:t.inside}],keyword:r,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":t,keyword:r,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+i+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:t.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+i+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:t.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return r.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)}}]);
//# sourceMappingURL=144.76e56e8e.chunk.js.map