// 实现一个useState

// 模拟了一个简单的状态管理系统，支持多个状态的存储和更新
let globalState = {}; // 保存所有状态的值，键为索引
let globalSubscribers = {}; // 保存每个状态的订阅者集合，键为索引
let stateIndex = 0; // 当前状态的索引

function useState(initialState) {
  const currentIndex = stateIndex; // 当前状态的索引
  stateIndex++; // 自增，确保每次调用 useState 都有独立的状态

  // 如果当前索引对应的状态未初始化：
  if (!(currentIndex in globalState)) {
    globalState[currentIndex] = initialState; // 将初始状态存入 globalState
    globalSubscribers[currentIndex] = new Set(); // 初始化一个空的订阅者集合，用于存放监听函数
  }

  const setState = (newState) => {
    if (typeof newState === "function") {
      newState = newState(globalState[currentIndex]); // 支持函数式更新
    }
    globalState[currentIndex] = newState; // 更新状态

    // // 通知所有订阅者，传递新的状态值
    for (const subscriber of globalSubscribers[currentIndex]) {
      subscriber(newState);
    }
  };

  //   允许外部监听状态变化。
  const subscriber = (subscriber) => {
    // 将订阅函数添加到 globalSubscribers。
    globalSubscribers[currentIndex].add(subscriber);
    return () => {
      // 返回一个取消订阅的函数，调用后从集合中移除该订阅者。
      globalSubscribers[currentIndex].delete(subscriber);
    };
  };

  return [globalState[currentIndex], setState, subscriber];
}

// 案例1
const [count, setCount, subscribe] = useState(0);

subscribe((newCount) => {
  console.log("count changed", newCount);
});
console.log("count:", count);
setCount(1);
// 案例2
const [count2, setCount2, subscribe2] = useState(1);

subscribe2((newCount) => {
  console.log("count2 changed", newCount);
});
console.log("count2:", count2);
seio80 - tCount2((count) => count + 1);
