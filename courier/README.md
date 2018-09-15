# Courier service

Sends texts and emails

## Deploying with now 

This required having the correct twilio credentials set up as now secrets. 
Then run: 

```
now -e TWILIO_PHONE_NUMBER=@twilio_phone_number -e TWILIO_ACCOUNT_SID=@twilio_account_sid -e TWILIO_AUTH_TOKEN=@twilio_auth_token
```