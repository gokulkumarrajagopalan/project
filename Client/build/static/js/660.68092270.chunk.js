(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[660],{9050:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var n=i(2791),a=i(1293),r=i.n(a),s=(i(7862),i(9402),i(8372),i(2230)),o=i(184);const c=function(){const e=["public class QuickSort {","    public static void main(String[] args) {","        int[] arr = {10, 7, 8, 9, 1, 5};","        int n = arr.length;","        quickSort(arr, 0, n - 1);",'        System.out.println("Sorted array: ");',"        printArray(arr, n);","    }","    public static void quickSort(int[] arr, int low, int high) {","        if (low < high) {","            int pi = partition(arr, low, high);","            quickSort(arr, low, pi - 1);","            quickSort(arr, pi + 1, high);","        }","    }","    public static int partition(int[] arr, int low, int high) {","        int pivot = arr[high];","        int i = (low - 1);","        for (int j = low; j < high; j++) {","            if (arr[j] < pivot) {","                i++;","                int temp = arr[i];","                arr[i] = arr[j];","                arr[j] = temp;","            }","        }","        int temp = arr[i + 1];","        arr[i + 1] = arr[high];","        arr[high] = temp;","        return i + 1;","    }","    public static void printArray(int[] arr, int size) {","        for (int i = 0; i < size; i++) {",'            System.out.print(arr[i] + " ");',"        }","        System.out.println();","    }","}"],t=["#include <stdio.h>","void swap(int* a, int* b) {","    int t = *a; *a = *b; *b = t;","}","int partition(int arr[], int low, int high) {","    int pivot = arr[high];","    int i = (low - 1);","    for (int j = low; j < high; j++) {","        if (arr[j] < pivot) {","            i++; swap(&arr[i], &arr[j]);","        }","    }","    swap(&arr[i + 1], &arr[high]);","    return (i + 1);","}","void quickSort(int arr[], int low, int high) {","    if (low < high) {","        int pi = partition(arr, low, high);","        quickSort(arr, low, pi - 1);","        quickSort(arr, pi + 1, high);","    }","}","void printArray(int arr[], int size) {","    for (int i = 0; i < size; i++)",'        printf("%d ", arr[i]);','    printf("\\n");',"}","int main() {","    int arr[] = {10, 7, 8, 9, 1, 5};","    int n = sizeof(arr) / sizeof(arr[0]);","    quickSort(arr, 0, n - 1);",'    printf("Sorted array: \\n");',"    printArray(arr, n);","    return 0;","}"];(0,n.useEffect)((()=>{r().highlightAll()}),[]);const i=[10,7,8,9,1,5],[a,c]=(0,n.useState)(i),[l,d]=(0,n.useState)([]),[h,p]=(0,n.useState)(0),[u,g]=(0,n.useState)(""),[m,x]=(0,n.useState)(null),[j,v]=(0,n.useState)(null),[w,b]=(0,n.useState)([]),y=(e,t,i,n)=>{if(t<i){const a=f(e,t,i,n);y(e,t,a-1,n),y(e,a+1,i,n),b([...w,a])}},f=(e,t,i,n)=>{let a=e[i];x(i);let r=t-1;n.push({array:[...e],message:"New iteration: Pivot selected as ".concat(a),pivotIndex:i,comparedIndex:null});for(let s=t;s<i;s++)v(s),n.push({array:[...e],message:"Comparing ".concat(e[s]," with pivot (").concat(a,")"),pivotIndex:i,comparedIndex:s}),e[s]<a&&(r++,[e[r],e[s]]=[e[s],e[r]],n.push({array:[...e],message:"Swapped ".concat(e[r]," and ").concat(e[s]),pivotIndex:i,comparedIndex:s}));return[e[r+1],e[i]]=[e[i],e[r+1]],n.push({array:[...e],message:"Placed pivot (".concat(a,") in its correct position"),pivotIndex:r+1,comparedIndex:null}),r+1};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"QuickSort-container",children:[(0,o.jsx)("h2",{children:"Quick Sort Visualization"}),(0,o.jsx)("div",{className:"array-container",children:a.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar",style:{height:"".concat(10*e,"px"),backgroundColor:w.includes(t)?"green":t===m?"yellow":t===j?"orange":"lightblue"},children:e},t)))}),(0,o.jsx)("button",{onClick:()=>{let e=[],t=[...i];y(t,0,t.length-1,e),d(e),p(0),g(e[0].message),b([])},children:"Start Sorting"}),(0,o.jsx)("button",{onClick:()=>{h<l.length-1&&(p(h+1),c(l[h+1].array),g(l[h+1].message),x(l[h+1].pivotIndex),v(l[h+1].comparedIndex))},disabled:h>=l.length-1,children:"Next Step"}),(0,o.jsxs)("div",{className:"explanation-container",children:[(0,o.jsx)("h3",{children:"Explanation:"}),(0,o.jsx)("p",{children:u})]})]}),(0,o.jsxs)("div",{className:"QuickSort",children:[(0,o.jsx)("h2",{children:"Quick Sort"}),(0,o.jsx)("p",{children:"Quick sort is a highly efficient sorting algorithm and is based on partitioning an array into smaller sub-arrays. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot."}),(0,o.jsx)("h3",{children:"Algorithm:"}),(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Choose a pivot:"})," Select an element as a pivot (e.g., first, last, or middle element)."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Partition the array:"})," Rearrange the array so that elements less than the pivot are on the left and those greater than the pivot are on the right."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Recursively apply:"})," Apply the same logic to the left and right sub-arrays until each sub-array has only one element."]})]}),(0,o.jsx)(s.Z,{handleLanguageChange:e=>console.log("Selected language: ".concat(e)),cLangElements:t,javaLangElements:e}),(0,o.jsx)("h3",{children:"Characteristics:"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Quick sort is an in-place sorting algorithm."}),(0,o.jsx)("li",{children:"It uses a divide-and-conquer strategy."}),(0,o.jsx)("li",{children:"Efficient on average, but worst-case performance occurs with poorly chosen pivots."})]}),(0,o.jsx)("h3",{children:"Complexity:"}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Best Case:"})," O(n log n)"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Average Case:"})," O(n log n)"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Worst Case:"})," O(n\xb2) - This happens when the smallest or largest element is always picked as the pivot."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Space Complexity:"})," O(log n) - due to the recursive stack."]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Java Quick Sort Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"language-java",children:e.join("\n")})})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"C Quick Sort Code:"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"language-c",children:t.join("\n")})})]})]})]})}},2230:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(2791),a=i(1293),r=i.n(a),s=(i(7862),i(9402),i(184));const o=function(e){let{handleLanguageChange:t,cLangElements:i,javaLangElements:a}=e;const[o,c]=(0,n.useState)("c"),[l,d]=(0,n.useState)(""),h=()=>{const e=("c"===o?i:a).join("\n");navigator.clipboard.writeText(e).then((()=>{d("Copied..!"),setTimeout((()=>{d("")}),1e3)})).catch((()=>d("Copy Failed")))};return(0,n.useEffect)((()=>{r().highlightAll()}),[i,a]),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"button-group",children:[(0,s.jsx)("button",{className:"btnC ".concat("c"===o?"active":""),onClick:()=>{c("c"),t("c")},children:"C"}),(0,s.jsx)("button",{className:"btnJava ".concat("java"===o?"active":""),onClick:()=>{c("java"),t("java")},children:"Java"})]}),(0,s.jsx)("div",{className:"code-section-container",children:(p="c"===o?i:a,(0,s.jsxs)("div",{className:"code-section",children:[(0,s.jsx)("div",{className:"copy-button-container",children:(0,s.jsx)("button",{className:"copy-button ".concat(l&&"copied"),onClick:h,children:l||"Copy Code"})}),(0,s.jsx)("pre",{className:"language-c",children:(0,s.jsx)("code",{className:"language-c",children:p.join("\n")})})]}))})]});var p}},8372:()=>{!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,i=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,n={pattern:RegExp(/(^|[^\w.])/.source+i+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[n,{pattern:RegExp(/(^|[^\w.])/.source+i+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:n.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+i+/[A-Z]\w*\b/.source),lookbehind:!0,inside:n.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":n,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+i+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:n.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+i+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:n.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)}}]);
//# sourceMappingURL=660.68092270.chunk.js.map