import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const store = new EventEmitter()
const api = "localhost:8080";
const assignmentCache = [];

store.fetchAssignment = id => {
	return new Promise((resolve, reject))
}