<!-- UI 라이브러리 참고: https://joyofcode.xyz/svelte-ui-libraries
특히 요거 맘에듬 https://carbon-components-svelte.onrender.com/components/Tooltip
그 외
https://illright.github.io/attractions//docs/components/text-field
https://daisyui.com/components/

라이브러리의 장점은 잘 알겠다. 그러나 단점이 있다면?:
https://armadillo-dev.github.io/ui/ux/benefit-and-cost-of-ui-component-framework/

...결국 CSS가 중요한 상황이 오기 전까진 일단 쓰지 말자.
로직부터 짜고, 나중에 생각하자. UI 라이브러리는 미관을 고려할 때 사용하자. 지금은 미관은 제껴두자.

-->

<script>
  import Header from "./Header.svelte"
  import Content from "./Content.svelte"




</script>

<main>
  <p>afd</p>
  
  <Header />
  <Content />
</main>


<style>
main {
  height: 800px;
}


/* @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Noto+Serif+KR:wght@200&display=swap');
@import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);

    

:global(*) {
  font-family: 'Noto Serif KR', serif;
}
THIS ACTUALLY WORKS!!
 */

@font-face {
  font-family: 'BookkMyungjo-Bd';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2')
    format('woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'HakgyoansimSantteutbatangL';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimSantteutbatangL.woff2')
    format('woff2');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'SungDongMyungjo';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/govs/sdgu/SungDongMyungjo/SungDongMyungjoR.woff2')
      format('woff2'),
    url('//cdn.jsdelivr.net/korean-webfonts/1/orgs/govs/sdgu/SungDongMyungjo/SungDongMyungjoR.woff')
      format('woff');
}

@font-face {
  font-family: 'ChosunSm';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.1/ChosunSm.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'designhouseOTFLight00';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/designhouseOTFLight00.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}

:global(*) {
  font-family: 'Jeju Myeongjo', serif;
}

.jejumyeongjo * {
  font-family: 'Jeju Myeongjo', serif;
}
.NotoSerifKR * {
  font-family: 'Noto Serif KR', serif;
}
/* 
font-family: 'Noto Serif KR', serif;
font-family: 'Jeju Myeongjo', serif;
font-family: 'Nanum Myeongjo', serif; 
*/
</style>


