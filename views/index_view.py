from aiohttp import web
import os
import sys
from pathlib import Path



async def index(request):
    with open('./app/dist/index.html') as f:
        html = f.read()

    return web.Response(text=html, content_type='text/html')