import aiohttp_cors
from views.index_view import index

def setup_routes(app):
    app.router.add_get('/', index)
    app.router.add_static('/static', './app/dist/output')