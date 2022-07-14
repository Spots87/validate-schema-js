# validate schema js

This action validates a inputs against a schema defined in index.js

## Inputs

## `user-name`

**Required** The name of the User to validate. Default `"Tim"`.

## `user-age`

**Required** The age of the User to validate. Default `"35"`.

## `user-email`

**Required** The email of the User to validate. Default `"admin@example.com"`.


## Outputs

## `is-valid`

Message declaring if inputs are valid from schema.

## Example usage

uses: Spots87/validate-schema-js@v1
with:
  user-name: 'Joe'
  user-age: '25'
  user-email: 'joeCool@gmail.com'