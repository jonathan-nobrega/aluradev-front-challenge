const data = [
    {
        "id": 0,
        "title": "Exemplo de JavaScript",
        "description": "Esse é um bloco qualquer que foi retirado do de exemplo do figma.",
        "code": `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

        const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
        
        const unfold = (f, seed) => {
          const go = (f, seed, acc) => {
            const res = f(seed)
            return res ? go(f, res[1], acc.concat([res[0]])) : acc
          }
          return go(f, seed, [])
        }`,
        "likes": 5,
        "comments": 2,
        "color": "#9AFF6B"
    },
    {
        "id": 1,
        "title": "Exemplo de CSS",
        "description": "Esse é um pequeno exemplo de CSS dentro de um projeto.",
        "code": `@import url('https://fonts.googleapis.com/css?family=Nova+Mono&display=swap');

            * {
                box-sizing: border-box;
            }
            
            body {
                min-height: 100vh;
                background-color: #18181c;
                display: flex;
                align-items: center;
            `,
        "likes": 3,
        "comments": 1,
        "color": "#6B83FF"
    },
    {
        "id": 2,
        "title": "Exemplo de HTML",
        "description": "Um pequeno bloco de HTML para completar os exemplos.",
        "code": `<!-- page heading -->
            <div class='container container-dark p-y-md'>
            <div class='header-content'>
                <h1>Material Search Animation</h1>
                <h2>Usign CSS Transitions</h2>
            </div>
            </div>
            
            
            <!-- page content + floating button -->
            <div class='container p-y-md'>
            <div class='control'>
                <div class='btn-material'></div>`,
        "likes": 1,
        "comments": 2,
        "color": "#FF6BCD"
    }
]

export default data;