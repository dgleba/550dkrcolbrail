from flask_appbuilder import ModelRestApi
from flask_appbuilder.api import BaseApi, expose
from flask_appbuilder.models.sqla.interface import SQLAInterface
from flask_appbuilder.models.filters import BaseFilter
from sqlalchemy import or_

from . import appbuilder, db
from .models import Contact, ContactGroup, Gender, Post
# ModelOMParent


def fill_gender():
    try:
        db.session.add(Gender(name="Male"))
        db.session.add(Gender(name="Female"))
        db.session.add(Gender(name="Nonbinary"))
        db.session.commit()
    except Exception:
        db.session.rollback()


db.create_all()
fill_gender()


class GreetingApi(BaseApi):
    resource_name = "greeting"
    openapi_spec_methods = {
        "greeting": {
            "get": {
                "description": "Override description",
            }
        }
    }

    @expose('/')
    def greeting(self):
        """Send a greeting
        ---
        get:
          responses:
            200:
              description: Greet the user
              content:
                application/json:
                  schema:
                    type: object
                    properties:
                      message:
                        type: string
        """
        return self.response(200, message="Hello")


appbuilder.add_api(GreetingApi)


class CustomFilter(BaseFilter):
    name = "Custom Filter"
    arg_name = "opr"

    def apply(self, query, value):
        return query.filter(
            or_(
                Contact.name.like(value + "%"),
                Contact.address.like(value + "%"),
            )
        )


class ContactModelApi(ModelRestApi):
    resource_name = "contact"
    datamodel = SQLAInterface(Contact)
    allow_browser_login = True

    search_filters = {"name": [CustomFilter]}
    openapi_spec_methods = {
        "get_list": {
            "get": {
                "description": "Get all contacts, filter and pagination",
            }
        }
    }


appbuilder.add_api(ContactModelApi)


class GroupModelApi(ModelRestApi):
    resource_name = "group"
    datamodel = SQLAInterface(ContactGroup)
    allow_browser_login = True

appbuilder.add_api(GroupModelApi)


# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


class PostModelApi(ModelRestApi):
    resource_name = "posts"
    datamodel = SQLAInterface(Post)
    allow_browser_login = True
    add_columns =  [ 'title', 'body', 'created_at', 'updated_at', ]
    edit_columns = [ 'title', 'body', 'created_at', 'updated_at', ]
    show_columns = [ 'id', 'title', 'body', 'created_at', 'updated_at', ]
    #
    # add id to list columns to have id in the result json dgleba 2021-01-11
    # this is needed so id is with the json data. id is needed to be able to update a record.
    #
    list_columns = [ 'id', 'title', 'body', 'created_at', 'updated_at', ]

appbuilder.add_api(PostModelApi)



# class ModelOMParentApi(ModelRestApi):
#     allow_browser_login = True
#     datamodel = SQLAInterface(ModelOMParent)
# appbuilder.add_api(ModelOMParentApi)

