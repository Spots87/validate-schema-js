const Ajv = require("ajv")
const ajv = new Ajv()
const addFormats = require("ajv-formats")
addFormats(ajv)
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const schema = {
        type: "object",
        properties: {
          name: {type: "string"},
          age: {type: "integer"},
          email: {
            type: "string",
            format: "email"
          },
        },
        required: ["name", "age", "email"],
        additionalProperties: false
    }

    const validate = ajv.compile(schema)
     
    const user = {
        userName : core.getInput('user-name'),
        userAge : core.getInput('user-age'),
        userEmail : core.getInput('user-email'),
    }

    const valid = validate(user)

    if(valid){
        core.setOutput("is-valid", `${user} is a valid object`);
    }else{
        core.setFailed(validate.errors)
    }

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}