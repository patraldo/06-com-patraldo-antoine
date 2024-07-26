import { API_MAILGUN_KEY, API_MAILGUN_DOMAIN } from '$env/static/private';
import fetch from 'node-fetch';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({ username: 'api', key: API_MAILGUN_KEY });


await mg.messages.create(API_MAILGUN_DOMAIN, {
  from: 'cheftech@patraldo.com',
  to: 'agrimaldor@gmail.com',
  subject: 'testhola',
  text: 'hola hola que te pico ...',
  template: 'fyi',
		'h:X-Mailgun-Variables': {test: "test"},

	
});


