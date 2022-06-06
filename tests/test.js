const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
// const should = chai.should();
// const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET students', () => {
    it('it should GET all students', (done) => {
        chai.request(server)
            .get('/studentstable')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});
