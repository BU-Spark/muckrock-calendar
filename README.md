# muckrock-calendar
A calendar/timeline view of MuckRock requests. A sister service in coloaboration with MuckRock

## To start

Please register an account on Muckruck, and get your API KEY. Your token can be obtained on the bottom left-hand side of your [profile page](https://www.muckrock.com/accounts/profile/). When making a request, token should be placed under /frontend/muckrock.ts, the token should be included as an authentication header. 

```
headers = {'Authorization': 'Token %s' % token}
```
```
/frontend/service/muckrock.ts

export const apiConfig  = {
    "API_KEY": "YOUR API KEY HERE",
}
```
