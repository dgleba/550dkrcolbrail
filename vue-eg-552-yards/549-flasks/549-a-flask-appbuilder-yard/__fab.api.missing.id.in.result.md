
# Solved.

https://github.com/dpgaspar/Flask-AppBuilder/issues/1543



# Describe the expected results

I am looking for a way to get the ids within the result JSON, something like the following.

"result":[{"id":3, title":"www"},{"id":4, title":"33"}]
Can someone help suggest a way this can be done?

# Describe the actual results

Below, the ids are in an array separate from the result JSON object.

{"count":3,"ids":[3,4],"result":[{"title":"www"},{"title":"33"}]}


# Steps to reproduce

albe@vamp398:/srv/dkr/532dkrcollection/549-flasks/549-a-flask-appbuilder-yard/549a-fab$
curl -X GET "http://192.168.88.93:14224/api/v1/posts/?q=(columns:!(id,title),keys:!(none))" -H "accept: application/json" -H "Authorization: Bearer $token"



# Ans.


You can just add the id to the list of columns like this: https://github.com/apache/superset/blob/master/superset/databases/api.py#L130

use list_columns and include id.

I had show_columns, https://github.com/dgleba/532dkrcollection/blob/master/549-flasks/549-a-flask-appbuilder-yard/549a-fab/demo1/app/api.py#L104

I should have had list_columns.



