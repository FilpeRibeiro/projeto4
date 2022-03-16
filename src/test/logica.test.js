import calculadora from "../logica/calculadora.js";

test("Testar se 8 + 8 = 16", ()=>{
    expect(calculadora.soma(8,8)).toBe(16)
})
test( "testar se 5 -6 = -1", ()=>{
    expect(calculadora.sub(5,6)).toBe(-1)
})
test( "testar se 5 -6 = -1", ()=>{
    expect(calculadora.obj("farinha","agua")).toMatchObject
    ({a:"farinha",
      b:"agua"})
})