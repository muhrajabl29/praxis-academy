  let s = '';
  for (let i = 0; i < 7; i++) {
      for (let j = 0; j <= i; j++) {
          s += '#';
          }
          s += '\n';
      }
      console.log(s);

      let size = 4;
      let board ="";
      for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0)
            board += " ";
            else
            board += "#";
              }
              board += '\n';
          }
          console.log(board);