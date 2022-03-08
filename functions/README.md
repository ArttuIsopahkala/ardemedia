Before deploying functions to Firebase, set config values for Functions:

```
firebase functions:config:set sendgrid.key="<api key from sendgrid>"
```

For emulator, set sendgrid key like this:

```
firebase functions:config:get > .runtimeconfig.json
```
