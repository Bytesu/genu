/**
 * Buffer 类是一个全局变量类型，用来直接处理2进制数据的。 它能够使用多种方式构建。
 * Created by byte on 2015/11/2.
 */


/**
 * 类Buffer
 */
console.log('创建方法:');

//new Buffer(size)
//分配一个新的 buffer 大小是 size 的8位字节.
new Buffer(9);

//new Buffer(array)
//分配一个新的 buffer 使用一个8位字节 array 数组.

//new Buffer(str, [encoding])
//分配一个新的 buffer ，其中包含着给定的 str字符串. encoding 编码方式默认是：'utf8'.
console.log(new Buffer('AB中文'));
console.log('类方法:');
//类方法:
//Buffer.isEncoding(encoding)
//如果给定的编码 encoding 是有效的，返回 true，否则返回 false。
console.log(Buffer.isEncoding('utf8-'));

//类方法: Buffer.isBuffer(obj) //测试这个 obj 是否是一个 Buffer.
console.log(Buffer.isBuffer(new Buffer(1)));

//Buffer.byteLength(string, [encoding])
//将会返回这个字符串真实byte长度。 encoding 编码默认是： 'utf8'. 这个和 String.prototype.length 是不一样的，因为那个方法返回这个字符串中有几个字符的数量。 （译者：当用户在写http响应头Cotent-Length的时候，千万记得一定要用 Buffer.byteLength 方法，不要使用 String.prototype.length ）
console.log(Buffer.byteLength(new Buffer('中文')));

//类方法: Buffer.concat(list, [totalLength])
//返回一个保存着将传入buffer数组中所有buffer对象拼接在一起的buffer对象。（译者：有点拗口，其实就是将数组中所有的buffer实例通过复制拼接在一起）
console.log(Buffer.concat([new Buffer('中文'),new Buffer('AB')]).toString());



//buf.length
//这个buffer的bytes大小。注意这未必是这buffer里面内容的大小。length 的依据是buffer对象所分配的内存数值，它不会随着这个buffer对象内容的改变而改变。
console.log((new Buffer('中文')).length);

//buf.write(string, [offset], [length], [encoding])
//根据参数 offset 偏移量和指定的encoding编码方式，将参数 string 数据写入buffer。 offset偏移量 默认是 0, encoding编码方式默认是 'utf8'。 length长度是将要写入的字符串的bytes大小。 返回number类型，表示多少8位字节流被写入了。如果buffer 没有足够的空间来放入整个string，它将只会写入部分的字符串。 length 默认是 buffer.length - offset。 这个方法不会出现写入部分字符。
var bufWrite = new Buffer(256);
len = bufWrite.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + bufWrite.toString('utf8', 0, len));

//buf.toString([encoding], [start], [end])
//根据 encoding参数（默认是 'utf8'）返回一个解码的 string 类型。还会根据传入的参数 start (默认是0) 和 end (默认是 buffer.length)作为取值范围。


//buf.toJSON()
//返回一个 JSON表示的Buffer实例。JSON.stringify将会默认调用来字符串序列化这个Buffer实例。


//buf[index]
//获取或者设置在指定index索引位置的8位字节。这个值是指单个字节，所以这个值必须在合法的范围，16进制的0x00 到0xFF，或者0 到255。
console.log(new Buffer('ABA')[0]);


//buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])
//进行buffer的拷贝，源和目标可以是重叠的。 targetStart 目标开始偏移 和sourceStart源开始偏移 默认都是 0. sourceEnd 源结束位置偏移默认是源的长度 buffer.length.



//buf.slice([start], [end])
//返回一个新的buffer，这个buffer将会和老的buffer引用相同的内存地址，只是根据 start (默认是 0) 和end (默认是buffer.length) 偏移和裁剪了索引。 负的索引是从buffer尾部开始计算的。


//buf.readUInt8(offset, [noAssert])
//设置参数 noAssert为true表示忽略验证offset偏移量参数。 这意味着 offset可能会超出buffer的末尾。默认是 false。



