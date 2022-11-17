/**
 * 最小栈
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * initialize your data structure here.
 */

// 栈：先进后出
 var MinStack = function() {
   this.stack = []
   // 辅助函数：记录每个元素对应的最小值
   this.minStack = [Infinity] 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  const min = Math.min(this.minStack[this.minStack.length - 1], val)
  this.minStack.push(min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};



// 2: 
MinStack.prototype.push = function(val) {
  if (this.stack.length == 0) {
    this.stack.push([val, val])
  } else {
    const min = Math.min(this.stack[this.stack.length - 1][1], val)
    this.stack.push([val, min])
  }
};

MinStack.prototype.pop = function() {
  this.stack.pop()
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1][0]
};

MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1][1]
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */