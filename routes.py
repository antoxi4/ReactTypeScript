import aiohttp_cors
from views.index_view import index

def setup_routes(app):
    app.router.add_get('/', index)

    # cors = aiohttp_cors.setup(app, defaults={
    #     "*": aiohttp_cors.ResourceOptions(
    #         allow_credentials=True,
    #         expose_headers="*",
    #         allow_headers="*",
    #     )
    # })

    # for route in list(app.router.routes()):
    #     cors.add(route)

    app.router.add_static('/static', './app/dist/output')