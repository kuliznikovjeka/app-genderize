import { getRecord } from './requests.mjs';

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(data => console.log(data));


fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.text())
	.then(data => console.log(data));


getRecord(1)
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.error(error)
	})

getRecord(3)
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.error(error)
	})

getRecord(800)
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.error(error)
	})

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => {
		const headers = response.headers;
		console.log(headers.get('Content-Type'));
	});


