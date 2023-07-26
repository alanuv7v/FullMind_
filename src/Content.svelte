<script>
import Container from "./Container.svelte"
import {containers} from "./store.js"
import {setContext} from "svelte"
/* import {thisHead} from "./App.svelte" */

function createNewContainer() {
  alert("triggered")
  /* alert({containers})
  containers.update(containers => {containers=[...containers, ""]; return containers;}) */
}

setContext('createNewContainer', createNewContainer)


let max_find_repetition = 20; 

/* function fetchThots_indentedThotsView(seedThot) {
  //자식들을 현재 들어와있는 Head의 thots에서 id로 찾기
  let find_repetition = 0;
  let result = []
  function findChildren(thot) {
    result = [...result, thot.id]
    find_repetition++;
    for (id of thot.children) {
      child = thisHead.thots(id)
      if (find_repetition < max_find_repetition) {
        findChildren(child)
      }
      else {
        break;
      }
    }
  }
  findChildren(seedThot)
  return result
}

fetchThots_indentedThotsView("111") */

let thisHead = {
  thots: [
    {
      id: 0,
      children: [1,4]
    },
    {
      id: 1,
      children: [5]
    },
    {
      id: 2,
      children: [3]
    },
    {
      id: 3,
      children: []
    },
    {
      id: 4,
      children: [2]
    },
    {
      id: 5,
      children: []
    }
  ]
}

function fetchThots_indentedThotsView(seedThot) {
  //자식들을 현재 들어와있는 Head의 thots에서 id로 찾기
  let find_repetition = 0;
  let result = []
  function findChildren(thot) {
    result = [...result, thot.id]
    find_repetition++;
    for (let id of thot.children) {
      let child = thisHead.thots.find(thot => thot.id === id)
      if (find_repetition < max_find_repetition) {
        findChildren(child)
      }
      /* else {
        break; 
      } */
    }
  }
  findChildren(seedThot)
  return result
}

let seedThot = {
    id: 0,
    children: [1,4]
  }

alert(fetchThots_indentedThotsView(seedThot))


</script>

<main>
  {#each $containers as container, index(container)}
    <Container {container}/>
  {/each}
  <p>{$containers}</p>
</main>


<style>
  main {
    border: 4px solid lightgray;
    height: 100%;

  }
</style>
