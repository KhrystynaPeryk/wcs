'use server'

import {MongoClient} from 'mongodb'

export async function connectDatabase() {
    const client = await MongoClient.connect('mongodb+srv://kristik991:Password1@cluster0.xq5tlgk.mongodb.net/?retryWrites=true&w=majority')
    return client
}

export async function insertDocument(client, col, doc) {
    const db = client.db('wcs')
    await db.collection(col).insertOne(doc)
}

function isInvalidText(text) {
    return !text || text.trim() === ''
}

export async function insertContactDetail(prevState, formData) {
    const newContact = {
        name: formData.get('name'),
        email: formData.get('email'),
        request: formData.get('request')
    }

    const regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regex = new RegExp(regexPattern);

    if (!regex.test(newContact.email)) {
        return {message: 'Invalid email'}
    }
    if (isInvalidText(newContact.name)) {
        return {message: 'Invalid name'}
    }
    if (isInvalidText(newContact.request)) {
        return {message: 'Invalid request'}
    }

    let client
    try {
        client = await connectDatabase()
    } catch(e) {
        return {message: 'Connection to DB failed'}
    }

    try {
        await insertDocument(client, 'contact-details', newContact)
        client.close()
        return {message: 'Submitted successfully!!!'}
    } catch(e) {
        client.close()
        return {message: 'Failed to submit :('}
    }
}