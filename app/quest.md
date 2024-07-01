# question

I have body represtend by this scss

```scss
body {
  color: #cccccc;
  background-color: #282c34;
  height: 100vh;
  display: grid;
  grid-template-rows: 48px 1fr;
  grid-template-columns: 54px 300px 1fr;
  grid-template-areas:
    "header header header"
    "sidebar option-section content-section";
}
```

and inside it there content-secition > solutionContainer > solution > svg

```scss
.content-section {
  grid-area: content-section;
  background-color: #282c34;
  position: relative;
}

.solutionContainer {
  border: 1px solid orange;
  width: 100%;
  height: 100%;

  .solution{


    svg{

    }
  }
}
```

and main parent of svg is represetned by this 
``<svg viewBox="-61.63538 -37.499966 2570.9902 1575" xmlns="http://www.w3.org/2000/svg">``

I want the svg to remain inside .solutionContainer and never clip or change it's aspect ratio. It should not stretch .solutionContainer itself. How should I do it?