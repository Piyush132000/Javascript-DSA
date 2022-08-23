let debounce = (call, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
};


const getData =()=>{
    console.log("Hello Frontend");
}

const bounce = debounce(getData , 1000);
