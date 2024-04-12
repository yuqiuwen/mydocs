"use strict";(self.webpackChunkdocone=self.webpackChunkdocone||[]).push([[6604],{39242:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var r=i(85893),d=i(11151);const a={title:"LeetCode",authors:"Qiuwen",description:"\u57fa\u672c\u7b97\u6cd5",keywords:["paramiko","fabric","devops","python"],date:"2022/11/16 18:26",tags:["\u67e5\u627e","\u6392\u5e8f","\u52a8\u6001\u89c4\u5212"]},l=void 0,t={permalink:"/docone/blog/2022/12/24/leecode/LeetCode",source:"@site/blog/2022-12-24-leecode/LeetCode.md",title:"LeetCode",description:"\u57fa\u672c\u7b97\u6cd5",date:"2022-11-16T18:26:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"\u67e5\u627e",permalink:"/docone/blog/tags/\u67e5\u627e"},{label:"\u6392\u5e8f",permalink:"/docone/blog/tags/\u6392\u5e8f"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/docone/blog/tags/\u52a8\u6001\u89c4\u5212"}],readingTime:9.94,hasTruncateMarker:!1,authors:[{name:"Qiuwen",title:"FullStack Engineer @ Facebook",url:"https://github.com/yuqiuwen",key:"Qiuwen"}],frontMatter:{title:"LeetCode",authors:"Qiuwen",description:"\u57fa\u672c\u7b97\u6cd5",keywords:["paramiko","fabric","devops","python"],date:"2022/11/16 18:26",tags:["\u67e5\u627e","\u6392\u5e8f","\u52a8\u6001\u89c4\u5212"]},unlisted:!1,prevItem:{title:"BackEnd Notes",permalink:"/docone/blog/2022/12/14/python-notes/python notes"},nextItem:{title:"Design patterns",permalink:"/docone/blog/2022/11/06/\u8bbe\u8ba1\u6a21\u5f0f"}},s={authorsImageUrls:[void 0]},o=[{value:"\u7b97\u6cd5",id:"\u7b97\u6cd5",level:2},{value:"\u67e5\u627e",id:"\u67e5\u627e",level:3},{value:"\u4e8c\u5206\u67e5\u627e",id:"\u4e8c\u5206\u67e5\u627e",level:4},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:3},{value:"\u5192\u6ce1",id:"\u5192\u6ce1",level:4},{value:"\u5feb\u6392",id:"\u5feb\u6392",level:4},{value:"\u9009\u62e9",id:"\u9009\u62e9",level:4},{value:"\u5f52\u5e76",id:"\u5f52\u5e76",level:4},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:4},{value:"\u67e5\u627e\u7b2c\u4e00\u4e2a\u4e0d\u91cd\u590d\u7684\u5b57\u7b26",id:"\u67e5\u627e\u7b2c\u4e00\u4e2a\u4e0d\u91cd\u590d\u7684\u5b57\u7b26",level:5},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",level:4},{value:"01\u80cc\u5305\u95ee\u9898",id:"01\u80cc\u5305\u95ee\u9898",level:5},{value:"\u793c\u7269\u6700\u5927\u4ef7\u503c",id:"\u793c\u7269\u6700\u5927\u4ef7\u503c",level:5},{value:"\u6ed1\u52a8\u7a97\u53e3",id:"\u6ed1\u52a8\u7a97\u53e3",level:4},{value:"\u6570\u7ec4\u548c\u6811\u5f62\u6570\u636e\u8f6c\u6362",id:"\u6570\u7ec4\u548c\u6811\u5f62\u6570\u636e\u8f6c\u6362",level:4},{value:"MySQL",id:"mysql",level:2},{value:"\u57fa\u7840",id:"\u57fa\u7840-1",level:3},{value:"\u6b21\u65e5\u7559\u5b58\u7387",id:"\u6b21\u65e5\u7559\u5b58\u7387",level:3}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u7b97\u6cd5",children:"\u7b97\u6cd5"}),"\n",(0,r.jsx)(e.h3,{id:"\u67e5\u627e",children:"\u67e5\u627e"}),"\n",(0,r.jsx)(e.h4,{id:"\u4e8c\u5206\u67e5\u627e",children:"\u4e8c\u5206\u67e5\u627e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def binsearch(arr, target):\n\n    low, high = 0, len(arr)-1\n\n    while low <= high:\n        mid = (low + high) // 2\n        if target == arr[mid]:\n            return mid\n        elif target > arr[mid]:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u6392\u5e8f",children:"\u6392\u5e8f"}),"\n",(0,r.jsx)(e.h4,{id:"\u5192\u6ce1",children:"\u5192\u6ce1"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'"""\n\u5192\u6ce1\u6392\u5e8f:\u6bcf\u8d9f\u80fd\u786e\u5b9a\u4e00\u4e2a\u5143\u7d20\u7684\u6700\u7ec8\u4f4d\u7f6e\n"""\ndef bubble_sort(data):\n    n = len(data)\n    for i in range(n-1):\n        for j in range(n-i-1):\n            if data[j] > data[j+1]:\n                data[j], data[j+1] = data[j+1], data[j]\n    print(data)\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u5feb\u6392",children:"\u5feb\u6392"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def quick_sort(arr):\n    # \u7528\u6808\u4fdd\u5b58\u533a\u95f4\u5de6\u53f3\u8fb9\u754c\uff0c\u53f3\u8fb9\u754c\u5148\u5165\u6808\n    stack = [len(arr)-1, 0]\n    while stack:\n        low, high = stack.pop(), stack.pop()\n        p = partition(arr, low, high)\n        # \u57fa\u51c6\u5143\u7d20\u7684\u5de6\u533a\u95f4\u5b58\u5728\u5219\u5165\u6808\n        if p > low:\n            stack.append(p - 1)\n            stack.append(low)\n        # \u57fa\u51c6\u5143\u7d20\u7684\u53f3\u533a\u95f4\u5b58\u5728\u5219\u5165\u6808\n        if high > p:\n            stack.append(high)\n            stack.append(p + 1)\n    return arr\n\n\ndef partition(arr, low, high):\n    # \u9009\u53d6\u7b2c\u4e00\u4e2a\u5143\u7d20\u4f5c\u4e3a\u57fa\u51c6\u5143\u7d20\n    p = arr[low]\n    while low < high:\n        # \u6bd4\u57fa\u51c6\u5143\u7d20\u5c0f\u7684\u79fb\u5230\u524d\u9762\n        while low < high and arr[high] >= p:\n            high -= 1\n        arr[low] = arr[high]\n        # \u6bd4\u57fa\u51c6\u5143\u7d20\u5927\u7684\u79fb\u5230\u540e\u9762\n        while low < high and arr[low] <= p:\n            low += 1\n        arr[high] = arr[low]\n    #     \u5c06\u57fa\u51c6\u5143\u7d20\u653e\u5230\u6700\u7ec8\u7684\u4f4d\u7f6e\n    arr[low] = p\n    return low\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u9009\u62e9",children:"\u9009\u62e9"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'"""\n\u9009\u62e9\u6392\u5e8f\uff1a\u6bcf\u8d9f\uff08i\uff09\u4ece\u540e\u9762\u7684n-i+1\u4e2a\u5f85\u6392\u5143\u7d20\u9009\u62e91\u4e2a\u6700\u5c0f\u7684\u4f5c\u4e3a\u6700\u7ec8\u7b2ci\u4e2a\u5143\u7d20\u7684\u503c\n"""\ndef select_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        min = i\n        for j in range(i+1, n):\n            if arr[j] < arr[min]:\n                min = j\n        # \u82e5\u7b2c\u4e00\u4e2a\u6570\u5b57\u4e0d\u662f\u6700\u5c0f\u503c\uff0c\u5219\u4ea4\u6362\u4f4d\u7f6e\n        if min != i:\n            arr[i], arr[min] = arr[min], arr[i]\n\n    return arr\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u5f52\u5e76",children:"\u5f52\u5e76"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"image-20220814143834015",src:i(64323).Z+"",width:"723",height:"637"})}),"\n",(0,r.jsx)(e.p,{children:"==\u601d\u8def==\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u9488\u5bf9\u4e0a\u56fe\u5e8f\u5217A\uff083,9\uff09\u548c\u5e8f\u5217B\uff081,4\uff09\uff0c\u6307\u9488i\u6307\u54113\uff0cj\u6307\u54111"}),"\n",(0,r.jsx)(e.li,{children:"1 < 3\uff0c1\u6dfb\u52a0\u5230temp\uff0c\u540c\u65f6\u6307\u9488j\u540e\u79fb"}),"\n",(0,r.jsx)(e.li,{children:"3 < 4\uff0c3\u6dfb\u52a0\u5230temp\uff0c\u540c\u65f6\u6307\u9488i\u540e\u79fb"}),"\n",(0,r.jsx)(e.li,{children:"4 < 9\uff0c4\u6dfb\u52a0\u5230temp\uff0c\u540c\u65f6\u6307\u9488j\u540e\u79fb\uff0c\u6b64\u65f6j=8 > \u53f3\u8fb9\u754cr=7,\u8df3\u51fa\u5faa\u73af"}),"\n",(0,r.jsx)(e.li,{children:"\u6b64\u65f6i=5,j=8,mid=5,l=4,r=7\uff0c\u5c06\u5269\u4e0b\u7684\u5e8f\u5217A\u4e2d\u7684\u5143\u7d20\u6dfb\u52a0\u5230temp\u5217\u8868\u4e2d"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06temp\u4e2d\u7684\u6240\u6709\u5143\u7d20\u8d4b\u7ed9\u539f\u5e8f\u5217arr\u5bf9\u5e94\u4f4d\u7f6e"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def merge(arr, l, r, mid):\n    temp = []\n    i, j = l, mid + 1\n    while i <= mid and j <= r:\n        if arr[i] < arr[j]:\n            temp.append(arr[i])\n            i += 1\n        else:\n            temp.append(arr[j])\n            j += 1\n    print('-----------')\n    print(f'i:{i}   j:{j}   mid:{mid}   l:{l}   r:{r}')\n    \n    # \u6b64\u65f6\u5176\u4e2d\u4e00\u5e8f\u5217\uff08\u59821,3,4\uff09\u5df2\u7ecf\u5168\u90e8\u6309\u987a\u5e8f\u6dfb\u52a0\u5230temp\u4e2d\uff0c\u53e6\u4e00\u5e8f\u5217\u8fd8\u52699,\u53ea\u9700\u5c06\u5269\u4e0b\u7684\u6dfb\u52a0\u5230temp\n    while i <= mid:\n        temp.append(arr[i])\n        i += 1\n    while j <= r:\n        temp.append(arr[j])\n        j += 1\n    print(temp)\n    \n    # \u6b64\u65f6\u5b50\u5e8f\u5217\u5df2\u6392\u597d\u5e8f\uff0c\u76f4\u63a5\u5c06temp\u4e2d\u6392\u597d\u5e8f\u7684\u5143\u7d20\u8d4b\u7ed9arr\u5bf9\u5e94\u4f4d\u7f6e\n    arr[l: r + 1] = temp\n    print(arr)\n\n\ndef merge_sort(arr, l, r):\n    if l < r:\n        mid = (l+r) // 2\n        merge_sort(arr, l, mid)\n        merge_sort(arr, mid+1, r)\n\n        merge(arr, l, r, mid)\n    return arr\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u57fa\u7840",children:"\u57fa\u7840"}),"\n",(0,r.jsx)(e.h5,{id:"\u67e5\u627e\u7b2c\u4e00\u4e2a\u4e0d\u91cd\u590d\u7684\u5b57\u7b26",children:"\u67e5\u627e\u7b2c\u4e00\u4e2a\u4e0d\u91cd\u590d\u7684\u5b57\u7b26"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def first_char(arr):\n    d = {}\n    \n    \"\"\"\u8bb0\u5f55\u6bcf\u4e2a\u5b57\u7b26\u7684\u51fa\u73b0\u6b21\u6570\"\"\"\n    for i, v in enumerate(arr):\n        if v in d:\n            d[v] += 1\n        else:\n            d[v] = 1\n    print(d)\n\t\n    \"\"\"\u518d\u6b21\u904d\u5386\u8fd4\u56de\u6b21\u6570\u4e3a1\u7684\u5143\u7d20\"\"\"\n    for i, v in enumerate(arr):\n        if d[v] == 1:\n            return v\n\nprint(first_char(['a', 'b', 'c', 'c', 'c', 'd', 'e', 'f', 'a']))\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u52a8\u6001\u89c4\u5212",children:"\u52a8\u6001\u89c4\u5212"}),"\n",(0,r.jsx)(e.h5,{id:"01\u80cc\u5305\u95ee\u9898",children:"01\u80cc\u5305\u95ee\u9898"}),"\n",(0,r.jsx)(e.p,{children:"\u4ecen\u4e2a\u7269\u54c1\u4e2d\u9009\u53d6\u4e00\u4e9b\u7269\u54c1\uff08\u7269\u54c1\u4e0b\u6807\u4e3ai\uff0c\u80cc\u5305\u5bb9\u91cf\u4e3aj\uff09\uff0c\u4f7f\u5f97\u5bb9\u91cf\u4e3as\u7684\u80cc\u5305\u5305\u542b\u7684\u7269\u54c1\u603b\u4ef7\u503c\u6700\u5927\u3002"}),"\n",(0,r.jsx)(e.mermaid,{value:"graph LR\n\tA[\u60c5\u5f62]--\x3e\u88c5\u4e0d\u4e0b--\x3e\u524di\u4e2a\u548c\u524di-1\u4e2a\u7269\u54c1\u7684\u603b\u4ef7\u503c\u6700\u4f73\u7ec4\u5408\u76f8\u540c;\n\tA--\x3eB[\u88c5\u5f97\u4e0b];\n\tB--\x3e|\u4e0d\u88c5|\u524di\u4e2a\u548c\u524di-1\u4e2a\u7269\u54c1\u7684\u603b\u4ef7\u503c\u6700\u4f73\u7ec4\u5408\u4e00\u6837;\n\tB--\x3e|\u88c5|\u603b\u4ef7\u503c\u7b49\u4e8e\u524di-1\u4e2a\u7269\u54c1\u7684\u4ef7\u503c+\u5f53\u524d\u7269\u54c1\u7684\u4ef7\u503c;\n\t"}),"\n",(0,r.jsx)(e.mermaid,{value:'  graph LR\n\tA(["dp[i][j] ="])--\x3e|\u88c5\u4e0d\u4e0b|D(["dp[i-1][j]"]);\n\tA--\x3e|\u88c5\u5f97\u4e0b|C(["max( dp[i-1][j-w[i]] + v[i], dp[i-1][j] )"]);\n'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# \u4f7f\u7528\u6eda\u52a8\u6570\u7ec4\u4f18\u5316\uff1a\n# dp[j]\u8868\u793a\u5bb9\u91cf\u4e3aj\u7684\u80cc\u5305\u6240\u88c5\u7684\u6700\u5927\u4ef7\u503c\ndp[j] = max(dp[j], dp[j-w[i]]+v[i])\n\n\ndef backpack():\n    # \u4f7f\u7528\u6eda\u52a8\u6570\u7ec4dp[j]\u53d6\u4ee3\u4e8c\u7ef4\u6570\u7ec4\uff0c\u8868\u793a\u5bb9\u91cf\u4e3aj\u7684\u80cc\u5305\u6240\u88c5\u7684\u6700\u5927\u4ef7\u503c\n    w = [2, 3, 4, 6, 5]  # \u91cd\u91cf\n    v = [4, 5, 3, 3, 6]  # \u4ef7\u503c\n    s = 8  # \u6700\u5927\u627f\u53d7\u91cd\u91cf\n    n = len(w)    # \u7269\u54c1\u4e2a\u6570\n    dp = [0] * (s+1)\n    obj_list = []\n\n    dp1 = [[0]*(s+1) for i in range(n+1)]\n    # \u4e8c\u7ef4\u6570\u7ec4\u65b9\u6cd5\n    for i in range(1, n+1):\n        for j in range(s+1):\n            if j >= w[i-1]:\n                dp1[i][j] = max(dp1[i-1][j], dp1[i-1][j-w[i-1]] + v[i-1])\n            else:\n                dp1[i][j] = dp1[i-1][j]\n    print(dp1[-1])\n\n    # \u4e00\u7ef4\u6eda\u52a8\u6570\u7ec4\n    for i in range(n):\n        for j in range(s, w[i]-1, -1):\t\t# \u5012\u5e8f\u904d\u5386\u80cc\u5305\n            dp[j] = max(dp[j], dp[j-w[i]] + v[i])\n\n    return dp\n\n\n"})}),"\n",(0,r.jsx)(e.h5,{id:"\u793c\u7269\u6700\u5927\u4ef7\u503c",children:"\u793c\u7269\u6700\u5927\u4ef7\u503c"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u4e00\u4e2a m*n \u7684\u68cb\u76d8\u7684\u6bcf\u4e00\u683c\u90fd\u653e\u6709\u4e00\u4e2a\u793c\u7269\uff0c\u6bcf\u4e2a\u793c\u7269\u90fd\u6709\u4e00\u5b9a\u7684\u4ef7\u503c\uff08\u4ef7\u503c\u5927\u4e8e 0\uff09\u3002\u4f60\u53ef\u4ee5\u4ece\u68cb\u76d8\u7684\u5de6\u4e0a\u89d2\u5f00\u59cb\u62ff\u683c\u5b50\u91cc\u7684\u793c\u7269\uff0c\u5e76\u6bcf\u6b21\u5411\u53f3\u6216\u8005\u5411\u4e0b\u79fb\u52a8\u4e00\u683c\u3001\u76f4\u5230\u5230\u8fbe\u68cb\u76d8\u7684\u53f3\u4e0b\u89d2\u3002\u7ed9\u5b9a\u4e00\u4e2a\u68cb\u76d8\u53ca\u5176\u4e0a\u9762\u7684\u793c\u7269\u7684\u4ef7\u503c\uff0c\u8bf7\u8ba1\u7b97\u4f60\u6700\u591a\u80fd\u62ff\u5230\u591a\u5c11\u4ef7\u503c\u7684\u793c\u7269\uff1f"}),"\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof",children:"https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof"})]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def maxValue(grid: List[List[int]]) -> int:\n    width = len(grid[0])\n    height = len(grid)\n    dp = [[0]*(width+1) for _ in range(height+1)]\n\t\n    # \u6ce8\u610f\u904d\u5386\u987a\u5e8f\u9700\u8981\u548ci,j\u5bf9\u5e94\n    for i in range(1, height+1):\n        for j in range(1, width+1):\n            dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1]\n\n    return dp[height][width]\n\nmaxValue([[1,2,5],[3,2,1]])\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u6ed1\u52a8\u7a97\u53e3",children:"\u6ed1\u52a8\u7a97\u53e3"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums\uff0c\u6709\u4e00\u4e2a\u5927\u5c0f\u4e3a k \u7684\u6ed1\u52a8\u7a97\u53e3\u4ece\u6570\u7ec4\u7684\u6700\u5de6\u4fa7\u79fb\u52a8\u5230\u6570\u7ec4\u7684\u6700\u53f3\u4fa7\u3002\u4f60\u53ea\u53ef\u4ee5\u770b\u5230\u5728\u6ed1\u52a8\u7a97\u53e3\u5185\u7684 k \u4e2a\u6570\u5b57\u3002\u6ed1\u52a8\u7a97\u53e3\u6bcf\u6b21\u53ea\u5411\u53f3\u79fb\u52a8\u4e00\u4f4d\u3002\u8fd4\u56de\u6ed1\u52a8\u7a97\u53e3\u4e2d\u7684\u6700\u5927\u503c \u3002\n\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/sliding-window-maximum",children:"https://leetcode.cn/problems/sliding-window-maximum"})]}),"\n",(0,r.jsx)(e.p,{children:"\u8f93\u5165\uff1anums = [1,3,-1,-3,5,3,6,7], k = 3\n\u8f93\u51fa\uff1a[3,3,5,5,6,7]\n\u89e3\u91ca\uff1a\n\u6ed1\u52a8\u7a97\u53e3\u7684\u4f4d\u7f6e                \u6700\u5927\u503c"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"[1  3  -1] -3  5  3  6  7       3\n1 [3  -1  -3] 5  3  6  7       3\n1  3 [-1  -3  5] 3  6  7       5\n1  3  -1 [-3  5  3] 6  7       5\n1  3  -1  -3 [5  3  6] 7       6\n1  3  -1  -3  5 [3  6  7]      7"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def maxSlidingWindow(nums: List[int], k: int) -> List[int]:\n    # \u53cc\u7aef\u961f\u5217\n    q = collections.deque\n    res = []\n    for i in range(len(nums)):\n        # \u5355\u8c03\u9012\u51cf\u6808\n        while q and nums[i] >= nums[q[-1]]:\n            q.pop()\n        q.append(i)\n        \n        # # \u5f53\u961f\u5934\u5143\u7d20\u8d85\u51fa\u7a97\u53e3\u8fb9\u754c\u65f6\uff0c\u5f39\u51fa\u961f\u5934\u5143\u7d20\n        while q[0] <= i-k:\n            q.popleft()\n            \n        # \u4ece\u7b2c\u4e8c\u4e2a\u7a97\u53e3\u5f00\u59cb\u4e4b\u540e\u90fd\u8981\u5f39\u51fa\u961f\u5934\u5143\u7d20\uff0c\u7b2c\u4e00\u4e2a\u7a97\u53e3\u53f3\u8fb9\u754ck-1\n        if i>=k-1:\n            res.append(nums[q[0]])\n    return res\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u6570\u7ec4\u548c\u6811\u5f62\u6570\u636e\u8f6c\u6362",children:"\u6570\u7ec4\u548c\u6811\u5f62\u6570\u636e\u8f6c\u6362"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"data = [\n    {'id': 1, 'pid': 0},\n    {'id': 2, 'pid': 1},\n    {'id': 7, 'pid': 2},\n    {'id': 8, 'pid': 6}\n]\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u6241\u5e73\u6570\u7ec4\u6811\u5f62\u5316"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def list2Tree(data, parent=None):\n  output = []\n  for node in data:\n      if node["pid"] != parent:\n          continue\n      children = list2Tree(data, node["id"])\n      node.update(children=children)\n      output.append(node)\n  return output\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u6811\u5f62\u6570\u636e\u6241\u5e73\u5316"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def flat_tree(data):\n  ret = []\n  for item in data:\n      ret.append({"id": item["id"], "pid": item["pid"]})\n      if item.get("children"):\n          ret.extend(flat_tree(item["children"]))\n  return ret\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"mysql",children:"MySQL"}),"\n",(0,r.jsx)(e.h3,{id:"\u57fa\u7840-1",children:"\u57fa\u7840"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"1 #DISTINCT\u8fd4\u56de\u552f\u4e00\u4e0d\u540c\u7684\u503c\nSELECT DISTINCT \u5217\u540d\u79f0 FROM \u8868\u540d\u79f0\n\n2#ORDER BY\u6392\u5e8f\uff08DESC\u964d\u5e8f\uff0cASC\u5347\u5e8f\uff09\nSELECT Company, OrderNumber FROM Orders ORDER BY Company DESC, OrderNumber ASC\n\n3# IFNULL\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570 \u4e3a NULL\uff0c\u5219\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u5907\u7528\u503c\nIFNULL(\n       (SELECT DISTINCT Salary\n       FROM Employee\n       ORDER BY Salary DESC \n       LIMIT 2 OFFSET 1),\t#\u8fd4\u56de\u4ece\u7b2c\u4e09\u884c\u5f00\u59cb\uff0c\u51711\u884c\u6570\u636e\n       NULL)\n    )\n    \n4 #join\u5185\u8fde\u63a5\uff0c\u548cinner join\u6548\u679c\u4e00\u6837\nSELECT a.NAME AS Employee\nFROM Employee AS a JOIN Employee AS b\n     ON a.ManagerId = b.Id\n     AND a.Salary > b.Salary\n     \n5# Dense_RANK() over\u5bf9\u6210\u7ee9\u6392\u540d\uff0cRANK() over\u6392\u540d\u65f6\u82e5\u6709\u5e76\u5217\u5c06\u5360\u7528\u4e0b\u4e00\u4f4d\u7684\u4f4d\u7f6e\nselect Score,Dense_RANK() over (order by Score desc) as `Rank`\nfrom Scores\n   \n6 #\u987a\u5e8f\uff1awhere\u2014\u2014group by\u2014\u2014having\uff0c\u6ce8\u610fgroup by\u7d27\u8ddf\u5728where\u6700\u540e\u4e00\u4e2a\u9650\u5236\u6761\u4ef6\u540e\u9762\uff0c\u4e0d\u80fd\u88ab\u5939\u5728where\u9650\u5236\u6761\u4ef6\u4e4b\u95f4\u3002\u4f7f\u7528\u4e86having\u5fc5\u987b\u4f7f\u7528group by\uff0c\u4f46\u662f\u4f7f\u7528group by \u4e0d\u4e00\u5b9a\u4f7f\u7528having\n\n7 #IF(condition, value_if_true, value_if_false)\n\n8#\u56de\u8d2d\u7387\uff1a\u67d0\u4e00\u4e2a\u65f6\u95f4\u7a97\u53e3\u5185\u6d88\u8d39\u7684\u7528\u6237\uff0c\u5728\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7a97\u53e3\u4ecd\u65e7\u6d88\u8d39\u7684\u5360\u6bd4\n #\u590d\u8d2d\u7387\uff1a\u5728\u67d0\u65f6\u95f4\u7a97\u53e3\u5185\u91cd\u590d\u6d88\u8d39\u7528\u6237\uff08\u6d88\u8d39\u4e24\u6b21\u53ca\u4ee5\u4e0a\u7684\u7528\u6237\uff09\u5728\u603b\u6d88\u8d39\u7528\u6237\u4e2d\u5360\u6bd4\n\n\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"image-20210215213701733",src:i(40344).Z+"",width:"759",height:"422"})}),"\n",(0,r.jsx)(e.h3,{id:"\u6b21\u65e5\u7559\u5b58\u7387",children:"\u6b21\u65e5\u7559\u5b58\u7387"}),"\n",(0,r.jsx)(e.p,{children:"#\u67e5\u770b\u7528\u6237\u5728\u67d0\u5929\u5237\u9898\u540e\u7b2c\u4e8c\u5929\u8fd8\u4f1a\u518d\u6765\u5237\u9898\u7684\u5e73\u5747\u6982\u7387\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"image-20220219161533073",src:i(14826).Z+"",width:"936",height:"644"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-mysql",children:"#\u5148\u5bf9\u7528\u6237\u53bb\u91cd\uff0c\u7136\u540e\u81ea\u8fde\u63a5\uff0cq1\u663e\u793a\u6240\u6709\uff0cq2\u663e\u793a\u7559\u5b58\nselect \n    count(q2.device_id)/count(q1.device_id) as avg_ret\nfrom \n    (select distinct device_id, date from question_practice_detail) q1\nleft join\n    (select distinct device_id, date from question_practice_detail) q2\non q1.device_id=q2.device_id and q2.date=date_add(q1.date,interval 1 day)\n"})})]})}function h(n={}){const{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},40344:(n,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/image-20210215213701733-46ee5709627f522f5c2a816ff8083c06.png"},14826:(n,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/image-20220219161533073-d8754902ebc018589a17864a32c72c06.png"},64323:(n,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/image-20220814143834015-db955f7114a655db3324556592c9c141.png"},11151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>l});var r=i(67294);const d={},a=r.createContext(d);function l(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);