
status


_____________

goal
_____________


_____________

_____________


see
    https://www.techiediaries.com/nestjs-tutorial-jwt-authentication/


=================================================

albe@vamp398:/srv/dkr/550dkrcolbrail/551dkrcol/nestjss/33nestjs-jwt-authentication$ npm start

> crud-app@0.0.0 start /srv/dkr/550dkrcolbrail/551dkrcol/nestjss/33nestjs-jwt-authentication
> ts-node -r tsconfig-paths/register src/main.ts

[Nest] 21562   - 1/17/2021, 11:04:54 PM   [NestFactory] Starting Nest application...
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [InstanceLoader] TypeOrmModule dependencies initialized +95ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [InstanceLoader] JwtModule dependencies initialized +1ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [InstanceLoader] TypeOrmCoreModule dependencies initialized +70ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [InstanceLoader] ContactsModule dependencies initialized +1ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [InstanceLoader] AuthModule dependencies initialized +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RoutesResolver] AppController {/}: +21ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RouterExplorer] Mapped {/, GET} route +3ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RoutesResolver] ContactsController {/contacts}: +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RouterExplorer] Mapped {/create, POST} route +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RouterExplorer] Mapped {/:id/update, PUT} route +1ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RouterExplorer] Mapped {/:id/delete, DELETE} route +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RoutesResolver] AuthController {/auth}: +1ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RouterExplorer] Mapped {/login, POST} route +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [RouterExplorer] Mapped {/register, POST} route +0ms
[Nest] 21562   - 1/17/2021, 11:04:55 PM   [NestApplication] Nest application successfully started +3ms


=================================================


http post 192.168.88.60:3000/auth/register name=dg email=dgleba@gmail.com password=123


albe@vamp398:/srv/dkr/550dkrcolbrail/vue-eg-552-yards/brail542c17$ http post 192.168.88.60:3000/auth/register name=dg email=dgleba@gmail.com password=123
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 76
Content-Type: application/json; charset=utf-8
Date: Mon, 18 Jan 2021 04:10:04 GMT
ETag: W/"4c-m+n9igxZeZd2ZjRW18ZyVAZH+uY"
X-Powered-By: Express

{
    "avatar": "",
    "email": "dgleba@gmail.com",
    "id": 1,
    "name": "dg",
    "password": "123"
}

albe@vamp398:/srv/dkr/550dkrcolbrail/vue-eg-552-yards/brail542c17$
albe@vamp398:/srv/dkr/550dkrcolbrail/vue-eg-552-yards/brail542c17$


=================================================

albe@vamp398:/srv/dkr/550dkrcolbrail/vue-eg-552-yards/brail542c17$ http post http://192.168.88.60:3000/contacts/create firstName=dan lastName=bb email=g@e.com phone=226-921-7316 city=paris country=france
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 117
Content-Type: application/json; charset=utf-8
Date: Mon, 18 Jan 2021 04:10:38 GMT
ETag: W/"75-MsN9DgFqFUq1c7onLTK+eda6HCI"
X-Powered-By: Express

{
    "city": "paris",
    "country": "france",
    "email": "g@e.com",
    "firstName": "dan",
    "id": 1,
    "lastName": "bb",
    "phone": "226-921-7316"
}

albe@vamp398:/srv/dkr/550dkrcolbrail/vue-eg-552-yards/brail542c17$


=================================================


http post 192.168.88.60:3000/auth/login name=dg password=123


=================================================
