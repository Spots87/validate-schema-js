import * as yup from 'yup';
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const user = {
        userName : core.getInput('user-name'),
        userAge : core.getInput('user-age'),
        userEmail : core.getInput('user-email'),
    }

    const schema = yup.object().shape({
        name: yup.string().required(),
        age: yup.number().required().positive().integer(),
        email: yup.string().email(),
    });
        
    // check validity
    schema
    .validate({
        name: userName,
        age: parseInt(userAge),
        email: userEmail
    })
    .then(function (user) {
        core.setOutput("is-valid", `${user} is a valid object`);
    })
    .catch(function (err) {
        core.setFailed(err)
    });

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}