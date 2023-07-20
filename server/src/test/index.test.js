const index = require('../routes/index.js');
const session = require('supertest');
const http = require('http');
const agent = session(index)

let server;

describe("TEST Rutas PI Countries", () => {

	beforeAll((done) => {
		server = http.createServer(index);
		done();
	});

	afterAll((done) => {
		server.close(done);
	})

	describe('GET /countries', () => {
		it('Responde con status: 200', async() => {
			await agent.get('/countries').expect(200);
		});
		it('Responde con un array de objetos de países: [{...},{...},{...}]', async() => {
			const response = await agent.get('/countries');
			
			expect(response.type).toEqual('application/json');
			expect(Array.isArray(response.body)).toBe(true);

			const countrySchema = {
				area: expect.any(String),
				id: expect.any(String),
				name: expect.any(String),
				flag: expect.any(String),
				continent: expect.any(String),
				capital: expect.any(String),
				population: expect.any(String),
				Activities: expect.anything(),
			};

			expect(response.body).toEqual(
				expect.arrayContaining([expect.objectContaining(countrySchema)])
			);
		});
		it('Si hay un error responde con status: 500', async () => {
			await agent.get('/countries').expect(500).timeout(10000);
		});
	});
});

describe('GET /activities', () => {
	it('Responde con status: 200 y un array de objetos de actividades', async() => {
		const response = await agent.get('/activities');

		expect(response.status).toEqual(200);
		expect(response.type).toEqual('application/json');

		const activitySchema = {
			id: expect.any(String),
			name: expect.any(String),
			difficulty: expect.any(Number),
			duration: expect.any(Number),
			season: expect.any(String),
			Country: expect.anything(),
		};

		expect(response.body).toEqual(
			expect.arrayContaining([expect.objectContaining(activitySchema)])
		);
	});
	it('Si hay un error responde con status: 500', async() => {
		await agent.get('/activities').expect(500);
	})
})