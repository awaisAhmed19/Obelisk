from flask import Flask, render_template, send_from_directory, request
from flask import make_response
import os
from jinja2 import FileSystemLoader,Environment
app= Flask(__name__,static_folder='./frontend/static')

template_loader=FileSystemLoader([
    "./frontend/src/html_templates/"
    ])

app.jinja_loader=template_loader

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/<template>.html')
def template(template):
    try:
        return render_template(f'{template}.html')
    except Exception as e:
        return f"Error:{e}",404 

if __name__=='__main__':
    app.run(debug=True, use_reloader=True, threaded=False)
