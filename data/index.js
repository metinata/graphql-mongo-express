import mongoose from 'mongoose'
import { User } from '../models'

const me = new User({
    username: 'metinata',
    password: '123456',
    email: 'metinatayeter@gmail.com',
    name: 'metin ata',
    surname: 'yeter'
});
const tim = new User({
    username: 'timblack',
    password: '123456',
    email: 'timblack@gmail.com',
    name: 'tim',
    surname: 'black'
});
const jim = new User({
    username: 'jimbrown',
    password: '123456',
    email: 'jimbrown@gmail.com',
    name: 'jim',
    surname: 'brown'
});
const jack = new User({
    username: 'jackgreen',
    password: '123456',
    email: 'jackgreen@gmail.com',
    name: 'jack',
    surname: 'green'
});

const populate = () => {
    me.save()
        .then(me => {
            tim.friends.push(me);
            return tim.save();
        })
        .then(tim => {
            jim.friends.push(tim);
            return jim.save();
        })
        .then(jim => {
            jack.friends.push(jim);
            return jack.save();
        })
        .then(() => {
            console.log('sample data populated...');
        });
}

export default () => {
    User.find().then(result => {
        result.length ? null : populate();
    });
}