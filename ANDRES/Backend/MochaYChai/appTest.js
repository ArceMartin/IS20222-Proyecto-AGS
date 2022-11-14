const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../Pulpa/app');

chai.should();
chai.use(chaiHttp);

describe('Task API',() =>{
    it("It should GET all the task", (done)=>{
        chai.request(app)
            .use("/Cursos")
            .end((err,response)=>{
            response.should.have.status(200);
            response.body.should.be.a('array');
        })
    })
    describe()


});
