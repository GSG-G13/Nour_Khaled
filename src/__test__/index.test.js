const request = require('supertest');

const app = require('../app');

test("/", (done) => {
    return request(app)
    .get("/")
      .expect(200)
      .expect('Content-Type', /html/)
    .end(function (err, res) {
        if (err) return done(err);
      done();
    });
});

// test("/movie", (done) => {
//   return request(app)
//     .get("/movie")
//     .expect(200)
//     .expect('Content-Type',/json/)
//     .end(function (err, res) {
//       if (err) return done(err);
//       done();
//     });
// })