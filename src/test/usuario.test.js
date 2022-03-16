
import  request  from "supertest";

import app from "../app.js";

describe('GET /usuarios', ()=>{
    test('Se o status e 200', ()=>{
        return request(app).get('/usuario')
        .then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})