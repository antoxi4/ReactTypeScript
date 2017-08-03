import asyncio
import os

from aiohttp import web
from routes import setup_routes


server_port = 5000 if os.environ.get('ENV') == 'development' else 3000
server_address = '0.0.0.0'


def create_app(*, loop: asyncio.AbstractEventLoop=None):
    loop = loop or asyncio.get_event_loop()

    app = web.Application(loop=loop)
    setup_routes(app)
    return app

app = create_app()

if __name__ == '__main__':
    web.run_app(app, host=server_address, port=server_port)