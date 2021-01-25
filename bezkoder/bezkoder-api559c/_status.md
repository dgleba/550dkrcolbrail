

works.


_____________


https://bezkoder.com/node-js-jwt-authentication-mysql/



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$ http 192.168.88.60:8087/api/test/all
HTTP/1.1 200 OK
Access-Control-Allow-Headers: x-access-token, Origin, Content-Type, Accept
Access-Control-Allow-Origin: http://localhost:8087
Connection: keep-alive
Content-Length: 15
Content-Type: text/html; charset=utf-8
Date: Sun, 24 Jan 2021 23:43:08 GMT
ETag: W/"f-0eME85zdMC7hdiIboG8MHxHEIr0"
Keep-Alive: timeout=5
Vary: Origin
X-Powered-By: Express

Public Content.

albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$ http 192.168.88.60:8087/api/test/user
HTTP/1.1 403 Forbidden
Access-Control-Allow-Headers: x-access-token, Origin, Content-Type, Accept
Access-Control-Allow-Origin: http://localhost:8087
Connection: keep-alive
Content-Length: 32
Content-Type: application/json; charset=utf-8
Date: Sun, 24 Jan 2021 23:43:23 GMT
ETag: W/"20-2RqHD6kaUW9yXBkJM4BxciU8/Ik"
Keep-Alive: timeout=5
Vary: Origin
X-Powered-By: Express

{
    "message": "No token provided!"
}

albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$ http 192.168.88.60:8087/api/test/mod
HTTP/1.1 403 Forbidden

=================================================




 id | username | email              | password                                                     | createdAt           | updatedAt           |
+----+----------+--------------------+--------------------------------------------------------------+---------------------+---------------------+
|  1 | admin    | admin@bezkoder.com | $2a$08$w3cYCF.N0UQZO19z8CQSZ.whzxFS5vMoi9k51g3TQx9r5tkwrIXO2 | 2020-01-13 09:21:51 | 2020-01-13 09:21:51 |
|  2 | mod      | mod@bezkoder.com   | $2a$08$tTj1l28esAxPSSvl3YqKl./nz35vQF7Y76jGtzcYUhHtGy6d.1/ze | 2020-01-13 09:22:01 | 2020-01-13 09:22:01 |
|  3 | zkoder   | user@bezkoder.com  | $2a$08$U2F07dLyYZjzTxQbFMCAcOd1k8V1o9f6E4TGVJHpy0V6/DC7iS0CS | 2020-01-13 09:23:25 | 2020-01-13 09:23:25 |
+----+----------+--------------------+--------------------------------------------------------------+---------------------+---------------------+


=================================================

http 192.168.88.60:8087/api/auth/signup username=mod3 email=m3@e.com password=123 roles='["moderator","user"]'

albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$ http 192.168.88.60:8087/api/auth/signup username=mod3 email=m3@e.com password=123 roles='["moderator","user"]'
HTTP/1.1 400 Bad Request
Access-Control-Allow-Headers: x-access-token, Origin, Content-Type, Accept
{
    "message": "Failed! Role does not exist = ["
}

    
    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    #@  
    #@  
    #@  
    #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   2021-01-24[Jan-Sun]19-04PM 




http 192.168.88.60:8087/api/auth/signin username=mod  password=123 

albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$ http 192.168.88.60:8087/api/auth/signin username=mod  password=123
HTTP/1.1 200 OK
Access-Control-Allow-Headers: x-access-token, Origin, Content-Type, Accept
Access-Control-Allow-Origin: http://localhost:8087
Connection: keep-alive
Content-Length: 219
Content-Type: application/json; charset=utf-8
Date: Mon, 25 Jan 2021 00:04:26 GMT
ETag: W/"db-+koOqNeo9Dv/UeMvvaOFNaWoCuU"
Keep-Alive: timeout=5
Vary: Origin
X-Powered-By: Express

{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjExNTMzMDY2LCJleHAiOjE2MTE2MTk0NjZ9.mxUiZ6uB0qfijiv93R-HcdKxXJigSWSWPByaBULD22c",
    "email": "m@e.com",
    "id": 1,
    "roles": [
        "ROLE_USER"
    ],
    "username": "mod"
}

token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjExNTMzMDY2LCJleHAiOjE2MTE2MTk0NjZ9.mxUiZ6uB0qfijiv93R-HcdKxXJigSWSWPByaBULD22c"


http get  192.168.88.60:8087/api/test/user "x-access-token: $token"
http get  192.168.88.60:8087/api/test/user "x-access-token: $token"
http get  192.168.88.60:8087/api/test/mod "x-access-token: $token"



note:  -H "x-access-token: $token"




pth=http://192.168.88.60:8087/api/test/user
curl -i -H "Content-Type: application/json"  --request GET \
  --url $pth -H "x-access-token: $token"

albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$ curl -i -H "Content-Type: application/json"  --request GET \
>   --url $pth -H "x-access-token: $token"
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:8087
Vary: Origin
Access-Control-Allow-Headers: x-access-token, Origin, Content-Type, Accept
Content-Type: text/html; charset=utf-8
Content-Length: 13
ETag: W/"d-AznB8FXUt+NgRdD3M3LvzELOYl8"
Date: Mon, 25 Jan 2021 00:16:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5

User Content.albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$


    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$ http get  192.168.88.60:8087/api/test/mod "x-access-token: $token"
HTTP/1.1 403 Forbidden
Access-Control-Allow-Headers: x-access-token, Origin, Content-Type, Accept
Access-Control-Allow-Origin: http://localhost:8087
Connection: keep-alive
Content-Length: 37
Content-Type: application/json; charset=utf-8
Date: Mon, 25 Jan 2021 00:17:40 GMT
ETag: W/"25-9u7N3c55n209s3z9X7qdOJkOE5Y"
Keep-Alive: timeout=5
Vary: Origin
X-Powered-By: Express

{
    "message": "Require Moderator Role!"
}

albe@vamp398:/srv/dkr/550dkrcolbrail/bezkoder$

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



