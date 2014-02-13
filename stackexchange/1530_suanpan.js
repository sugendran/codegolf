function render(n) {
  var top_dict = {
    0: "0011",
    1: "1001",
    2: "1100"
  };
  var bottom_dict = {
    0: "0000011111",
    1: "1000001111",
    2: "1100000111",
    3: "1110000011",
    4: "1111000001"
  }
  n=(n+"").split("");
  var cols = n.map(function(v) {
    var top = 0;
    v = +v;
    while(v>4) {
      top++;
      v-=5;
    }
    return [top_dict[top],bottom_dict[v]];
  });
  console.log(cols);
  var tile   = "(__)";
  var spacer = " || ";
}

render(314159);


/*

*/