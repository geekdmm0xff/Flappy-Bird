

// 题 1
// 检查密码规则合法性
// 考察基本编码能力和字符串处理
// 参考 JavaScript 文档的字符串处理
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
// 给定一个字符串，用以下规则检查合法性
// 完全符合返回 true，否则返回 false
// 1，第一位是字母
// 2，只能包含字母、数字、下划线
// 3，只能字母或数字结尾
// 4，最小长度 2
// 5，最大长度 10
// 6，禁止使用正则表达式

// 1.是否为是字母
var isAlphabet = function(c) {
	//小写字母：[97, 122]
	//大写字母：[65, 90]
	return (c > 96 && c < 123) || (c > 64 && c < 90)
}

var isNumber = function(c) {
	//数字：[48, 57]
	return (c > 47 && c < 58)
}

// 
var validPassword = function(pwd) {	
	var len = pwd.length

	// 1，第一位是字母
	var cond1 = isAlphabet(pwd.charCodeAt(0))

    // 2. 只能包含字母、数字、下划线
    var cond2 = true
    for (var i = 0; i < len; i++) {
    	var s = pwd.charAt(i)
    	var c = pwd.charCodeAt(i)
    	var b = (isAlphabet(c) || isNumber(c) || s == '_')
    	if (!b) {
    		cond2 = false
    		break;
    	}
    }

    // 3.只能字母或数字结尾
    var last = pwd.charCodeAt(len - 1);
	var cond3 = (isAlphabet(last) || isNumber(last))

	// 4.最小长度 2, 最大长度 10
	var cond4 = pwd.length >1 && pwd.length < 10

	return cond1 && cond2 && cond3 && cond4
}



// 题 2
// 返回 100 内的素数列表
// 考察基本的循环和选择概念、数组的使用
var primeNumbers = function() {
	var arr = []
	for (var i = 2; i < 100; i++) {
		var b = true
		for (var j = 2; j < i; j++) {
			if (i % j == 0) {
				b = false
				break
			}
		}
		if (b) {
			arr.push(i)
		}
	}
	return arr
}


// 题 3
// 给定一个只包含字母的字符串，返回单个字母出现的次数
// 考察字典的概念和使用
// 返回值为包含元素的对象，格式如下（对对象中元素的顺序不做要求）
// 参数 "hello"
// 返回值
// {
//     'h': 1,
//     'e': 1,
//     'l': 2,
//     'o': 1,
// }
var letterCount = function(str) {
	var map = {}
	for (var i = 0; i < str.length; i++) {
		var c = str.charCodeAt(i)
		if (isAlphabet(c)) {
			var s = str.charAt(i)
			var v = map[s]
			if (v == undefined) {
				map[s] = 1
			} else {
				map[s] = ++v
			}
		}
	}
	return map
}


// 题 4
// 给定一个英文句子（一个只有字母的字符串），将句中所有单词变为有且只有首字母大写的形式
var capString = function(str) {
	// 'asdasd asd ad  ad asda'
	var arr = str.split(' ')
	var result = ''
	for (var sub of arr) {
		for (var i = 0; i < sub.length; i++) {
			var s = sub.charAt(i)
			if (i == 0) {
				result += s.toUpperCase()
			} else {
				result += s
			}
		}
		result += ' '
	}
	return result
}



// 题 5
// 写一个 Queue 类，它有两个方法，用法如下

class Queue{
	constructor() {
		this.list = []
	}
	enqueue(e) {
		this.list.push(e)
	}
	dequeue() {
		return this.list.shift()
	}
}

var q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

console.log(q.dequeue()) // 1
console.log(q.dequeue()) // 2
console.log(q.dequeue()) // 3



// 题 6
// 使用原生 ajax 发送向下面的 url 请求获取数据
// 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
// url 为 https://www.xul.fr/ajax/ajax-get.txt
// method 为 GET

var sendRequest = function () {
	var r = new XMLHttpRequest()
	var url = 'https://www.xul.fr/ajax/ajax-get.txt'

	r.open('GET', url, true)
	r.setRequestHeader('Content-Type', 'text/plain')
	r.onreadystatechange = function () {
		if (r.readyState === 4) {
			console.log(r.response)
		}
	}
	r.send()
}

sendRequest()