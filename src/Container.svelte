<script>
  import {getContext} from 'svelte'
  export let container;

  let textarea;
  let inputTextarea;
  let hun = 300
  let h = "height: " + hun.toString() + "px"

  let createNewContainer = getContext('createNewContainer')
  
  function onTextareaKeydown(e) {
    if((e.key === 'Enter' && event.ctrlKey)) {
      /* goto or create new Container, and focus on it */
      createNewContainer()
    }    
  }

  function onTextareaChange() {
    function resizeTextarea() {
      inputTextarea.style.height = "0px"
      inputTextarea.style.height = (inputTextarea.scrollHeight) + "px"
      textarea.style.height = inputTextarea.style.height
      textarea.value = inputTextarea.value //높이 먼저 변한 후 value 변경됨
    }
    resizeTextarea()
    

  }

</script>

<main>
  <div id="container">
    <div id="options">
      <button type="button" class="focus">F!</button>
      <button type="button" class="fold">fold</button>
    </div>
    <div id="content">
      <span id="index">1.1.1</span>
      <div id="textareas">
        <textarea
          bind:this={inputTextarea}
          on:keydown={(e) => onTextareaKeydown(e)}
          on:input={() => onTextareaChange()}
          id="inputTextarea" rows=1
          placeholder={container}></textarea>
        <textarea
          bind:this={textarea}
          on:focus={() => inputTextarea.focus()}
          id="visibleTextarea" spellcheck="false" rows=1></textarea>
      </div>
    </div>
  </div>
</main>

<style>
  * {
    box-sizing: border-box;
  }

  #container {

    width: 100%;
    height: fit-content;
    display: flex;

    font-family: 'BookkMyungjo-Bd';
    font-weight: 100;
    font-style: normal;
    font-size: 16px;
  }
  #content {
    border: 1px solid #e0e0e0;
    
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: stretch;
    align-content: flex-start;
  }
  #options {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80px;
    margin-right: 4px;

    font-size: 12px;
  }



  button {
    border: 1px inset #e0e0e0;
    border-radius: 8px;

    /* width: fit-content; */
    height: 2em;
    
    font-size: inherit;
    background-color: white;
    
  }
  button:hover,
  textarea:hover,
  #content:hover {
    border-color: #646cff;
    /* background-color: blue;/ */
  }
  button:focus,
  button:focus-visible,
  textarea:focus,
  textarea:focus-visible  {
    outline: 2px solid #646cff;
  }

  #textareas {
    position:relative; /* 중요 */
    width: 100%;
    height: fit-content;
    display: flex; /* 중요 */
  }

  #index {
    border: 1px outset #e0e0e0;
    height: fit-content;
  }
  textarea {

    border: 1px solid transparent;
    font-size: inherit;
    
    width: 100%;
    height: fit-content;
    
    padding: 0px;
    overflow-y: hidden;
    resize: none;
  }
  #visibleTextarea {
    background-color: transparent;
  }
  #inputTextarea {
    position:absolute;
    
    border: none;
    color: transparent;
    background-color: transparent;
    z-index: 1;
    
  }
  #inputTextarea::selection {
    color: white;
    background: #be9eff;
  }
</style>
