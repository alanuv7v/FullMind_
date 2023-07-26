/* class thot() {
  content: String; //html in plain text
  parents: Number[];
  children: Number[];
} */
type thot = {
  content: String
  parents: Number[]
  children: Number[]
}
function thotID() {
  return 0;
}

/*thots: object = {
  thotID : 
}*/

class Head {
  thots:thot[] = []
}